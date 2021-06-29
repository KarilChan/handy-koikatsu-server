import TSupportedAnims from '../types/TSupportedAnims';
import TSupportedAnimStates from '../types/TSupportedAnimStates';
import SUPPORTED_STATES from './SUPPORTED_STATES';
import SCRIPTED_ANIMS from './SCRIPTED_ANIMS';
import HandyCsv from '../csv/HandyCsv';
import {isAutoOrScript} from '../controllers/newPoseController';
import AUTO_ANIMS from './AUTO_ANIMS';
import {HandyAuto} from '../csv/HandyAuto';

interface IAnimStateChangeRes {
	newState: HState['animState'],
	changed: boolean,
	started: boolean // start playing from pause
}

export class HState {
	private nameAnimation: TSupportedAnims | null = null;
	private animState: TSupportedAnimStates | null = null;

	public getState(): HState['animState'] {
		return this.animState;
	}

	public getNameAnim(): TSupportedAnims | null {
		return this.nameAnimation;
	}

	public static isSupportedState(state: string): state is TSupportedAnimStates {
		return !!SUPPORTED_STATES.find(s => s === state);
	}

	public handleAnimStateChange(state: string, nameAnim: TSupportedAnims): IAnimStateChangeRes {
		const oldState = this.animState;
		const newState = HState.isSupportedState(state) ? state : null;
		this.animState = newState;
		if (AUTO_ANIMS.find(a => a === nameAnim)) {
			return {
				changed: !HandyAuto.isSameAnimStates(newState, oldState),
				newState,
				started: false // always moving in auto mode
			};
		}
		if (HandyCsv.isSameAnimStates(nameAnim, newState, oldState)) {
			return {
				changed: false,
				newState,
				started: false
			};
		} else {
			return {
				changed: true,
				newState,
				started: oldState === null
			}
		}
	}

	/**
	 * Returns null if animation not supported
	 */
	public changePose(newAnimation: string): TSupportedAnims | null {
		if (isAutoOrScript(newAnimation) !== null) {
			console.log(`${newAnimation} is supported pose`);
			this.nameAnimation = newAnimation as TSupportedAnims;
			return newAnimation as TSupportedAnims;
		} else {
			this.nameAnimation = null;
			return null;
		}
	}

	private static isSupportedAnim(animation: string): animation is TSupportedAnims {
		return !!SCRIPTED_ANIMS.find(s => s === animation);
	}
}