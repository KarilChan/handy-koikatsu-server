import {ICsv} from '../csv/scriptedPoses';
import {AxiosInstance, AxiosResponse} from 'axios';
import {V2StatusResponse} from '../types/handyApi/V2StatusResponse';
import {V2ModeRequest} from '../types/handyApi/V2ModeRequest';
import {V2ModeUpdateResponse, V2ModeUpdateResult} from '../types/handyApi/V2ModeUpdateResponse';
import {V2SyncResponse} from '../types/handyApi/V2SyncResponse';
import {V2GenericResult} from '../types/handyApi/V2GenericResult';
import {V2HSSPSetupResult} from '../types/handyApi/V2HSSPSetupResult';
import {V2HSSPSetupResponse} from '../types/handyApi/V2HSSPSetupResponse';
import {V2HsspPlayRequest} from '../types/handyApi/V2HsspPlayRequest';
import {createAxiosInstance} from './createAxiosInstance';

// Can't find a better way to get the current version
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {version} from '../../package.json';
import {HandyApi} from './HandyApi';
import {EHandySyncMode} from '../types/handyApi/EHandySyncMode';
import {V2Mode} from '../types/handyApi/V2Mode';

export default class HandyApiV2 implements HandyApi {

	private mode: EHandySyncMode = EHandySyncMode.scripted;

	private readonly ax: AxiosInstance;

	public enabled = true; // user set
	public ready = true;

	/**
	 * Where the pre-generated scripts are hosted
	 * You can run generateCsv.ts to create your own scripts
	 */
	private readonly scriptBaseUrl = `https://www.karil.rs/handykk/${version}/`;

	private lastAdjust = Date.now();
	private readonly scriptThrottle = 9 * 1000; // 9s between re-syncs
	private readonly autoThrottle = 1000;

	public constructor(connKey: string) {
		this.ax = createAxiosInstance(connKey, 'https://www.handyfeeling.com/api/handy/v2/');
	}

	public checkOnline(): Promise<void> {
		return new Promise((resolve, reject) => {
			if (!this.enabled) {
				return reject('not enabled');
			}
			this.ax.get<V2StatusResponse>('status')
				.then(() => {
					return resolve();
				})
				.catch(err => {
					return reject(err);
				});
		})
	}

	public getMode(): EHandySyncMode {
		return this.mode;
	}

	public setMode(mode: EHandySyncMode): Promise<V2ModeUpdateResponse | void> {
		return new Promise((resolve, reject) => {
			if (mode === this.mode) {
				return resolve();
			}
			this.ready = false;
			const req: V2ModeRequest = {
				mode: mode === EHandySyncMode.scripted ? V2Mode.HSSP : V2Mode.HAMP
			};
			this.ax.put<V2ModeUpdateResponse>('mode', req)
				.then(resp => {
					if (resp.data.result === V2ModeUpdateResult.ERROR) {
						return reject();
					} else {
						this.mode = mode;
						if (mode === EHandySyncMode.auto) {
							// need this to start moving in auto mode
							this.ax.put<{ result: V2GenericResult }>('hamp/start')
								.then(() => {
									return resolve(resp.data);
								})
								.catch(err => {
									reject(err);
								})
						} else {
							return resolve(resp.data);
						}
					}
				})
				.catch(err => {
					reject(err);
				})
				.finally(() => {
					this.ready = true;
				})
		})
	}

	public async syncTime(): Promise<AxiosResponse<V2SyncResponse>> {
		return this.ax.get('hssp/sync', {
			params: {syncCount: 6}
		});
	}

	public syncPrepare(csv: ICsv): Promise<V2HSSPSetupResult> {
		return new Promise<V2HSSPSetupResult>((resolve, reject) => {
			this.ready = false;
			this.ax.put<V2HSSPSetupResponse>('hssp/setup', {
				url: this.scriptBaseUrl + csv.name,
				sha256: csv.sha256
			})
				.then(resp => {
					switch (resp.data.result) {
						case V2HSSPSetupResult.SYNC_REQUIRED:
							return reject('not synced');
						case V2HSSPSetupResult.DOWNLOAD_ERROR:
							return reject('download error');
						case V2HSSPSetupResult.DOWNLOADED:
						case V2HSSPSetupResult.USING_CACHED:
							return resolve(resp.data.result);
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

	public syncPlay(): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			if (!this.readyAndEnabled()) {
				return reject('Not ready or enabled');
			}
			const req: V2HsspPlayRequest = {
				tserver: new Date().valueOf(),
				tstream: 0
			}
			this.ax.put<{ result: V2GenericResult }>('hssp/play', req)
				.then(resp => {
					if (resp.data.result === V2GenericResult.SUCCESS) {
						return resolve();
					} else {
						return reject(resp.data);
					}
				})
				.catch(err => {
					return reject(err);
				})
		})
	}

	public pause(): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			if (!this.readyAndEnabled()) {
				return reject('Not ready or enabled');
			}
			this.ax.put<{ result: V2GenericResult }>(
				this.mode === EHandySyncMode.scripted ? 'hssp/stop' : 'hamp/stop'
			)
				.then(resp => {
					if (resp.data.result === V2GenericResult.SUCCESS) {
						return resolve();
					} else {
						return reject(resp.data);
					}
				})
				.catch(err => {
					return reject(err);
				})
		})
	}


	public syncAdjustTimeStamp(time: number): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			if (time < 0) {
				return reject('Invalid time');
			}
			if (!this.readyAndEnabled()) {
				return reject('Not ready or enabled');
			}
			const req: V2HsspPlayRequest = {
				tserver: new Date().valueOf(),
				tstream: Math.round(time)
			};
			this.ax.put<{ result: V2GenericResult }>('hssp/play', req)
				.then(resp => {
					if (resp.data.result === V2GenericResult.SUCCESS) {
						return resolve();
					} else {
						return reject(resp.data);
					}
				})
				.catch(err => {
					return reject(err);
				})
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

	public setSpeed(speed: number): Promise<void> {
		return new Promise((resolve, reject) => {
			if (speed > 100 || speed < 0) {
				return reject(`Invalid speed: ${speed}`);
			}
			this.ax.put<{ result: V2GenericResult }>('hamp/velocity', {
				velocity: Math.round(speed),
			})
				.then(resp => {
					if (resp.data.result === V2GenericResult.SUCCESS) {
						return resolve();
					} else {
						return reject(resp.data);
					}
				})
				.catch(err => reject(err));
		})
	}

}