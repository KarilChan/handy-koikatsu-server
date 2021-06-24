import {
	CommandResponse,
	HandyMode,
	ModeResponse,
	SettingsResponse,
	SyncPlayResponse,
	SyncPrepareResponse
} from 'thehandy/lib/types';
import IGetServerTimeResponse from '../types/IGetServerTimeResponse';
import {ICsv} from '../csv/combinedPoses';
import {createAxiosInstance} from './createAxiosInstance';
import {version} from '../../package.json';
import {AxiosInstance} from 'axios';
import {HandyApi} from './HandyApi';

export default class HandyApiV1 implements HandyApi {

	private readonly ax: AxiosInstance;

	public enabled = true; // user set
	public ready = true; // self set

	private serverTimeOffset = 0;

	/**
	 * Where the pre-generated scripts are hosted
	 * You can run generateCsv.ts to create your own scripts
	 */
	private readonly scriptBaseUrl = `https://www.karil.rs/handykk/${version}/`;

	private lastAdjust = Date.now();
	private readonly debounceMs = 9 * 1000;

	public constructor(connKey: string) {
		this.ax = createAxiosInstance(connKey, `https://www.handyfeeling.com/api/v1/${connKey}/`);
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
					} else if (response.data.mode !== HandyMode.sync) {
						console.log('Device not in sync mode, switching to sync...');
						this.setSyncMode(true)
							.catch(err => reject(err));
					}
					return resolve();
				})
				.catch(err => reject(err))
		})
	}

	public setSyncMode(enabled = this.enabled): Promise<ModeResponse> {
		return new Promise<ModeResponse>((resolve, reject) => {
			this.ready = false;
			this.ax.get<ModeResponse>('setMode', {
				params: {
					mode: enabled ? HandyMode.sync : HandyMode.off
				}
			})
				.then(response => {
					if (response.data.success) {
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

	public syncPause(): Promise<SyncPlayResponse> {
		return new Promise((resolve, reject) => {
			if (!this.readyAndEnabled()) {
				return reject('Not ready or enabled');
			}
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

	private readyAndEnabled(): boolean {
		if (!this.ready) {
			return false;
		}
		if (!this.enabled) {
			console.warn('Not enabled');
		}
		return true;
	}

	throttleTime(): boolean {
		const now = Date.now();
		if ((now - this.lastAdjust) > this.debounceMs) {
			this.lastAdjust = now;
			return false;
		} else {
			return true;
		}
	}

}
