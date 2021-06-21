import axios from 'axios';

interface GHLatestResp {
	tag_name: string
}

export const checkForUpdates = (): void => {
	axios.get<GHLatestResp>('https://api.github.com/repos/KarilChan/handy-koikatsu-server/releases/latest')
		.then(resp => {
			if (resp.data.tag_name !== process.env.npm_package_version) {
				console.log(`New version ${resp.data.tag_name} is available!`)
			}
		})
		.catch(() => {
			console.warn('Failed to check for update');
		})
}