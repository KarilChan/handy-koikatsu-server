import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const sittingBlowjob: IInfoPose = 	{
	names: ['Sitting Blowjob'],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 95
				},
				{
					time: 0.5,
					position: 55
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 95
				},
				{
					time: 50 / 80,
					position: 50
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
			strokes: [
				{
					time: 0,
					position: 75
				},
				{
					time: 50 / 80,
					position: 95
				}
			],
			multiplier: 5,
			type: ELoopType.single
		},
		{
			names: ['IN_Start', 'IN_Loop', 'OUT_A'],
			strokes: [
				{
					time: 0,
					position: 10
				},
				{
					time: 0.5,
					position: 25
				}
			],
			type: ELoopType.single
		},
		{
			names: ['Oral_Idle', 'Oral_Idle_IN', 'Drink_IN', 'Drink', 'Drink_A', 'Vomit', 'Vomit_IN', 'Vomit_A'],
			strokes: [
				{
					time: 0,
					position: 100
				}
			],
			type: ELoopType.single
		}
	],
	csv: {
		name: 'sb.csv',
		size: 21699
	}
}

export default sittingBlowjob;