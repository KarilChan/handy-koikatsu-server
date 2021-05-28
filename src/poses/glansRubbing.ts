import {IInfoPose} from '../csv/combinedPoses';
import ELoopType from '../types/ELoopType';

const glansRubbing: IInfoPose = {
	names: ['Glans Rubbing', 'Standing Glans Rubbing', 'Seated Glans Rubbing'],
	states: [
		{
			names: ['WLoop'],
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
					time: 0.5,
					position: 100
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
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
			multiplier: 5,
			type: ELoopType.single
		},
		{
			names: ['M_OUT_Start', 'M_OUT_Loop'],
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
					position: 15
				},
			],
			type: ELoopType.single
		}
	],
	csv: {
		name: 'gr.csv',
		size: 22583
	}
}

export default glansRubbing;