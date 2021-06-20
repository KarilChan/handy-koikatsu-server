import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const ekiben: IInfoPose = {
	aliases: [
		'Ekiben', '駅弁',
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
					position: 10
				},
				{
					time: 0.5,
					position: 35
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
					position: 60
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 5
				},
				{
					time: 0.55,
					position: 65
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
					position: 30
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
					position: 35
				},
			],
			multiplier: 2,
			type: ELoopType.static
		},
		{
			names: ['OUT_A', 'Drop', 'Pull'],
			strokes: [
				{
					time: 0,
					position: 100
				},
			],
			type: ELoopType.static
		},
		{
			names: ['Idle'],
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
			type: ELoopType.static
		},
	],
	csv: {
		name: 'ek.csv',
		sha256: 'ba234c32814d70b094ba364e1fe93436a048e798cc7b67f03bbb7211243e9a55'
	}
}

export default ekiben;