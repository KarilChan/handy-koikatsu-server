import ELoopType from '../../types/ELoopType';
import {IInfoPose} from '../../csv/scriptedPoses';

const sittingBlowjob: IInfoPose = 	{
	aliases: [
		'Sitting Blowjob', '椅子またがりフェラ',
	],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 95
				},
				{
					time: 0.5,
					position: 55
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 95
				},
				{
					time: 50 / 80,
					position: 50
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
			strokes: [
				{
					time: 0,
					position: 75
				},
				{
					time: 50 / 80,
					position: 95
				}
			],
			baseSpeed: 5,
			type: ELoopType.static
		},
		{
			names: ['IN_Start', 'IN_Loop', 'OUT_A'],
			strokes: [
				{
					time: 0,
					position: 10
				},
				{
					time: 0.5,
					position: 25
				}
			],
			type: ELoopType.static
		},
		{
			names: ['Oral_Idle', 'Oral_Idle_IN', 'Drink_IN', 'Drink', 'Drink_A', 'Vomit', 'Vomit_IN', 'Vomit_A'],
			strokes: [
				{
					time: 0,
					position: 100
				}
			],
			type: ELoopType.static
		}
	],
	csv: {
		name: 'sb.csv',
		sha256: '798e784e7828489b2e8221149a381f1141a7563a245b900ca3996dc63e44df0d',
		size: 21763
	}
}

export default sittingBlowjob;