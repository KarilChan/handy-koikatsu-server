import LoopPostModel from '../types/postModels/LoopPostModel';
import {HState} from '../HState';
import HandyApiV1 from '../HandyApi/HandyApiV1';
import HandyCsv from '../csv/HandyCsv';
import TSupportedAnims from '../types/TSupportedAnims';

export const handleLoop = (model: LoopPostModel, hInfo: HState, handy: HandyApiV1): void => {
	const nameAnim = hInfo.getNameAnim();
	if (nameAnim === null) {
		return;
	}
	const response = hInfo.handleAnimStateChange(model.animState, nameAnim);
	// TODO fix this logic mess
	if (!response.changed && response.newState !== null) {
		// same animState, throttle
		if (handy.throttleTime()) {
			return;
		}
		handy.syncAdjustTimeStamp(HandyCsv.calcStartTime(
			model.stateInfo,
			hInfo.getNameAnim() as TSupportedAnims,
			response.newState
		))
			.then(res => console.log(res))
			.catch(() => {
				// do nothing
			});
	} else if (!response.changed && response.newState === null) {
		// idle no change
	} else if (response.newState === null) {
		handy.syncPause()
			.then(res => console.log(res))
			.catch(err => console.error(err));
	} else if (response.started) {
		handy.syncPlay()
			.then(res => console.log(res))
			.catch(err => console.error(err));
	} else {
		// state changed
		handy.syncAdjustTimeStamp(HandyCsv.calcStartTime(
			model.stateInfo,
			hInfo.getNameAnim() as TSupportedAnims,
			response.newState
		))
			.then(res => console.log(res))
			.catch(() => {
				// do nothing
			});
	}
}
