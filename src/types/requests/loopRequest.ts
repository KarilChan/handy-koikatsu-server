import IUnityAnimStateInfo from '../unity/IUnityAnimStateInfo';

export default interface LoopRequest {
	animState: string,
	stateInfo: IUnityAnimStateInfo,
	speed: number,
}