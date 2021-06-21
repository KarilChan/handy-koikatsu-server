import axios from 'axios';
import {version} from '../package.json';

interface GHLatestResp {
	tag_name: string
}

export const checkForUpdates = (): void => {
	axios.get<GHLatestResp>('https://api.github.com/repos/KarilChan/handy-koikatsu-server/releases/latest')
		.then(resp => {
			if (resp.data.tag_name !== version) {
				console.log(`Newer version ${resp.data.tag_name} is available! https://github.com/KarilChan/handy-koikatsu-server`);
			}
		})
		.catch(() => {
			console.warn('Failed to check for update');
		})
}