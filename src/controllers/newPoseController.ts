import NewPoseRequest from '../types/requests/newPoseRequest';
import {HState} from '../koikatsu/HState';
import {HandyApi} from '../HandyApi/HandyApi';
import SCRIPTED_ANIMS from '../koikatsu/SCRIPTED_ANIMS';
import AUTO_ANIMS from '../koikatsu/AUTO_ANIMS';
import {EHandySyncMode} from '../types/handyApi/EHandySyncMode';
import scriptedPoses from '../csv/scriptedPoses';

export const isAutoOrScript = (nameAnim: string | null): EHandySyncMode | null => {
	if (SCRIPTED_ANIMS.find(a => a === nameAnim)) {
		return EHandySyncMode.scripted;
	} else if (AUTO_ANIMS.find(a => a === nameAnim)) {
		return EHandySyncMode.auto;
	} else {
		return null;
	}
}

export const handleNewPose = (model: NewPoseRequest, hInfo: HState, handy: HandyApi): void => {
	console.log(`handleNewPose(): nameAnimation = ${model.nameAnimation}`);
	const newPose = hInfo.changePose(model.nameAnimation);
	if (!newPose) {
		return;
	}
	const syncMode = isAutoOrScript(newPose)!;
	handy.setMode(syncMode)
		.then(() => {
			if (syncMode === EHandySyncMode.scripted) {
				const pose = scriptedPoses.find(p => p.aliases.includes(newPose))!;
				handy.syncPrepare(pose.csv)
					.then(() => {
						console.log('Script is ready');
					})
					.catch(err => console.log(err));
			}
		})
		.catch(() => {
			console.error('Failed to set Handy sync mode');
		})
}