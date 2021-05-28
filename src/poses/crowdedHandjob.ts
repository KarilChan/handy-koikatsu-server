import {IInfoPose} from '../csv/combinedPoses';
import ELoopType from '../types/ELoopType';

const crowdedHandjob: IInfoPose = {
	names: ['Crowded Handjob'],
	states: [
		{
			names: ['Idle'],
			strokes: [
				{
					time: 0,
					position: 60
				},
				{
					time: 0.5,
					position: 75
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['WLoop'],
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
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 90
				},
				{
					time: 0.5,
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
					position: 60
				},
				{
					time: 0.5,
					position: 70
				},
			],
			type: ELoopType.single
		}
	],
	csv: {
		name: 'ch.csv',
		size: 32641
	}
}

export default crowdedHandjob;