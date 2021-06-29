import LoopRequest from '../types/requests/loopRequest';
import {HState} from '../koikatsu/HState';
import HandyCsv from '../csv/HandyCsv';
import TSupportedAnims from '../types/TSupportedAnims';
import TSupportedAnimStates from '../types/TSupportedAnimStates';
import {HandyApi} from '../HandyApi/HandyApi';

export const handleSpeedChg = (model: LoopRequest, hInfo: HState, handy: HandyApi): void => {
	handy.syncAdjustTimeStamp(HandyCsv.calcStartTime(
		model.stateInfo,
		hInfo.getNameAnim() as TSupportedAnims,
		hInfo.getState() as TSupportedAnimStates
	))
		.catch(() => {
			// do nothing
		});
}
