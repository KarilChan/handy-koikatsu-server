import {ICsv} from '../csv/combinedPoses';
import {AxiosInstance, AxiosResponse} from 'axios';
import {V2StatusResponse} from '../types/handyApiV2/V2StatusResponse';
import {V2Mode} from '../types/handyApiV2/V2Mode';
import {V2ModeRequest} from '../types/handyApiV2/V2ModeRequest';
import {V2ModeUpdateResponse, V2ModeUpdateResult} from '../types/handyApiV2/V2ModeUpdateResponse';
import {V2SyncRequest} from '../types/handyApiV2/V2SyncRequest';
import {V2SyncResponse} from '../types/handyApiV2/V2SyncResponse';
import {V2GenericResult} from '../types/handyApiV2/V2GenericResult';
import {V2HSSPSetupResult} from '../types/handyApiV2/V2HSSPSetupResult';
import {V2HSSPSetupResponse} from '../types/handyApiV2/V2HSSPSetupResponse';
import {V2HsspPlayRequest} from '../types/handyApiV2/V2HsspPlayRequest';
import {createAxiosInstance} from './createAxiosInstance';

export default class HandyApiV2 {

	private readonly ax: AxiosInstance;

	public enabled = true; // user set
	public ready = true; // self set

	public strokeMin = 0;
	public strokeMax = 100;

	/**
	 * Where the pre-generated scripts are hosted
	 * You can run generateCsv.ts to create your own scripts
	 */
	private readonly scriptBaseUrl = 'https://www.karil.rs/handykk/';

	private lastAdjust = Date.now();
	private readonly debounceMs = 9 * 1000;

	public constructor(connKey: string) {
		this.ax = createAxiosInstance(connKey);
	}

	public checkOnline(): Promise<void>  {
		return new Promise((resolve, reject) => {
			if (!this.enabled) {
				return reject('not enabled');
			}
			this.ax.get<V2StatusResponse>('status')
				.then(resp => {
					if (resp.data.mode !== V2Mode.HSSP) {
						console.log('Device not in sync mode, switching to sync...');
						void this.setSyncMode(V2Mode.HSSP);
					}
					return resolve();
				})
				.catch(err => {
					return reject(err);
				});
		})
	}

	public setSyncMode(mode: V2Mode): Promise<V2ModeUpdateResponse> {
		return new Promise<V2ModeUpdateResponse>((resolve, reject) => {
			this.ready = false;
			const req: V2ModeRequest = {mode};
			this.ax.put<V2ModeUpdateResponse>('mode', req)
				.then(resp => {
					if (resp.data.result === V2ModeUpdateResult.ERROR) {
						console.warn('Set sync mode failed');
						return reject();
					} else {
						return resolve(resp.data);
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

	public async syncTime(request: V2SyncRequest = {syncCount: 6}): Promise<AxiosResponse<V2SyncResponse>> {
		return this.ax.get('hssp/sync', {
			params: request
		});
	}

	public syncPrepare(csv: ICsv): Promise<V2HSSPSetupResult> {
		return new Promise<V2HSSPSetupResult>((resolve, reject) => {
			if (typeof csv.sha256 === 'undefined') {
				return reject('missing sha256');
			}
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
			this.ax.put<{result: V2GenericResult}>('hssp/play', req)
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

	public syncPause(): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			if (!this.readyAndEnabled()) {
				return reject('Not ready or enabled');
			}
			this.ax.put<{result: V2GenericResult}>('hssp/stop')
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
			this.ax.put<{result: V2GenericResult}>('hssp/play', req)
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