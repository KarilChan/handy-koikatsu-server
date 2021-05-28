import https from 'https';
import http from 'node:http';
import {HttpsAgent} from 'agentkeepalive';

const keepaliveAgent = new HttpsAgent({
	maxSockets: 100,
	maxFreeSockets: 10,
	timeout: 60000, // active socket keepalive for 60 seconds
	freeSocketTimeout: 30000, // free socket keepalive for 30 seconds
});

/**
 * Bootleg fetch for nodejs
 *
 * @param path
 */
const fetch = (path: string): Promise<any> => {
	console.log('fetching', path);
	return new Promise(resolve => {
		const callback = (response: http.IncomingMessage) => {
			let str = '';
			response.on('data', (chunk) => {
				str += chunk;
			});
			response.on('end', () => {
				resolve(JSON.parse(str));
			});
		}
		const request = https.request({
			host: 'www.handyfeeling.com',
			port: 443,
			path: `/api/v1/${path}`,
			method: 'GET',
			agent: keepaliveAgent,
		}, callback);
		request.end();
	});
}

export default fetch;