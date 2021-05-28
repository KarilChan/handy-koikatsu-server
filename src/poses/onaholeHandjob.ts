import {IInfoPose} from '../csv/combinedPoses';
import ELoopType from '../types/ELoopType';

const onaholeHandjob: IInfoPose = {
	names: ['Standing Onahole Handjob'],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 35
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
					time: 37 / 80,
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
					position: 30
				},
				{
					time: 0.5,
					position: 75
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
					position: 100
				},
				{
					time: 0.5,
					position: 100
				},
			],
			type: ELoopType.single
		}
	],
	csv: {
		name: 'onaHj.csv',
		size: 21627
	}
}

export default onaholeHandjob;