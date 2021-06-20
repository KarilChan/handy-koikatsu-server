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
import missionary from '../poses/missionary';
import cowgirl from '../poses/cowgirl';
import facingSeated from '../poses/facingSeated';
import doggy from '../poses/doggy';
import doggyChair from '../poses/doggyChair';
import doggySeat from '../poses/doggySeat';
import doggyDesk from '../poses/doggyDesk';
import doggyWall from '../poses/doggyWall';
import doggyWallLifted from '../poses/doggyWallLifted';
import doggyLying from '../poses/doggyLying';
import doggyFence from '../poses/doggyFence';
import doggyPool from '../poses/doggyPool';
import doggyArmDesk from '../poses/doggyArmDesk';
import piledriver from '../poses/piledriver';
import doggyHorse from '../poses/doggyHorse';
import standing from '../poses/standing';
import ekiben from '../poses/ekiben';
import ekibenFence from '../poses/ekibenFence';
import facingWall from '../poses/facingWall';
import layingDesk from '../poses/layingDesk';
import matingPress from '../poses/matingPress';
import pressedBehind from '../poses/pressedBehind';

interface IStroke {
	position: number,
	time: number // 0<=t<1, must be greater than the previous stroke time
}

export interface ICsv {
	name: string,
	size?: number,
	sha256: string
}

export interface IState {
	names: TSupportedAnimStates[],
	strokes: IStroke[],
	multiplier?: number, // extra speed multiplier for special states, default is 1
	type: ELoopType
}

export interface IInfoPose {
	aliases: TSupportedAnims[],
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
	paizuriSucking,

	missionary,
	piledriver,
	cowgirl,
	facingSeated,
	facingWall,
	doggy,
	doggyChair,
	doggyDesk,
	doggyArmDesk,
	doggySeat,
	doggyWall,
	doggyWallLifted,
	doggyPool,
	doggyFence,
	doggyLying,
	doggyHorse,
	standing,
	ekiben,
	ekibenFence,
	layingDesk,
	matingPress,
	pressedBehind
];

export default combinedPoses;