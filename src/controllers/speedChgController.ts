import HandyApiV1 from '../HandyApi/HandyApiV1';
import LoopPostModel from '../types/postModels/LoopPostModel';
import {HState} from '../HState';
import HandyCsv from '../csv/HandyCsv';
import TSupportedAnims from '../types/TSupportedAnims';
import TSupportedAnimStates from '../types/TSupportedAnimStates';

export const handleSpeedChg = (model: LoopPostModel, hInfo: HState, handy: HandyApiV1): void => {
	handy.syncAdjustTimeStamp(HandyCsv.calcStartTime(
		model.stateInfo,
		hInfo.getNameAnim() as TSupportedAnims,
		hInfo.getState() as TSupportedAnimStates
	))
		.then(res => console.log(res))
		.catch(() => {
			// do nothing
		});
}
