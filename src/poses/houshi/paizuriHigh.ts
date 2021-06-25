import ELoopType from '../../types/ELoopType';
import {IInfoPose} from '../../csv/combinedPoses';

const paizuriHigh: IInfoPose = 	{
	aliases: [
		'Pool Paizuri', 'プールパイズリ',
		'Standing Paizuri', '立ちパイズリ',
		'Seated Paizuri & Licking', '椅子パイズリ+舐め',
	],
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
					position: 65
				},
				{
					time: 0.5,
					position: 95
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
					position: 70
				},
				{
					time: 0.5,
					position: 95
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
					position: 80
				},
				{
					time: 0.5,
					position: 95
				},
			],
			type: ELoopType.static
		},
	],
	csv: {
		name: 'pzh.csv',
		sha256: '305f55dd18e1cdeb52fdc77071316682d887b0e7c5f48039707606b6fb28a433',
		size: 21951
	}
}

export default paizuriHigh;