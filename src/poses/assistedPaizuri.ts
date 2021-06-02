import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const assistedPaizuri: IInfoPose = 	{
	names: ['Hand-Assisted Paizuri', 'Seated Paizuri'],
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
					position: 85
				},
				{
					time: 0.5,
					position: 35
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
					position: 75
				},
			],
			multiplier: 2,
			type: ELoopType.single
		},
		{
			names: ['OUT_A'],
			strokes: [
				{
					time: 0,
					position: 55
				},
				{
					time: 0.5,
					position: 70
				},
			],
			type: ELoopType.single
		},
	],
	csv: {
		name: 'apz.csv',
		size: 21986,
		sha256: '2cd8a327b75fec4e2257ca153e67e2b39e5ee9611df147327ae244715cb3786c'
	}
}

export default assistedPaizuri;