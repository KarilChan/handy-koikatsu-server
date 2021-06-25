import ELoopType from '../../types/ELoopType';
import {IInfoPose} from '../../csv/combinedPoses';

const twoHandBlowjob: IInfoPose = 	{
	aliases: [
		'Two-Hand Blowjob', '両手フェラ',
		'Seated Two-Hand Blowjob', '椅子両手フェラ',
		'Standing Two-Hand Blowjob', '立ち両手フェラ',
	],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 40
				},
				{
					time: 0.5,
					position: 80
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 85
				},
				{
					time: 21 / 80,
					position: 70
				},
				{
					time: 40 / 80,
					position: 40
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 45
				},
				{
					time: 0.5,
					position: 65
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
					position: 0
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
					position: 10
				},
				{
					time: 0.5,
					position: 30
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
					position: 0
				}
			],
			type: ELoopType.static
		}
	],
	csv: {
		name: 'thb.csv',
		sha256: '45d92509062c048e7cd8ba0ddc2f0f3b985a993cfd1ba416968c2e437b0d4366',
		size: 28488
	}
}

export default twoHandBlowjob;