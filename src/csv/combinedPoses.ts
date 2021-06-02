import TSupportedAnimStates from '../types/TSupportedAnimStates';
import TSupportedAnims from '../types/TSupportedAnims';
import paizuri from '../poses/paizuri';
import tipShaftLicking from '../poses/tipShaftLicking';
import ELoopType from '../types/ELoopType';
import twoHandBlowjob from '../poses/twoHandBlowjob';
import oneHandHandjob from '../poses/oneHandHandjob';
import twoHandHandjob from '../poses/twoHandHandjob';
import glansRubbing from '../poses/glansRubbing';
import onaholeHandjob from '../poses/onaholeHandjob';
import crowdedHandjob from '../poses/crowdedHandjob';
import noHandTipLicking from '../poses/noHandTipLicking';
import handjobBallLicking from '../poses/handjobBallLicking';
import oneHandBlowjob from '../poses/oneHandBlowjob';
import sittingBlowjob from '../poses/sittingBlowjob';
import benchBlowjob from '../poses/benchBlowjob';
import noHandBlowjob from '../poses/noHandBlowjob';
import handjobBallrub from '../poses/handjobBallrub';
import paizuriHigh from '../poses/paizuriHigh';
import assistedPaizuri from '../poses/assistedPaizuri';
import assistedPaizuriHigh from '../poses/assistedPaizuriHigh';
import pressedPaizuri from '../poses/pressedPaizuri';
import paizuriSucking from '../poses/paizuriSucking';

interface IStroke {
	position: number,
	time: number // 0<=t<1, must be greater than the previous stroke time
}

export interface ICsv {
	name: string,
	size: number,
	sha256?: string
}

export interface IState {
	names: TSupportedAnimStates[],
	strokes: IStroke[],
	multiplier?: number, // extra speed multiplier for special states, default is 1
	type: ELoopType
}

export interface IInfoPose {
	names: TSupportedAnims[],
	states: IState[],
	csv: ICsv
}

const combinedPoses: IInfoPose[] = [
	glansRubbing,
	oneHandHandjob,
	twoHandHandjob,
	oneHandBlowjob,
	twoHandBlowjob,
	tipShaftLicking,
	onaholeHandjob,
	crowdedHandjob,
	noHandTipLicking,
	handjobBallLicking,
	handjobBallrub,
	sittingBlowjob,
	benchBlowjob,
	noHandBlowjob,
	paizuri,
	paizuriHigh,
	assistedPaizuri,
	assistedPaizuriHigh,
	pressedPaizuri,
	paizuriSucking
];

export default combinedPoses;