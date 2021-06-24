import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const doggyLying: IInfoPose = {
	aliases: [
		'Lying Doggystyle', '寝バック',
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
					time: 0.45,
					position: 0
				},
				{
					time: 0.8,
					position: 40
				}
			],
			type: ELoopType.single
		},
		{
			names: ['InsertIdle'],
			strokes: [
				{
					time: 0,
					position: 35
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
					position: 50
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
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 75
				},
				{
					time: 0.5,
					position: 40
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
					position: 50
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
		name: 'dogl.csv',
		sha256: '26371fb565123344c8bdcbda6652cc148907a86b6cb50c181bcbeac8c6c888d0',
		size: 25333
	}
}

export default doggyLying;