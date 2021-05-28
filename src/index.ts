'use strict';
import Server from './Server';
import yargs from 'yargs';
import axios from 'axios';
import * as https from 'https';
/*
import winston from 'winston';

const logger = winston.createLogger({
	level: 'info',
	format: winston.format.combine(winston.format.timestamp() ,winston.format.simple()),
	transports: [
		new winston.transports.File({ filename: 'error.log', level: 'error' }),
		new winston.transports.File({ filename: 'combined.log' }),
	],
});

logger.error('hi');
*/

const ax = axios.create({
	baseURL: 'https://www.handyfeeling.com/api/handy/v2/',
	timeout: 10 * 1000,
	headers: {'X-Connection-Key': 'GgFu8'},
	httpsAgent: new https.Agent({keepAlive: true})
});

ax.get('hssp/sync', {
	params: {
		syncCount: 6
	}
})
	.then(resTimeSync => {
		console.log(resTimeSync.data);
		ax.put('hssp/setup', {
			url: 'https://www.karil.rs/handykk/ohh.csv',
			sha256: 'bb6d31a8a219d5326b4f247b959c001474ce2adfbf2d3bc80213d2dccfa6d14d'
		})
			.then(resSetup => {
				console.log(resSetup.data);
				ax.put('hssp/play', {
					tserver: new Date().valueOf(),
					tstream: 0
				})
					.then(respPlay => {
						console.log(respPlay.data);
					})
					.catch(err => {
						console.error(err)
					});
			})
			.catch(err => {
				console.error(err);
			})
	})
	.catch(err => {
		console.error(err);
	})


/*
const argv = yargs(process.argv.slice(2)).options({
	port: {type: 'number', default: 42070},
	key: {type: 'string', demandOption: true, description: 'Handy connection key'},
}).argv;

const server = new Server(argv.key);
server.start(argv.port);
*/

