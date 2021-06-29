import {IInfoPose} from '../../csv/scriptedPoses';
import ELoopType from '../../types/ELoopType';

const handjobBallLicking: IInfoPose = {
	aliases: [
		'Standing Handjob & Ball Licking', '立ち玉舐め手コキ',
	],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 85
				},
				{
					time: 0.5,
					position: 50
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 45
				},
				{
					time: 0.5,
					position: 85
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
			strokes: [
				{
					time: 0,
					position: 55
				},
				{
					time: 0.5,
					position: 85
				}
			],
			baseSpeed: 5,
			type: ELoopType.static
		},
		{
			names: ['OUT_A'],
			strokes: [
				{
					time: 0,
					position: 15
				},
				{
					time: 0.5,
					position: 25
				},
			],
			type: ELoopType.static
		}
	],
	csv: {
		name: 'hjbl.csv',
		sha256: '1aea49bfd0daac966cb2e82ad87c8fc2170e6d9430c68dc83c8202aa29537767',
		size: 21590
	}
}

export default handjobBallLicking;