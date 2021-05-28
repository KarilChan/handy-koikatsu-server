import {IInfoPose} from '../csv/combinedPoses';
import ELoopType from '../types/ELoopType';

const benchBlowjob: IInfoPose = {
	names: ['Bench Blowjob'],
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
					position: 55
				},
				{
					time: 0.5,
					position: 15
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
					position: 40
				},
				{
					time: 0.5,
					position: 70
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
					position: 100
				},
			],
			type: ELoopType.single
		}
	],
	csv: {
		name: 'bb.csv',
		size: 22477
	}
}

export default benchBlowjob;