import express, {Request} from 'express';
import bodyParser from 'body-parser';
import NewPosePostModel from './types/postModels/NewPosePostModel';
import LoopPostModel from './types/postModels/LoopPostModel';
import {HState} from './HState';
import {handleNewPose} from './controllers/newPoseController';
import {handleLoop} from './controllers/loopController';
import {handleStop} from './controllers/stopController';
import {handleSpeedChg} from './controllers/speedChgController';
import HandyApiV2 from './HandyApi/HandyApiV2';

export default class Server {

	private _currentState = '';

	private readonly app = express();

	private readonly hInfo: HState = new HState();

	private readonly handy: HandyApiV2;

	public constructor(connKey: string) {
		this.handy = new HandyApiV2(connKey);
	}

	public start(port: number): void {
		this.app.use(bodyParser.json()).listen(port, () => {
			console.log(`Listening at http://localhost:${port}`)
		})
		this.timedCheckOnline()
			.then(() => {
				this.handy.syncTime()
					.catch(err => {
						console.error(err);
						throw new Error('Cannot initialize, failed to sync time');
					});
				this.registerRoutes();
			})
			.catch(() => {
				throw new Error('Cannot initialize, failed to check for online status');
			});
	}

	private async timedCheckOnline(): Promise<void> {
		setInterval(() => {
			this.handy.checkOnline()
				.catch(() => {
					console.warn('Device not online');
				});
		}, 45 * 1000);
		return this.handy.checkOnline();
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