import fetch from './fetch';
import querystring from 'querystring';
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

export default class HandyApiV1 {

	public enabled = true; // user set
	public ready = true; // self set
	public connKey: string;

	public strokeMin = 0;
	public strokeMax = 100;

	private serverTimeOffset = 0;

	/**
	 * Where the pre-generated scripts are hosted
	 * You can run generateCsv.ts to create your own scripts
	 */
	private readonly scriptBaseUrl = 'https://www.karil.rs/handykk/';

	private lastAdjust = Date.now();
	private readonly debounceMs = 5 * 1000;

	public constructor(connKey: string) {
		this.connKey = connKey;
	}

	public checkOnline(): void {
		if (!this.enabled) {
			return;
		}
		fetch(this.getApiPath('getSettings'))
			.then((response: SettingsResponse) => {
				if (!response.connected) {
					console.warn('Device not connected', this.connKey);
				} else if (response.mode !== HandyMode.sync) {
					console.log('Device not in sync mode, switching to sync...', this.connKey);
					void this.setSyncMode(true);
				}
			})
			.catch(err => console.error(err));
	}

	public setSyncMode(enabled = this.enabled): Promise<ModeResponse> {
		return new Promise<ModeResponse>((resolve, reject) => {
			this.ready = false;
			fetch(this.getApiPath('setMode') + querystring.stringify({
				mode: enabled ? HandyMode.sync : HandyMode.off
			}))
				.then((response: ModeResponse) => {
					if (response.success) {
						return resolve(response);
					} else {
						return reject(response.error);
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
		return new Promise<number>(resolve => {
			fetch(this.getApiPath('getServerTime'))
				.then((response: IGetServerTimeResponse) => {
					return resolve(response.serverTime)
				})
				.catch(err => console.log(err));
		});
	}

	// stolen from https://github.com/defucilis/thehandy
	public async syncTime(trips: number): Promise<number> {
		// don't count the first one
		await this.getServerTime();

		let offsets = [];
		for (let i = 0; i < trips; i++) {
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

	private getApiPath(route: string): string {
		return `${this.connKey}/${route}?`;
	}

	public syncPrepare(csv: ICsv): Promise<SyncPrepareResponse> {
		return new Promise<SyncPrepareResponse>((resolve, reject) => {
			this.ready = false;
			fetch(this.getApiPath('syncPrepare') + querystring.stringify({
				url: this.scriptBaseUrl + csv.name,
				name: csv.name,
				size: csv.size,
				timeout: 30000
			}))
				.then((response: SyncPrepareResponse) => {
					if (response.success) {
						return resolve(response);
					} else {
						return reject(response.error);
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
			fetch(this.getApiPath('syncPlay') + querystring.stringify({
				play: true,
				serverTime: Math.round(Date.now() + this.serverTimeOffset),
				time: 0,
			}))
				.then((response: SyncPlayResponse) => {
					if (response.success) {
						return resolve(response);
					} else {
						return reject(response.error);
					}
				})
				.catch(err => reject(err));
		})
	}

	public syncPause(): Promise<SyncPlayResponse> {
		return new Promise<SyncPlayResponse>((resolve, reject) => {
			if (!this.readyAndEnabled()) {
				return reject('Not ready or enabled');
			}
			fetch(this.getApiPath('syncPlay') + querystring.stringify({
				play: false
			}))
				.then((response: SyncPlayResponse) => {
					if (response.success) {
						return resolve(response);
					} else {
						return reject(response.error);
					}
				})
				.catch(err => reject(err));
		})
	}


	public syncAdjustTimeStamp(time: number): Promise<CommandResponse> {
		return new Promise<CommandResponse>((resolve, reject) => {
			if (time < 0) {
				return reject('Invalid time');
			}
			if (!this.readyAndEnabled()) {
				return reject('Not ready or enabled');
			}
			fetch(this.getApiPath('syncPlay') + querystring.stringify({
				play: true,
				timeout: 30000,
				serverTime: Math.round(Date.now() + this.serverTimeOffset),
				time: Math.round(time),
			}))
				.then((response: CommandResponse) => {
					if (response.success) {
						return resolve(response);
					} else {
						return reject(response);
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