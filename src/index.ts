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
const argv = yargs(process.argv.slice(2)).options({
	port: {type: 'number', default: 42070},
	key: {type: 'string', demandOption: true, description: 'Handy connection key'},
}).argv;

const server = new Server(argv.key);
server.start(argv.port);

