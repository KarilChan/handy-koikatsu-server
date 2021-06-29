import TSupportedAnimStates from '../types/TSupportedAnimStates';
import TSupportedAnims from '../types/TSupportedAnims';
import paizuri from '../poses/houshi/paizuri';
import tipShaftLicking from '../poses/houshi/tipShaftLicking';
import ELoopType from '../types/ELoopType';
import twoHandBlowjob from '../poses/houshi/twoHandBlowjob';
import oneHandHandjob from '../poses/houshi/oneHandHandjob';
import twoHandHandjob from '../poses/houshi/twoHandHandjob';
import glansRubbing from '../poses/houshi/glansRubbing';
import onaholeHandjob from '../poses/houshi/onaholeHandjob';
import crowdedHandjob from '../poses/houshi/crowdedHandjob';
import noHandTipLicking from '../poses/houshi/noHandTipLicking';
import handjobBallLicking from '../poses/houshi/handjobBallLicking';
import oneHandBlowjob from '../poses/houshi/oneHandBlowjob';
import sittingBlowjob from '../poses/houshi/sittingBlowjob';
import benchBlowjob from '../poses/houshi/benchBlowjob';
import noHandBlowjob from '../poses/houshi/noHandBlowjob';
import handjobBallrub from '../poses/houshi/handjobBallrub';
import paizuriHigh from '../poses/houshi/paizuriHigh';
import assistedPaizuri from '../poses/houshi/assistedPaizuri';
import assistedPaizuriHigh from '../poses/houshi/assistedPaizuriHigh';
import pressedPaizuri from '../poses/houshi/pressedPaizuri';
import paizuriSucking from '../poses/houshi/paizuriSucking';
import missionary from '../poses/penetration/missionary';
import cowgirl from '../poses/penetration/cowgirl';
import facingSeated from '../poses/penetration/facingSeated';
import doggy from '../poses/penetration/doggy';
import doggyChair from '../poses/penetration/doggyChair';
import doggySeat from '../poses/penetration/doggySeat';
import doggyDesk from '../poses/penetration/doggyDesk';
import doggyWall from '../poses/penetration/doggyWall';
import doggyWallLifted from '../poses/penetration/doggyWallLifted';
import doggyLying from '../poses/penetration/doggyLying';
import doggyFence from '../poses/penetration/doggyFence';
import doggyPool from '../poses/penetration/doggyPool';
import doggyArmDesk from '../poses/penetration/doggyArmDesk';
import piledriver from '../poses/penetration/piledriver';
import doggyHorse from '../poses/penetration/doggyHorse';
import standing from '../poses/penetration/standing';
import ekiben from '../poses/penetration/ekiben';
import ekibenFence from '../poses/penetration/ekibenFence';
import facingWall from '../poses/penetration/facingWall';
import layingDesk from '../poses/penetration/layingDesk';
import matingPress from '../poses/penetration/matingPress';
import pressedBehind from '../poses/penetration/pressedBehind';
import spooning from '../poses/penetration/spooning';
import spooningDesk from '../poses/penetration/spooningDesk';
import spooningSeated from '../poses/penetration/spooningSeated';
import masturbateFinger from '../poses/onanie/masturbateFinger';
import masturbateCorner from '../poses/onanie/masturbateCorner';
import tribbing from '../poses/yuri/tribbing';
import groping from '../poses/yuri/groping';
import cunny from '../poses/yuri/cunny';
import ffmDoggy from '../poses/ffm/ffmDoggy';
import ffmCowgirl from '../poses/ffm/ffmCowgirl';
import ffmFellatio from '../poses/ffm/ffmFellatio';
import chestHandjob from '../poses/darkness/chestHandjob';
import doggyFella from '../poses/darkness/doggyFella';
import fellaHandjob from '../poses/darkness/fellaHandjob';
import irrumatio from '../poses/darkness/irrumatio';
import pinnedMissionary from '../poses/darkness/pinnedMissionary';
import pinnedSpooning from '../poses/darkness/pinnedSpooning';

interface IStroke {
	position: number,
	time: number // 0<=t<1, must be greater than the previous stroke time
}

export interface ICsv {
	name: string,
	size: number,
	sha256: string
}

export interface IState {
	names: TSupportedAnimStates[],
	strokes: IStroke[],
	/**
	 * Speed in AnimStateInfo
	 *
	 * @default 1
	 */

	baseSpeed?: number,
	/**
	 * Max speedMultiplier in AnimStateInfo
	 *
	 * @default 2.5
	 */
	maxMulti?: number,
	type: ELoopType
}

export interface IInfoPose {
	aliases: TSupportedAnims[],
	states: IState[],
	csv: ICsv
}

const scriptedPoses: IInfoPose[] = [
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
	pressedBehind,
	spooning,
	spooningDesk,
	spooningSeated,

	masturbateFinger,
	masturbateCorner,

	tribbing,
	groping,
	cunny,

	ffmDoggy,
	ffmCowgirl,
	ffmFellatio,

	chestHandjob,
	doggyFella,
	fellaHandjob,
	irrumatio,
	pinnedMissionary,
	pinnedSpooning,
];

export default scriptedPoses;