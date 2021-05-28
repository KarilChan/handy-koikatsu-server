import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const tipShaftLicking: IInfoPose = 	{
	names: ['Tip & Shaft Licking'],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 75
				},
				{
					time: 0.5,
					position: 95
				}
			],
			multiplier: 2,
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 50
				},
				{
					time: 0.5,
					position: 75
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
			strokes: [
				{
					time: 0,
					position: 65
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
		name: 'tsl.csv',
		size: 32003
	}
}

export default tipShaftLicking;