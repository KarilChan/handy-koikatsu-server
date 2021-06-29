import ELoopType from '../../types/ELoopType';
import {IInfoPose} from '../../csv/scriptedPoses';

const spooningDesk: IInfoPose = {
	aliases: [
		'Spooning on Desk', '机側位',
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
				},
				{
					time: 0.6,
					position: 20
				},
			],
			type: ELoopType.single
		},
		{
			names: ['InsertIdle'],
			strokes: [
				{
					time: 0,
					position: 45
				},
				{
					time: 0.5,
					position: 70
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
					position: 0
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
					position: 60
				},
				{
					time: 0.45,
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
					position: 60
				},
				{
					time: 0.5,
					position: 0
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
					position: 45
				},
			],
			baseSpeed: 5,
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
					position: 45
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
		name: 'spd.csv',
		sha256: '5d3e8fff06a5939f5911e8b019db30ccd53b0829fed45fc9296501128809e962',
		size: 24792
	}
}

export default spooningDesk;