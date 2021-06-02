import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const assistedPaizuriHigh: IInfoPose = 	{
	names: ['Seated Hand-Assisted Paizuri'],
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
					position: 100
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 100
				},
				{
					time: 0.5,
					position: 70
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
					position: 100
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
					position: 80
				},
				{
					time: 0.5,
					position: 100
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
					position: 80
				},
				{
					time: 0.5,
					position: 95
				},
			],
			type: ELoopType.single
		},
	],
	csv: {
		name: 'apzh.csv',
		size: 23088,
		sha256: '380b2b000b36428198aaa75903331dc8a505455428d4b7955f5f56c18cfc9965'
	}
}

export default assistedPaizuriHigh;