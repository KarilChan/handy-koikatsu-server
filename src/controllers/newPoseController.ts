import NewPoseRequest from '../types/requests/newPoseRequest';
import {HState} from '../HState';
import {HandyApi} from '../HandyApi/HandyApi';

export const handleNewPose = (model: NewPoseRequest, hInfo: HState, handy: HandyApi): void => {
	console.log(`handleNewPose(): nameAnimation = ${model.nameAnimation}`);
	const newPose = hInfo.changePose(model.nameAnimation);
	if (newPose) {
		handy.syncPrepare(newPose.csv)
			.then(() => {
				console.log('Script is ready');
			})
			.catch(err => console.log(err));
	}
}