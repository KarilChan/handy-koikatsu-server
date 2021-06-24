import {ICsv} from '../csv/combinedPoses';

export interface HandyApi {
	checkOnline(): Promise<void>,
	syncTime(): Promise<unknown>,
	syncPrepare(csv: ICsv): Promise<unknown>,
	syncPlay(): Promise<unknown>,
	syncPause(): Promise<unknown>,
	syncAdjustTimeStamp(time: number): Promise<unknown>,
	throttleTime(): boolean,
}