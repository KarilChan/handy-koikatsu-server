import IUnityAnimStateInfo from '../types/unity/IUnityAnimStateInfo';
import TSupportedAnims from '../types/TSupportedAnims';
import TSupportedAnimStates from '../types/TSupportedAnimStates';
import combinedPoses, {IInfoPose, IState} from './combinedPoses';
import ELoopType from '../types/ELoopType';

/**
 * Number of intervals between min and max speed for a given animState, more means higher accuracy
 *
 * @example 16 => stroke sequences for 1.0x, 1.1x, 1.2x ... 2.5x
 */
export const CSV_RESOLUTION = 31;

/**
 * Time per speed interval, longer means less frequent readjustments
 */
export const CSV_TIME_PER_LOOP = 13 * 1000;

/**
 * Time allocated for each manual scripted animState
 */
export const CSV_TIME_PER_SINGLE = 5 * 1000;

export const KK_SPEED_MIN = 1;
export const KK_SPEED_MAX = 2.5;

/**
 * KK H animation cycle length at 1x speed
 */
export const KK_LOOP_BASE_LENGTH = 4 / 3 * 1000;

export default class HandyCsv {

	/**
	 * Returns -1 if anim/state not supported
	 *
	 * @param unityAnimState
	 * @param nameAnim
	 * @param animState
	 */
	public static calcStartTime(
		unityAnimState: IUnityAnimStateInfo,
		nameAnim: TSupportedAnims,
		animState: TSupportedAnimStates
	): number {
		const anim = combinedPoses.find(pose => pose.aliases.includes(nameAnim));
		if (typeof anim === 'undefined') {
			return -1;
		}
		const animStateIndex = anim.states
			.findIndex(state => state.names.includes(animState));
		if (animStateIndex === -1) {
			return -1;
		}
		const closestInterval = this.calcClosestInterval(unityAnimState.speedMultiplier);
		const startTime = this.getStateStartTimeByPose(anim, animState) + closestInterval * CSV_TIME_PER_LOOP;
		const strokeOffset = KK_LOOP_BASE_LENGTH * (unityAnimState.normalizedTime % 1)
		return startTime + strokeOffset;
	}

	private static calcClosestInterval(speedMulti: number): number {
		const interval = (KK_SPEED_MAX - KK_SPEED_MIN) / (CSV_RESOLUTION - 1);
		const closestMulti = Math.round((speedMulti - KK_SPEED_MIN) / interval) * interval + KK_SPEED_MIN;
		return Number((closestMulti - KK_SPEED_MIN) / interval);
	}

	public static getStateStartTimeByPose(pose: IInfoPose, state: TSupportedAnimStates): number {
		let startTime = 0;
		for (const loopState of pose.states) {
			if (loopState.names.includes(state)) {
				break;
			}
			startTime += this.getStateLength(loopState);
		}
		return startTime;
	}

	public static getStateStartTimeByIndex(pose: IInfoPose, stateIndex: number): number {
		let startTime = 0;
		for (let i = 0; i < stateIndex; i++) {
			startTime += this.getStateLength(pose.states[i]);
		}
		return startTime;
	}

	private static getPoseByName(nameAnim: TSupportedAnims): IInfoPose {
		const pose = combinedPoses.find(infoPose => infoPose.aliases.includes(nameAnim));
		if (typeof pose === 'undefined') {
			throw new Error('This should never happen');
		}
		return pose;
	}

	public static getStateLength(state: IState): number {
		switch (state.type) {
			case ELoopType.variable:
				return CSV_TIME_PER_LOOP * CSV_RESOLUTION;
			case ELoopType.static:
				return CSV_TIME_PER_LOOP;
			case ELoopType.single:
				return CSV_TIME_PER_SINGLE;
		}
	}

	public static isSameAnimStates(
		nameAnim: TSupportedAnims,
		a: TSupportedAnimStates | null,
		b: TSupportedAnimStates | null
	): boolean {
		// fast checks
		if (a === b) {
			return true;
		} else if (a === null || b === null) {
			return false;
		}
		// check if different state names but same state
		const pose = combinedPoses.find(p => p.aliases.includes(nameAnim));
		if (typeof pose === 'undefined') {
			throw new Error(`This should never happen ${nameAnim}`);
		}
		const state = pose.states.find(s => s.names.includes(a));
		if (typeof state === 'undefined') {
			throw new Error(`This should never happen ${a}`);
		}
		return state.names.includes(b);
	}
}