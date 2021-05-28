import {IInfoPose} from '../csv/combinedPoses';
import ELoopType from '../types/ELoopType';

const twoHandHandjob: IInfoPose = 	{
	names: ['Two-Hand Handjob'],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 40
				},
				{
					time: 0.375,
					position: 80
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 90
				},
				{
					time: 0.61111,
					position: 45
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
			type: ELoopType.single
		},
		{
			names: ['OUT_A'],
			strokes: [
				{
					time: 0,
					position: 0
				},
				{
					time: 0.5,
					position: 10
				},
			],
			type: ELoopType.single
		}
	],
	csv: {
		name: 'thh.csv',
		size: 21591
	}
};

export default twoHandHandjob;