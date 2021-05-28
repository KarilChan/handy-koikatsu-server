import {IInfoPose} from '../csv/combinedPoses';
import ELoopType from '../types/ELoopType';

const handjobBallrub: IInfoPose = {
	names: ['Standing Handjob & Ballrub'],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 30
				},
				{
					time: 0.5,
					position: 65
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
					time: 0.61909,
					position: 40
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
			strokes: [
				{
					time: 0,
					position: 50
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
			names: ['IN_Start', 'IN_Loop'],
			strokes: [
				{
					time: 0,
					position: 20
				},
				{
					time: 0.5,
					position: 35
				}
			],
			multiplier: 2.5,
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
		name: 'hb.csv',
		size: 22082
	}
}

export default handjobBallrub;