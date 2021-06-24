import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const pressedPaizuri: IInfoPose = 	{
	aliases: [
		'Pressed Paizuri', '押し付けパイズリ',
	],
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
					position: 10
				},
				{
					time: 0.5,
					position: 90
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 40
				},
				{
					time: 0.5,
					position: 75
				}
			],
			multiplier: 5,
			type: ELoopType.static
		},
		{
			names: ['M_OUT_Start', 'M_OUT_Loop'],
			strokes: [
				{
					time: 0,
					position: 35
				},
				{
					time: 0.5,
					position: 55
				},
			],
			multiplier: 2,
			type: ELoopType.static
		},
		{
			names: ['OUT_A'],
			strokes: [
				{
					time: 0,
					position: 40
				},
				{
					time: 0.5,
					position: 50
				},
			],
			type: ELoopType.static
		},
	],
	csv: {
		name: 'ppz.csv',
		sha256: 'ccb575b96f9a0be6b4f4d60045ffde30f526d7a109b700d98e59a74522fd1347',
		size: 21954
	}
}

export default pressedPaizuri;