import {ICsv} from '../csv/scriptedPoses';
import {EHandySyncMode} from '../types/handyApi/EHandySyncMode';

export interface HandyApi {
	getMode(): EHandySyncMode,

	setMode(newMode: EHandySyncMode): Promise<unknown>,

	checkOnline(): Promise<void>,

	syncTime(): Promise<unknown>,

	syncPrepare(csv: ICsv): Promise<unknown>,

	syncPlay(): Promise<unknown>,

	pause(): Promise<unknown>,

	syncAdjustTimeStamp(time: number): Promise<unknown>,

	throttleRequests(): boolean,

	setSpeed(speed: number): Promise<unknown>,
}