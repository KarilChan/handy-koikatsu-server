import {HandyApi} from '../HandyApi/HandyApi';

export const handleStop = (handy: HandyApi): void => {
	void handy.syncPause()
		.then(() => {
			handy.syncTime()
				.catch(() => {
					console.warn('Failed to sync time after pausing');
				});
		})
		.catch(() => {
			// theHandy is disconnected or stopped already
		});
}
