import HandyApiV1 from '../HandyApi/HandyApiV1';

export const handleStop = (handy: HandyApiV1): void => {
	void handy.syncPause()
		.catch(() => {
			// theHandy is disconnected or stopped already
		});
}
