import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const oneHandHandjob: IInfoPose = 	{
	names: ['One-Hand Handjob', 'Standing One-Hand Handjob', 'Seated One-Hand Handjob'],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 20
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
					position: 80
				},
				{
					time: 0.61909,
					position: 20
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
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
		name: 'ohh.csv',
		size: 21592
	}
};

export default oneHandHandjob;