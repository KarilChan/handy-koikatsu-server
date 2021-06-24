import express, {Request} from 'express';
import bodyParser from 'body-parser';
import NewPoseRequest from './types/requests/newPoseRequest';
import LoopRequest from './types/requests/loopRequest';
import {HState} from './HState';
import {handleNewPose} from './controllers/newPoseController';
import {handleLoop} from './controllers/loopController';
import {handleStop} from './controllers/stopController';
import {handleSpeedChg} from './controllers/speedChgController';
import HandyApiV2 from './HandyApi/HandyApiV2';
import winston from 'winston';
import {HandyApi} from './HandyApi/HandyApi';
import HandyApiV1 from './HandyApi/HandyApiV1';
import {EHandyApiVer} from './types/EHandyApiVer';

export default class Server {

	private logger = winston.createLogger({
		level: 'info',
		format: winston.format.combine(winston.format.timestamp(), winston.format.simple()),
		transports: [
			new winston.transports.File({filename: 'error.log', level: 'error'}),
			new winston.transports.File({filename: 'combined.log'}),
		],
	});

	private _currentState = '';

	private readonly app = express();

	private readonly hInfo: HState = new HState();

	private readonly handy: HandyApi;

	public constructor(connKey: string, apiVer: EHandyApiVer) {
		if (apiVer === EHandyApiVer.V1) {
			this.handy = new HandyApiV1(connKey);
		} else {
			this.handy = new HandyApiV2(connKey);
		}
	}

	public start(port: number): void {
		this.app.use(bodyParser.json()).listen(port, () => {
			console.log(`Listening on port ${port}`)
		})
		this.timedCheckOnline()
			.then(() => {
				this.handy.syncTime()
					.catch(() => {
						console.warn('Cannot initialize, failed to sync time');
					});
			})
			.catch((err) => {
				console.warn('Handy device is offline', err);
			})
			.finally(() => {
				this.registerRoutes();
			});
	}

	/**
	 * Check online status periodically to keep HTTPS agent alive
	 */
	private async timedCheckOnline(): Promise<void> {
		setInterval(() => {
			this.handy.checkOnline()
				.catch(() => {
					console.warn('Device is offline');
				});
		}, 45 * 1000);
		return this.handy.checkOnline();
	}

	private registerRoutes(): void {

		this.app.all('/', (req, res) => {
			res.send({
				hello: 'hi'
			});
		})

		this.app.post('/newPose', (req: Request<unknown, unknown, NewPoseRequest>, res) => {
			this.logger.error(req.body.nameAnimation);
			handleNewPose(req.body, this.hInfo, this.handy);
			res.send();
		})

		this.app.post('/loop', (req: Request<unknown, unknown, LoopRequest>, res) => {
			// console.log(req.body.speed);
			handleLoop(req.body, this.hInfo, this.handy);
			if (this._currentState !== req.body.animState) {
				this._currentState = req.body.animState;
				console.log(`New ${req.body.animState}`);
			}
			res.send();
		})

		this.app.post('/speedChg', (req: Request<unknown, unknown, LoopRequest>, res) => {
			console.log('speed change');
			handleSpeedChg(req.body, this.hInfo, this.handy);
			res.send();
		})

		this.app.get('/stop', (req, res) => {
			handleStop(this.handy);
			res.send();
		})

	}
}