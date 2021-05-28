import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const pressedPaizuri: IInfoPose = 	{
	names: ['Pressed Paizuri'],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 40
				},
				{
					time: 0.5,
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
					position: 10
				},
				{
					time: 0.5,
					position: 90
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 40
				},
				{
					time: 0.5,
					position: 75
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
					position: 35
				},
				{
					time: 0.5,
					position: 55
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
					position: 40
				},
				{
					time: 0.5,
					position: 50
				},
			],
			type: ELoopType.single
		},
	],
	csv: {
		name: 'ppz.csv',
		size: 21980
	}
}

export default pressedPaizuri;