import {IInfoPose} from '../csv/combinedPoses';
import ELoopType from '../types/ELoopType';

const noHandTipLicking: IInfoPose = {
	names: ['Seated No-Hand Tip Licking'],
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
					position: 100
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
					position: 75
				},
				{
					time: 32 / 80,
					position: 100
				}
			],
			multiplier: 2,
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 80
				},
				{
					time: 0.5,
					position: 100
				}
			],
			multiplier: 5,
			type: ELoopType.single
		},
		{
			names: ['M_OUT_Start', 'M_OUT_Loop', 'OUT_A'],
			strokes: [
				{
					time: 0,
					position: 0
				},
			],
			type: ELoopType.single
		}
	],
	csv: {
		name: 'nhtl.csv',
		size: 44656
	}
}

export default noHandTipLicking;