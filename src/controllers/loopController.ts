import LoopRequest from '../types/requests/loopRequest';
import {HState} from '../HState';
import HandyCsv from '../csv/HandyCsv';
import TSupportedAnims from '../types/TSupportedAnims';
import {HandyApi} from '../HandyApi/HandyApi';

export const handleLoop = (req: LoopRequest, hInfo: HState, handy: HandyApi): void => {
	const nameAnim = hInfo.getNameAnim();
	if (nameAnim === null) {
		return;
	}
	const response = hInfo.handleAnimStateChange(req.animState, nameAnim);
	// TODO fix this logic mess
	if (!response.changed && response.newState !== null) {
		// same animState, throttle
		if (handy.throttleTime()) {
			return;
		}
		handy.syncAdjustTimeStamp(HandyCsv.calcStartTime(
			req.stateInfo,
			hInfo.getNameAnim() as TSupportedAnims,
			response.newState
		))
			.catch(() => {
				// do nothing
			});
	} else if (!response.changed && response.newState === null) {
		// idle no change
	} else if (response.newState === null) {
		handy.syncPause()
			.catch(err => console.error(err));
	} else if (response.started) {
		handy.syncPlay()
			.catch(err => console.error(err));
	} else {
		// state changed
		handy.syncAdjustTimeStamp(HandyCsv.calcStartTime(
			req.stateInfo,
			hInfo.getNameAnim() as TSupportedAnims,
			response.newState
		))
			.catch(() => {
				// do nothing
			});
	}
}
