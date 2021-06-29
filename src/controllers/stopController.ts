import {HandyApi} from '../HandyApi/HandyApi';

export const handleStop = async (handy: HandyApi): Promise<void> => {
	await handy.pause().catch(() => console.warn('Failed to pause device'));
	await handy.syncTime().catch(() => console.warn('Failed to sync time after stopping'));
}
