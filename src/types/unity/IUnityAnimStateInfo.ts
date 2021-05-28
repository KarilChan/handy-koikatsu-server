/**
 * @see https://docs.unity3d.com/ScriptReference/AnimationState.html
 */
export default interface IUnityAnimStateInfo {
	normalizedTime: number,
	length: number,
	speedMultiplier: number,
	loop: boolean
}