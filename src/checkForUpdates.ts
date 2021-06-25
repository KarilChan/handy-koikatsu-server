import axios from 'axios';
import {version} from '../package.json';

export const checkForUpdates = (): Promise<void> => new Promise(resolve => {
	axios.get<{ tag_name: string }>('https://api.github.com/repos/KarilChan/handy-koikatsu-server/releases/latest')
		.then(resp => {
			if (resp.data.tag_name !== version) {
				console.log(`Newer version ${resp.data.tag_name} is available! https://github.com/KarilChan/handy-koikatsu-server`);
			}
		})
		.catch(() => {
			console.warn('Failed to check for update');
		})
		.finally(() => {
			return resolve();
		})
})