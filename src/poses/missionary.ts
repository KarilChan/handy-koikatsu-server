import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const missionary: IInfoPose = 	{
	aliases: [
		'Missionary', '正常位',
		'Holding Legs Missionary', '開脚正常位',
	],
	states: [
		{
			names: ['Insert'],
			strokes: [
				{
					time: 0,
					position: 100
				},
				{
					time: 0.3,
					position: 0
				}
			],
			type: ELoopType.single
		},
		{
			names: ['InsertIdle'],
			strokes: [
				{
					time: 0,
					position: 0
				},
				{
					time: 0.5,
					position: 20
				}
			],
			type: ELoopType.static
		},
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 50
				},
				{
					time: 0.465,
					position: 0
				}
			],
			type: ELoopType.variable,
			maxMultiplier: 3
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 70
				},
				{
					time: 0.5875,
					position: 0
				}
			],
			type: ELoopType.variable,
			maxMultiplier: 3
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 0
				},
				{
					time: 0.5,
					position: 35
				}
			],
			multiplier: 5,
			type: ELoopType.static
		},
		{
			names: ['M_IN_Start', 'M_IN_Loop', 'WF_IN_Start', 'WF_IN_Loop', 'WS_IN_Start', 'WS_IN_Loop'],
			strokes: [
				{
					time: 0,
					position: 20
				},
				{
					time: 0.5,
					position: 50
				},
			],
			multiplier: 5,
			type: ELoopType.static
		},
		{
			names: ['IN_A', 'WS_IN_A','M_OUT_Loop', 'M_OUT_Start'],
			strokes: [
				{
					time: 0,
					position: 10
				},
				{
					time: 0.5,
					position: 30
				},
			],
			multiplier: 2,
			type: ELoopType.static
		},
		{
			names: ['OUT_A', 'Drop', 'Idle', 'Pull'],
			strokes: [
				{
					time: 0,
					position: 100
				},
			],
			type: ELoopType.static
		},
	],
	csv: {
		name: 'ms.csv',
		sha256: '9c91a84d2edec11cf69cc3d103c177a1e9cfdbd2a87fc4bdd0b360ac1846dbd9',
		size: 24770
	}
}

export default missionary;