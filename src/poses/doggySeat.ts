import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const doggySeat: IInfoPose = {
	aliases: [
		'Arm-Grab Doggystyle Against Seat',
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
			names: ['WLoop'],
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
			type: ELoopType.variable
		},
		{
			names: ['A_WLoop'],
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
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 0
				},
				{
					time: 0.4125,
					position: 70
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['A_SLoop'],
			strokes: [
				{
					time: 0,
					position: 0
				},
				{
					time: 0.43,
					position: 75
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
					position: 45
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
					position: 40
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
					position: 5
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
		name: 'dogs.csv',
		sha256: '9a88c55a8b88d06e296f7b5e2600d86c91860d3d0b1f374219bdf37e5d97f97b'
	}
}

export default doggySeat;