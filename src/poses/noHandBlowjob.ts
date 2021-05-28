import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const noHandBlowjob: IInfoPose = 	{
	names: ['Standing No-Hand Blowjob'],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 80
				},
				{
					time: 0.5,
					position: 30
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
					position: 5
				},
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 15
				},
				{
					time: 0.5,
					position: 50
				}
			],
			multiplier: 5,
			type: ELoopType.single
		},
		{
			names: ['IN_Start', 'IN_Loop'],
			strokes: [
				{
					time: 0,
					position: 35
				},
				{
					time: 0.5,
					position: 50
				}
			],
			type: ELoopType.single
		},
		{
			names: ['Oral_Idle', 'Oral_Idle_IN', 'Drink_IN', 'Drink', 'Drink_A', 'Vomit', 'Vomit_IN', 'Vomit_A', 'M_OUT_Start', 'M_OUT_Loop', 'OUT_A'],
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
		name: 'nhb.csv',
		size: 21194
	}
}

export default noHandBlowjob;