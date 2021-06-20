import HandyApiV2 from '../HandyApi/HandyApiV2';

export const handleStop = (handy: HandyApiV2): void => {
	void handy.syncPause()
		.then(() => {
			void handy.syncTime();
		})
		.catch(() => {
			// theHandy is disconnected or stopped already
		});
}
