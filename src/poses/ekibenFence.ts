import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const ekibenFence: IInfoPose = {
	aliases: [
		'Ekiben Grabbing Fence', 'フェンス掴まり駅弁',
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
					time: 0.35,
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
					position: 30
				},
				{
					time: 0.5,
					position: 60
				}
			],
			type: ELoopType.static
		},
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 5
				},
				{
					time: 0.5,
					position: 50
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 10
				},
				{
					time: 0.5,
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
					position: 5
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
					position: 40
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
					position: 0
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
			names: ['OUT_A', 'Drop', 'Pull', 'Idle'],
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
		name: 'ekf.csv',
		sha256: '82190eab98745ad24ec993e3220c91ea370d01d86680f9fcf9ee871fb645bd2e'
	}
}

export default ekibenFence;