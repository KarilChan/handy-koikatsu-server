import {
	CommandResponse,
	HandyMode,
	ModeResponse,
	SetSpeedResponse,
	SettingsResponse,
	SyncPlayResponse,
	SyncPrepareResponse
} from 'thehandy/lib/types';
import IGetServerTimeResponse from '../types/IGetServerTimeResponse';
import {ICsv} from '../csv/scriptedPoses';
import {createAxiosInstance} from './createAxiosInstance';
import {version} from '../../package.json';
import {AxiosInstance} from 'axios';
import {HandyApi} from './HandyApi';
import {EHandySyncMode} from '../types/handyApi/EHandySyncMode';

export default class HandyApiV1 implements HandyApi {

	private mode: EHandySyncMode = EHandySyncMode.scripted;

	private readonly ax: AxiosInstance;

	public enabled = true; // user set
	public ready = true; // self set

	private serverTimeOffset = 0;

	/**
	 * Where the pre-generated scripts are hosted
	 * You can run generateCsv.ts to create your own scripts
	 */
	private readonly scriptBaseUrl = `https://www.karil.rs/handykk/${version}/`;
	private readonly autoThrottle = 1000;

	private lastAdjust = Date.now();
	private readonly scriptThrottle = 9 * 1000; // 9s between re-syncs

	public constructor(connKey: string) {
		this.ax = createAxiosInstance(connKey, `https://www.handyfeeling.com/api/v1/${connKey}/`);
	}

	public getMode(): EHandySyncMode {
		return this.mode;
	}

	public setMode(newMode: EHandySyncMode): Promise<ModeResponse | void> {
		return new Promise((resolve, reject) => {
			if (newMode === this.mode) {
				return resolve();
			}
			this.ready = false;
			this.ax.get<ModeResponse>('setMode', {
				params: {
					mode: newMode === EHandySyncMode.auto ? HandyMode.automatic : HandyMode.sync
				}
			})
				.then(response => {
					if (response.data.success) {
						this.mode = newMode
						return resolve(response.data);
					} else {
						return reject();
					}
				})
				.catch(err => {
					reject(err)
				})
				.finally(() => {
					this.ready = true;
				});
		})
	}

	public checkOnline(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.enabled) {
				return resolve();
			}
			this.ax.get<SettingsResponse>('getSettings')
				.then(response => {
					if (!response.data.connected) {
						console.warn('Device not connected');
					}
					return resolve();
				})
				.catch(err => reject(err))
		})
	}


	public getServerTime(): Promise<number> {
		return new Promise(resolve => {
			this.ax.get<IGetServerTimeResponse>('getServerTime')
				.then(response => {
					return resolve(response.data.serverTime)
				})
				.catch(err => console.log(err));
		});
	}

	// stolen from https://github.com/defucilis/thehandy
	public async syncTime(): Promise<number> {
		// don't count the first one
		await this.getServerTime();

		let offsets = [];
		for (let i = 0; i < 30; i++) { // 30 trips
			const startTime = Date.now();

			const serverTime = await this.getServerTime();
			const endTime = Date.now();
			const rtd = endTime - startTime;
			const estimatedServerTime = Number(serverTime) + rtd / 2;
			const offset = estimatedServerTime - endTime;
			offsets.push(offset);
		}

		// discard all readings more than one standard deviation from the mean, to reduce error
		const mean = offsets.reduce((acc, offset) => acc + offset, 0) / offsets.length;
		const errors = offsets.map(offset => Math.pow(offset - mean, 2));
		const sd = Math.sqrt(errors.reduce((acc, offset) => acc + offset, 0) / errors.length);
		offsets = offsets.filter(offset => Math.abs(offset - mean) < sd);

		// get average offset
		this.serverTimeOffset = offsets.reduce((acc, offset) => acc + offset) / offsets.length;
		console.log('new offset', this.serverTimeOffset);
		return this.serverTimeOffset;
	}

	public syncPrepare(csv: ICsv): Promise<SyncPrepareResponse> {
		return new Promise((resolve, reject) => {
			this.ready = false;
			this.ax.get<SyncPrepareResponse>('syncPrepare', {
				params: {
					url: this.scriptBaseUrl + csv.name,
					name: csv.name,
					size: csv.size,
					timeout: 30000
				}
			})
				.then(response => {
					if (response.data.success) {
						return resolve(response.data);
					} else {
						return reject(response.data.error);
					}
				})
				.catch(err => {
					reject(err)
				})
				.finally(() => {
					this.ready = true;
				});
		})
	}

	public syncPlay(): Promise<SyncPlayResponse> {
		return new Promise<SyncPlayResponse>((resolve, reject) => {
			if (!this.readyAndEnabled()) {
				return reject('Not ready or enabled');
			}
			this.ax.get<SyncPlayResponse>('syncPlay', {
				params: {
					play: true,
					serverTime: Math.round(Date.now() + this.serverTimeOffset),
					time: 0,
				}
			})
				.then(response => {
					if (response.data.success) {
						return resolve(response.data);
					} else {
						return reject(response.data.error);
					}
				})
				.catch(err => reject(err));
		})
	}

	public pause(): Promise<SyncPlayResponse | void> {
		return new Promise((resolve, reject) => {
			if (!this.readyAndEnabled()) {
				return reject('Not ready or enabled');
			}
			if (this.mode === EHandySyncMode.scripted) {
				this.ax.get<SyncPlayResponse>('syncPlay', {
					params: {
						play: false
					}
				})
					.then(response => {
						if (response.data.success) {
							return resolve(response.data);
						} else {
							return reject(response.data.error);
						}
					})
					.catch(err => reject(err));
			} else {
				this.setSpeed(0)
					.then(() => {
						return resolve();
					})
					.catch(err => reject(err));
			}
		})
	}

	public setSpeed(speed: number): Promise<void> {
		return new Promise((resolve, reject) => {
			if (speed > 100 || speed < 0) {
				return reject(`Invalid speed: ${speed}`);
			}
			this.ax.get<SetSpeedResponse>('setSpeed', {
				params: {
					speed: Math.round(speed),
					type: '%'
				}
			})
				.then(resp => {
					if (resp.data.error) {
						return reject(resp.data.error);
					} else {
						return resolve();
					}
				})
				.catch(err => reject(err));
		})
	}


	public syncAdjustTimeStamp(time: number): Promise<CommandResponse> {
		return new Promise((resolve, reject) => {
			if (time < 0) {
				return reject('Invalid time');
			}
			if (!this.readyAndEnabled()) {
				return reject('Not ready or enabled');
			}
			this.ax.get<CommandResponse>('syncPlay', {
				params: {
					play: true,
					timeout: 30000,
					serverTime: Math.round(Date.now() + this.serverTimeOffset),
					time: Math.round(time),
				}
			})
				.then(response => {
					if (response.data.success) {
						return resolve(response.data);
					} else {
						return reject(response.data.error);
					}
				})
				.catch(err => reject(err));
		})
	}

	/*
		public startAuto(): Promise<unknown> {
			return new Promise(resolve => {
				this.ax.get<CommandResponse>('syncPlay', {
					params: {
						play: true,
						timeout: 30000,
						serverTime: Math.round(Date.now() + this.serverTimeOffset),
						time: Math.round(time),
					}
				})
					.then(response => {
						if (response.data.success) {
							return resolve(response.data);
						} else {
							return reject(response.data.error);
						}
					})
					.catch(err => reject(err));

			})
		}
	*/

	private readyAndEnabled(): boolean {
		if (!this.ready) {
			return false;
		}
		if (!this.enabled) {
			console.warn('Not enabled');
		}
		return true;
	}

	throttleRequests(): boolean {
		const now = Date.now();
		const throttle = this.mode === EHandySyncMode.scripted ? this.scriptThrottle : this.autoThrottle;
		if ((now - this.lastAdjust) > throttle) {
			this.lastAdjust = now;
			return false;
		} else {
			return true;
		}
	}

}
