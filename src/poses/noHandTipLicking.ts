import {IInfoPose} from '../csv/combinedPoses';
import ELoopType from '../types/ELoopType';

const noHandTipLicking: IInfoPose = {
	aliases: [
		'Seated No-Hand Tip Licking', '椅子ノーハンド先舐め'
	],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 80
				},
				{
					time: 0.5,
					position: 100
				}
			],
			multiplier: 2,
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
					time: 32 / 80,
					position: 100
				}
			],
			multiplier: 2,
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 80
				},
				{
					time: 0.5,
					position: 100
				}
			],
			multiplier: 5,
			type: ELoopType.static
		},
		{
			names: ['M_OUT_Start', 'M_OUT_Loop', 'OUT_A'],
			strokes: [
				{
					time: 0,
					position: 0
				},
			],
			type: ELoopType.static
		}
	],
	csv: {
		name: 'nhtl.csv',
		sha256: '645b33bac25e6bf88c5878934f7ca32bd9ef550479a36b9c7506d4c16805998c',
		size: 44630
	}
}

export default noHandTipLicking;