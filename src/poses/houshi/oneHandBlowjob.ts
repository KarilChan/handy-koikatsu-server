import ELoopType from '../../types/ELoopType';
import {IInfoPose} from '../../csv/scriptedPoses';

const oneHandBlowjob: IInfoPose = 	{
	aliases: [
		'One-Hand Blowjob', '片手フェラ',
		'Standing One-Hand Blowjob', '立ち片手フェラ',
	],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 90
				},
				{
					time: 46 / 80,
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
					position: 95
				},
				{
					time: 15 / 80,
					position: 80
				},
				{
					time: 31 / 80,
					position: 50
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 70
				},
				{
					time: 0.5,
					position: 95
				}
			],
			baseSpeed: 5,
			type: ELoopType.static
		},
		{
			names: ['IN_Start', 'IN_Loop'],
			strokes: [
				{
					time: 0,
					position: 75
				},
				{
					time: 0.5,
					position: 85
				}
			],
			baseSpeed: 2.5,
			type: ELoopType.static
		},
		{
			names: ['M_OUT_Start', 'M_OUT_Loop'],
			strokes: [
				{
					time: 0,
					position: 45
				},
				{
					time: 0.5,
					position: 80
				}
			],
			baseSpeed: 5,
			type: ELoopType.static
		},
		{
			names: ['OUT_A'],
			strokes: [
				{
					time: 0,
					position: 30
				},
				{
					time: 0.5,
					position: 40
				}
			],
			type: ELoopType.static
		},
		{
			names: ['Oral_Idle', 'Oral_Idle_IN', 'Drink_IN', 'Drink', 'Drink_A', 'Vomit', 'Vomit_IN', 'Vomit_A', 'Idle'],
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
		name: 'ohb.csv',
		sha256: '6daeb8526fc0ac0a0c804601256e555bcdeb9368911347b6610ed1158dc3b114',
		size: 28254
	}
}

export default oneHandBlowjob;