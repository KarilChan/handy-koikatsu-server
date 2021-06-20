import TSupportedAnims from './types/TSupportedAnims';
import TSupportedAnimStates from './types/TSupportedAnimStates';
import combinedPoses, {IInfoPose} from './csv/combinedPoses';
import SUPPORTED_STATES from './SUPPORTED_STATES';
import SUPPORTED_ANIMS from './SUPPORTED_ANIMS';
import HandyCsv from './csv/HandyCsv';

interface IAnimStateChangeResponse {
	newState: HState['animState'],
	changed: boolean,
	started: boolean // start playing from pause
}

export class HState {
	private nameAnimation: TSupportedAnims | null = null;
	private animState: TSupportedAnimStates | null = null;
	private playing = false;

	public getState(): HState['animState'] {
		return this.animState;
	}

	public getNameAnim(): TSupportedAnims | null {
		return this.nameAnimation;
	}

	/**
	 * Idle is counted as unsupported state as there is no motion
	 *
	 * @param state
	 */
	public static isSupportedState(state: string): state is TSupportedAnimStates {
		return !!SUPPORTED_STATES.find(s => s === state);
	}

	public handleAnimStateChange(state: string, nameAnim: TSupportedAnims): IAnimStateChangeResponse {
		const oldState = this.animState;
		const newState = HState.isSupportedState(state) ? state : null;
		this.animState = newState;
		if (HandyCsv.isSameAnimStates(nameAnim, newState, oldState)) {
			// if (newState === oldState) {
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
	 * Returns false if animation not supported
	 *
	 * @param newAnimation
	 */
	public changePose(newAnimation: string): IInfoPose | null {
		if (HState.isSupportedAnim(newAnimation)) {
			console.log(`${newAnimation} isSupportedAnime`);
			this.nameAnimation = newAnimation;
			return combinedPoses.find(pose => pose.aliases.includes(newAnimation)) as IInfoPose;
		} else {
			this.nameAnimation = null;
			return null;
		}
	}

	private static isSupportedAnim(animation: string): animation is TSupportedAnims {
		return !!SUPPORTED_ANIMS.find(s => s === animation);
	}
}