import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const oneHandHandjob: IInfoPose = 	{
	aliases: [
		'One-Hand Handjob', '片手コキ',
		'Standing One-Hand Handjob', '立ち片手コキ',
		'Seated One-Hand Handjob', '椅子片手コキ',
	],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 20
				},
				{
					time: 0.5,
					position: 65
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 80
				},
				{
					time: 0.61909,
					position: 20
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
			strokes: [
				{
					time: 0,
					position: 45
				},
				{
					time: 0.5,
					position: 65
				}
			],
			multiplier: 5,
			type: ELoopType.static
		},
		{
			names: ['OUT_A', 'Idle'],
			strokes: [
				{
					time: 0,
					position: 0
				},
				{
					time: 0.5,
					position: 15
				},
			],
			type: ELoopType.static
		}
	],
	csv: {
		name: 'ohh.csv',
		sha256: '427c813aa1376cce343bb3c3be5f06306132d9bc3d7250a4efc53cc7b30b56e9',
		size: 21566
	}
};

export default oneHandHandjob;