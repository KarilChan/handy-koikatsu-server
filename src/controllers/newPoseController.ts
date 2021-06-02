import NewPosePostModel from '../types/postModels/NewPosePostModel';
import {HState} from '../HState';
import HandyApiV2 from '../HandyApi/HandyApiV2';

export const handleNewPose = (model: NewPosePostModel, hInfo: HState, handy: HandyApiV2): void => {
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