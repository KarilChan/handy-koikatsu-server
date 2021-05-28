import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const oneHandBlowjob: IInfoPose = 	{
	names: ['One-Hand Blowjob', 'Standing One-Hand Blowjob'],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 90
				},
				{
					time: 46 / 80,
					position: 60
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
					time: 15 / 80,
					position: 80
				},
				{
					time: 31 / 80,
					position: 50
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
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
			multiplier: 5,
			type: ELoopType.single
		},
		{
			names: ['IN_Start', 'IN_Loop'],
			strokes: [
				{
					time: 0,
					position: 75
				},
				{
					time: 0.5,
					position: 85
				}
			],
			multiplier: 2.5,
			type: ELoopType.single
		},
		{
			names: ['M_OUT_Start', 'M_OUT_Loop'],
			strokes: [
				{
					time: 0,
					position: 45
				},
				{
					time: 0.5,
					position: 80
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
					position: 30
				},
				{
					time: 0.5,
					position: 40
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
		name: 'ohb.csv',
		size: 28280
	}
}

export default oneHandBlowjob;