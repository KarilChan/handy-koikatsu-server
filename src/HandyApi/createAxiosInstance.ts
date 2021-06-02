import axios, {AxiosInstance} from 'axios';
import https from 'https';

export const createAxiosInstance = (connKey: string): AxiosInstance => {
	const ax = axios.create({
		baseURL: 'https://www.handyfeeling.com/api/handy/v2/',
		timeout: 10 * 1000,
		headers: {'X-Connection-Key': connKey},
		httpsAgent: new https.Agent({keepAlive: true})
	});
	ax.interceptors.request.use(config => {
		console.log(`${config.url ?? ''} ${JSON.stringify(config.params) ?? ''} ${JSON.stringify(config.data) ?? ''}`);
		return config;
	})
	return ax;
}