import express, {Request} from 'express';
import bodyParser from 'body-parser';
import NewPosePostModel from './types/postModels/NewPosePostModel';
import LoopPostModel from './types/postModels/LoopPostModel';
import HandyApiV1 from './HandyApi/HandyApiV1';
import {HState} from './HState';
import {handleNewPose} from './controllers/newPoseController';
import {handleLoop} from './controllers/loopController';
import {handleStop} from './controllers/stopController';
import {handleSpeedChg} from './controllers/speedChgController';

export default class Server {

	private _currentState = '';

	private readonly app = express();

	private readonly hInfo: HState = new HState();

	private readonly handy: HandyApiV1;

	public constructor(connKey: string) {
		this.handy = new HandyApiV1(connKey);
	}

	public start(port: number): void {
		this.app.use(bodyParser.json()).listen(port, () => {
			console.log(`Listening at http://localhost:${port}`)
		})
		this.timedCheckOnline();
		this.timedTimeSync();
		this.registerRoutes();
	}

	private timedTimeSync(): NodeJS.Timeout {
		void this.handy.syncTime(20);
		return setInterval(() => {
			void this.handy.syncTime(20);
		}, 60 * 1000);
	}

	private timedCheckOnline(): NodeJS.Timeout {
		this.handy.checkOnline();
		return setInterval(() => {
			this.handy.checkOnline();
		}, 45 * 1000);
	}

	private registerRoutes(): void {
		this.app.use((req, res, next) => {
			// console.log(req.body);
			next();
		})

		this.app.all('/', (req, res) => {
			res.send({
				hello: 'hi'
			});
		})

		this.app.post('/newPose', (req: Request<unknown, unknown, NewPosePostModel>, res) => {
			handleNewPose(req.body, this.hInfo, this.handy);
			res.send();
		})

		this.app.post('/loop', (req: Request<unknown, unknown, LoopPostModel>, res) => {
			handleLoop(req.body, this.hInfo, this.handy);
			if (this._currentState !== req.body.animState) {
				this._currentState = req.body.animState;
				console.log(`New ${req.body.animState}`);
			}
			res.send();
		})

		this.app.post('/speedChg', (req: Request<unknown, unknown, LoopPostModel>, res) => {
			// handleLoop(req.body, this.hInfo, this.handy, false);
			handleSpeedChg(req.body, this.hInfo, this.handy);
			res.send();
		})

		this.app.get('/stop', (req, res) => {
			handleStop(this.handy);
			res.send();
		})

	}
}