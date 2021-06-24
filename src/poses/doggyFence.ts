import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const doggyFence: IInfoPose = {
	aliases: [
		'Doggystyle Against Fence', 'フェンス後背位',
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
					position: 50
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
					position: 65
				},
				{
					time: 0.5,
					position: 25
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
					position: 5
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
					position: 15
				},
				{
					time: 0.5,
					position: 65
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
					position: 5
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
		name: 'dogf.csv',
		sha256: '5ba6ae316c4f67352ea4b02dd46638d3754427629a0d1680d952eb8b1f8f1abc',
		size: 25363
	}
}

export default doggyFence;