import {IInfoPose} from '../csv/combinedPoses';
import ELoopType from '../types/ELoopType';

const handjobBallLicking: IInfoPose = {
	names: ['Standing Handjob & Ball Licking'],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 85
				},
				{
					time: 0.5,
					position: 50
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 45
				},
				{
					time: 0.5,
					position: 85
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
			strokes: [
				{
					time: 0,
					position: 55
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
					position: 15
				},
				{
					time: 0.5,
					position: 25
				},
			],
			type: ELoopType.single
		}
	],
	csv: {
		name: 'hjbl.csv',
		size: 21616
	}
}

export default handjobBallLicking;