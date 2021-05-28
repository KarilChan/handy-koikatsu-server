import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const twoHandBlowjob: IInfoPose = 	{
	names: ['Two-Hand Blowjob', 'Seated Two-Hand Blowjob', 'Standing Two-Hand Blowjob'],
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
					position: 85
				},
				{
					time: 21 / 80,
					position: 70
				},
				{
					time: 40 / 80,
					position: 40
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
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
			names: ['IN_Start', 'IN_Loop'],
			strokes: [
				{
					time: 0,
					position: 0
				},
				{
					time: 0.5,
					position: 20
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
					position: 10
				},
				{
					time: 0.5,
					position: 30
				}
			],
			multiplier: 5,
			type: ELoopType.single
		},
		{
			names: ['OUT_A', 'Oral_Idle', 'Oral_Idle_IN', 'Drink_IN', 'Drink', 'Drink_A', 'Vomit', 'Vomit_IN', 'Vomit_A'],
			strokes: [
				{
					time: 0,
					position: 0
				}
			],
			type: ELoopType.single
		}
	],
	csv: {
		name: 'thb.csv',
		size: 28514
	}
}

export default twoHandBlowjob;