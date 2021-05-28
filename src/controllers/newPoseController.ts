import NewPosePostModel from '../types/postModels/NewPosePostModel';
import HandyApiV1 from '../HandyApi/HandyApiV1';
import {HState} from '../HState';

export const handleNewPose = (model: NewPosePostModel, hInfo: HState, handy: HandyApiV1): void => {
	console.log(`handleNewPose(): nameAnimation = ${model.nameAnimation}`);
	const newPose = hInfo.changePose(model.nameAnimation);
	if (newPose) {
		console.log('... which is a newPose');
		handy.syncPrepare(newPose.csv)
			.then(response => {
				console.log(response);
			})
			.catch(err => console.log(err));
	}
}