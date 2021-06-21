'use strict';
import dotenv from 'dotenv';
import Server from './Server';
import {checkForUpdates} from './checkForUpdates';

try {
	if (
		dotenv.config().error
		|| !process.env.HANDY_KEY
		|| !process.env.SERVER_PORT
	) {
		throw new Error('Failed to read .env config file');
	}

	checkForUpdates();
	const server = new Server(process.env.HANDY_KEY);
	server.start(Number(process.env.SERVER_PORT));
} catch (e) {
	console.error(e);
	console.log('Press any key to exit');
	process.stdin.setRawMode(true);
	process.stdin.on('data', () => process.exit(1));
}