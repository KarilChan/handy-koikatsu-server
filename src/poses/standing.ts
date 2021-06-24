import ELoopType from '../types/ELoopType';
import {IInfoPose} from '../csv/combinedPoses';

const standing: IInfoPose = {
	aliases: [
		'Standing', '立位',
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
					time: 0.5,
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
					position: 5
				},
				{
					time: 0.5,
					position: 25
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
					position: 10
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
					time: 0.475,
					position: 10
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
			names: ['M_IN_Start', 'M_IN_Loop', 'WF_IN_Start', 'WF_IN_Loop', 'WS_IN_Start', 'WS_IN_Loop'],
			strokes: [
				{
					time: 0,
					position: 15
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
					position: 15
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
					position: 60
				},
				{
					time: 0,
					position: 85
				},
			],
			type: ELoopType.static
		},
	],
	csv: {
		name: 'st.csv',
		sha256: '6871b884b5e00d0bd54788d83151bdcd86bc94a3a64997181b81ece8f7c164ba',
		size: 26124
	}
}

export default standing;