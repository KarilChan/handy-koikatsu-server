import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const doggyHorse: IInfoPose = {
	aliases: [
		'Vaulting Horse Doggystyle', '跳び箱バック',
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
					position: 5
				}
			],
			type: ELoopType.single
		},
		{
			names: ['InsertIdle'],
			strokes: [
				{
					time: 0,
					position: 30
				},
				{
					time: 0.5,
					position: 55
				}
			],
			type: ELoopType.static
		},
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 20
				},
				{
					time: 0.5,
					position: 70
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
					time: 0.53,
					position: 85
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 5
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
			names: [
				'M_IN_Start',
				'M_IN_Loop',
				'WF_IN_Start',
				'WF_IN_Loop',
				'WS_IN_Start',
				'WS_IN_Loop'
			],
			strokes: [
				{
					time: 0,
					position: 25
				},
				{
					time: 0.5,
					position: 45
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
					position: 25
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
		name: 'dogh.csv',
		sha256: '3e35c9a16baff798ddd76f02373df6b4080138f7e2d3248598db3d997eb056aa'
	}
}

export default doggyHorse;