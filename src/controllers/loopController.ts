import LoopRequest from '../types/requests/loopRequest';
import {HState} from '../koikatsu/HState';
import HandyCsv from '../csv/HandyCsv';
import {HandyApi} from '../HandyApi/HandyApi';
import {EHandySyncMode} from '../types/handyApi/EHandySyncMode';
import {HandyAuto} from '../csv/HandyAuto';
import TSupportedAnimStates from '../types/TSupportedAnimStates';

export const handleLoop = (req: LoopRequest, hInfo: HState, handy: HandyApi): void => {
	const nameAnim = hInfo.getNameAnim();
	if (nameAnim === null) {
		return;
	}
	const response = hInfo.handleAnimStateChange(req.animState, nameAnim);
	if (handy.getMode() === EHandySyncMode.scripted) {
		// TODO fix this logic mess
		if (!response.changed && response.newState !== null) {
			// same animState, throttle
			if (handy.throttleRequests()) {
				return;
			}
			handy.syncAdjustTimeStamp(HandyCsv.calcStartTime(
				req.stateInfo,
				hInfo.getNameAnim()!,
				response.newState
			))
				.catch(() => {
					// do nothing
				});
		} else if (!response.changed && response.newState === null) {
			// idle no change
		} else if (response.newState === null) {
			handy.pause()
				.catch(err => console.error(err));
		} else if (response.started) {
			handy.syncPlay()
				.catch(err => console.error(err));
		} else {
			// state changed, adjust without throttling
			handy.syncAdjustTimeStamp(HandyCsv.calcStartTime(
				req.stateInfo,
				hInfo.getNameAnim()!,
				response.newState
			))
				.catch(() => {
					// do nothing
				});
		}
	} else {
		if (!response.changed && handy.throttleRequests()) {
			return;
		}
		handy.setSpeed(HandyAuto.calcAutoSpeed(req.animState as TSupportedAnimStates, req.speed))
			.catch((err) => {
				// don't care
				console.error(err)
			})
	}
}
