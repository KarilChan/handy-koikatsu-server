import ELoopType from '../../types/ELoopType';
import {IInfoPose} from '../../csv/scriptedPoses';

const assistedPaizuri: IInfoPose = 	{
	aliases: [
		'Hand-Assisted Paizuri', '腕はさみパイズリ',
		'Seated Hand-Assisted Paizuri', '椅子腕はさみパイズリ',
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
			baseSpeed: 5,
			type: ELoopType.static
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
			baseSpeed: 2,
			type: ELoopType.static
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
			type: ELoopType.static
		},
	],
	csv: {
		name: 'apz.csv',
		sha256: 'a0356fdbc64d17f6c64ebce4df31de18b9b6c3ead64722f27fa93939bf7750c4',
		size: 21960
	}
}

export default assistedPaizuri;