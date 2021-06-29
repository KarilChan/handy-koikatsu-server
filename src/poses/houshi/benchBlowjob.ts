import {IInfoPose} from '../../csv/scriptedPoses';
import ELoopType from '../../types/ELoopType';

const benchBlowjob: IInfoPose = {
	aliases: [
		'Bench Blowjob', 'ベンチフェラ',
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
					position: 55
				},
				{
					time: 0.5,
					position: 15
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 50
				},
				{
					time: 0.5,
					position: 20
				}
			],
			baseSpeed: 5,
			type: ELoopType.static
		},
		{
			names: ['M_OUT_Start', 'M_OUT_Loop'],
			strokes: [
				{
					time: 0,
					position: 40
				},
				{
					time: 0.5,
					position: 70
				}
			],
			baseSpeed: 5,
			type: ELoopType.static
		},
		{
			names: ['OUT_A', 'Oral_Idle', 'Oral_Idle_IN', 'Drink_IN', 'Drink', 'Drink_A', 'Vomit', 'Vomit_IN', 'Vomit_A'],
			strokes: [
				{
					time: 0,
					position: 100
				},
			],
			type: ELoopType.static
		}
	],
	csv: {
		name: 'bb.csv',
		sha256: '7c6021c5152a662f2950fb1ac3a44b7aa6cd2ab6d31d0050edc6de30d55c46cb',
		size: 22451
	}
}

export default benchBlowjob;