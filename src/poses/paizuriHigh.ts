import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const paizuriHigh: IInfoPose = 	{
	names: ['Pool Paizuri', 'Standing Paizuri', 'Seated Paizuri & Licking'],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 70
				},
				{
					time: 0.5,
					position: 95
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 65
				},
				{
					time: 0.5,
					position: 95
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 50
				},
				{
					time: 0.5,
					position: 85
				}
			],
			multiplier: 5,
			type: ELoopType.single
		},
		{
			names: ['M_OUT_Start', 'M_OUT_Loop'],
			strokes: [
				{
					time: 0,
					position: 70
				},
				{
					time: 0.5,
					position: 95
				},
			],
			multiplier: 2,
			type: ELoopType.single
		},
		{
			names: ['OUT_A'],
			strokes: [
				{
					time: 0,
					position: 80
				},
				{
					time: 0.5,
					position: 95
				},
			],
			type: ELoopType.single
		},
	],
	csv: {
		name: 'pzh.csv',
		size: 21977
	}
}

export default paizuriHigh;