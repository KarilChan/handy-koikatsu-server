import LoopPostModel from '../types/postModels/LoopPostModel';
import {HState} from '../HState';
import HandyCsv from '../csv/HandyCsv';
import TSupportedAnims from '../types/TSupportedAnims';
import TSupportedAnimStates from '../types/TSupportedAnimStates';
import HandyApiV2 from '../HandyApi/HandyApiV2';

export const handleSpeedChg = (model: LoopPostModel, hInfo: HState, handy: HandyApiV2): void => {
	handy.syncAdjustTimeStamp(HandyCsv.calcStartTime(
		model.stateInfo,
		hInfo.getNameAnim() as TSupportedAnims,
		hInfo.getState() as TSupportedAnimStates
	))
		.catch(() => {
			// do nothing
		});
}
