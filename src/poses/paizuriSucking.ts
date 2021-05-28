import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const paizuri: IInfoPose = {
	names: ['Paizuri & Sucking', 'Seated Paizuri & Sucking', 'Standing Paizuri & Sucking'],
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
					position: 85
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 35
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
					position: 50
				},
				{
					time: 0.5,
					position: 65
				},
			],
			multiplier: 2,
			type: ELoopType.single
		},
		{
			names: ['IN_Start', 'IN_Loop'],
			strokes: [
				{
					time: 0,
					position: 60
				},
				{
					time: 0.5,
					position: 90
				}
			],
			multiplier: 2,
			type: ELoopType.single
		},
		{
			names: ['Oral_Idle', 'Oral_Idle_IN', 'Drink_IN', 'Drink', 'Drink_A', 'Vomit', 'Vomit_IN', 'Vomit_A', 'OUT_A'],
			strokes: [
				{
					time: 0,
					position: 50
				},
				{
					time: 0.5,
					position: 65
				},
			],
			type: ELoopType.single
		}
	],
	csv: {
		name: 'pzs.csv',
		size: 22362
	}
}

export default paizuri;