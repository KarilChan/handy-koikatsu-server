import axios from 'axios';
import {VersionResponse} from 'thehandy/lib/types';

export const getHandyFw = (handyKey: string): Promise<string> => new Promise((resolve, reject) => {
	axios.get<VersionResponse>(`https://www.handyfeeling.com/api/v1/${handyKey}/getVersion`)
		.then(resp => {
			if (resp.data.success) {
				return resolve(resp.data.version);
			} else {
				return reject(resp.data.error);
			}
		})
		.catch(err => {
			return reject(err);
		})
});