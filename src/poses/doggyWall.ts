import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const doggyWall: IInfoPose = {
	aliases: [
		'Doggystyle Against Wall', '壁バック',
	],
	states: [
		{
			names: ['Insert', 'A_Insert'],
			strokes: [
				{
					time: 0,
					position: 100
				},
				{
					time: 0.45,
					position: 0
				}
			],
			type: ELoopType.single
		},
		{
			names: ['InsertIdle', 'A_InsertIdle'],
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
			names: ['WLoop', 'A_WLoop'],
			strokes: [
				{
					time: 0,
					position: 0
				},
				{
					time: 0.5,
					position: 55
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop', 'A_SLoop'],
			strokes: [
				{
					time: 0,
					position: 0
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
					position: 0
				},
				{
					time: 0.5,
					position: 40
				}
			],
			multiplier: 5,
			type: ELoopType.static
		},
		{
			names: ['A_OLoop'],
			strokes: [
				{
					time: 0,
					position: 0
				},
				{
					time: 0.5,
					position: 30
				}
			],
			multiplier: 5,
			type: ELoopType.static
		},
		{
			names: [
				'M_IN_Start', 'A_M_IN_Start',
				'M_IN_Loop', 'A_M_IN_Loop',
				'WF_IN_Start', 'A_WF_IN_Start',
				'WF_IN_Loop', 'A_WF_IN_Loop',
				'WS_IN_Start', 'A_WS_IN_Start',
				'WS_IN_Loop', 'A_WS_IN_Loop'
			],
			strokes: [
				{
					time: 0,
					position: 0
				},
				{
					time: 0.5,
					position: 30
				},
			],
			multiplier: 5,
			type: ELoopType.static
		},
		{
			names: ['IN_A', 'A_IN_A', 'WS_IN_A', 'A_WS_IN_A', 'M_OUT_Loop', 'A_M_OUT_Loop', 'M_OUT_Start', 'A_M_OUT_Start'],
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
			multiplier: 2,
			type: ELoopType.static
		},
		{
			names: ['OUT_A', 'A_OUT_A', 'Drop', 'A_Drop', 'Idle', 'A_Idle', 'Pull', 'A_Pull'],
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
		name: 'dogw.csv',
		sha256: 'f8c86d456de5a3facde4418b9883ca6e8ae3980659d275163038e0e46410d2fd'
	}
}

export default doggyWall;