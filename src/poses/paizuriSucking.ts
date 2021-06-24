import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const paizuri: IInfoPose = {
	aliases: [
		'Paizuri & Sucking', 'パイズリ+咥え',
		'Seated Paizuri & Sucking', '椅子パイズリ+咥え',
		'Standing Paizuri & Sucking', '立ちパイズリ+咥え',
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
					position: 35
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
					position: 50
				},
				{
					time: 0.5,
					position: 85
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
					position: 50
				},
				{
					time: 0.5,
					position: 65
				},
			],
			multiplier: 2,
			type: ELoopType.static
		},
		{
			names: ['IN_Start', 'IN_Loop'],
			strokes: [
				{
					time: 0,
					position: 60
				},
				{
					time: 0.5,
					position: 90
				}
			],
			multiplier: 2,
			type: ELoopType.static
		},
		{
			names: ['Oral_Idle', 'Oral_Idle_IN', 'Drink_IN', 'Drink', 'Drink_A', 'Vomit', 'Vomit_IN', 'Vomit_A', 'OUT_A'],
			strokes: [
				{
					time: 0,
					position: 50
				},
				{
					time: 0.5,
					position: 65
				},
			],
			type: ELoopType.static
		}
	],
	csv: {
		name: 'pzs.csv',
		sha256: 'fae4e5d36698137dd1bac4a1aec682beee34b277f6d4b8359283c9bdf190740f',
		size: 22336
	}
}

export default paizuri;