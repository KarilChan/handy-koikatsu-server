import axios, {AxiosInstance} from 'axios';
import https from 'https';

export const createAxiosInstance = (connKey: string, baseURL: string): AxiosInstance => {
	const ax = axios.create({
		baseURL,
		timeout: 30000,
		headers: {'X-Connection-Key': connKey},
		httpsAgent: new https.Agent({keepAlive: true})
	});
	ax.interceptors.request.use(config => {
		console.log(`${config.url ?? ''} ${JSON.stringify(config.params) ?? ''} ${JSON.stringify(config.data) ?? ''}`);
		return config;
	})
	/*
		ax.interceptors.response.use(res => {
			console.log(res.data);
			return res;
		})
	*/
	return ax;
}