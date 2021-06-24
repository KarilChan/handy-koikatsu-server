import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const facingSeated: IInfoPose = {
	aliases: [
		'Seated Facing', '椅子対面',
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
					time: 0.40,
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
					position: 30
				},
				{
					time: 0.5,
					position: 70
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
					position: 85
				},
				{
					time: 0.5,
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
					position: 75
				},
				{
					time: 0.5,
					position: 25
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
					position: 25
				},
				{
					time: 0.5,
					position: 55
				},
			],
			multiplier: 5,
			type: ELoopType.static
		},
		{
			names: ['IN_A', 'WS_IN_A', 'M_OUT_Loop', 'M_OUT_Start'],
			strokes: [
				{
					time: 0,
					position: 20
				},
				{
					time: 0.5,
					position: 40
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
		name: 'sf.csv',
		sha256: '30981f23fd28d68e6ef7cfb55e86e8eb5591dbfc5eaa96a367c5eac8467a23bf',
		size: 25409
	}
}

export default facingSeated;