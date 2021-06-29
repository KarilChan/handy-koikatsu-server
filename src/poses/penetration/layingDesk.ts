import ELoopType from '../../types/ELoopType';
import {IInfoPose} from '../../csv/scriptedPoses';

const layingDesk: IInfoPose = 	{
	aliases: [
		'Laying On Desk', '机寝位',
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
					time: 0.4,
					position: 30
				}
			],
			type: ELoopType.single
		},
		{
			names: ['InsertIdle'],
			strokes: [
				{
					time: 0,
					position: 20
				},
				{
					time: 0.5,
					position: 50
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
					time: 0.475,
					position: 5
				}
			],
			type: ELoopType.variable,
			maxMulti: 3
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 50
				},
				{
					time: 0.56,
					position: 0
				}
			],
			type: ELoopType.variable,
			maxMulti: 3
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 10
				},
				{
					time: 0.5,
					position: 60
				}
			],
			baseSpeed: 5,
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
					position: 50
				},
			],
			baseSpeed: 5,
			type: ELoopType.static
		},
		{
			names: ['IN_A', 'WS_IN_A','M_OUT_Loop', 'M_OUT_Start'],
			strokes: [
				{
					time: 0,
					position: 20
				},
				{
					time: 0.5,
					position: 30
				},
			],
			baseSpeed: 2,
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
		name: 'layd.csv',
		sha256: '7482d44a3a80742fcfe7cdf510fe84673b30bffbef05dc4aebddf822815c1f9e',
		size: 24832
	}
}

export default layingDesk;