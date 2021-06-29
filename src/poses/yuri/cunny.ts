import ELoopType from '../../types/ELoopType';
import {IInfoPose} from '../../csv/scriptedPoses';

const cunny: IInfoPose = 	{
	aliases: [
		'Chair Cunnilingus', '椅子クンニ',
	],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 25
				},
				{
					time: 0.4,
					position: 75
				}
			],
			baseSpeed: 1.2,
			type: ELoopType.static
		},
		{
			names: ['MLoop'],
			strokes: [
				{
					time: 0,
					position: 20
				},
				{
					time: 0.4,
					position: 70
				}
			],
			baseSpeed: 1.5 * 1.2,
			type: ELoopType.static
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 10
				},
				{
					time: 0.4,
					position: 65
				}
			],
			baseSpeed: 2,
			maxMulti: 1.4,
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
			strokes: [
				{
					time: 0,
					position: 20
				},
				{
					time: 0.45,
					position: 65
				}
			],
			baseSpeed: 5,
			type: ELoopType.static
		},
		{
			names: ['Orgasm'],
			strokes: [
				{
					time: 0,
					position: 15
				},
				{
					time: 0.5,
					position: 60
				}
			],
			baseSpeed: 2,
			type: ELoopType.static
		},
		{
			names: ['Orgasm_A', 'Orgasm_B'],
			strokes: [
				{
					time: 0,
					position: 0
				},
				{
					time: 0.5,
					position: 35
				}
			],
			type: ELoopType.static
		},
	],
	csv: {
		name: 'cunny.csv',
		sha256: 'fd3f211d7a67ba592b75a75ab8fc312701c91a68f87120032283d947a0beddae',
		size: 2230
	}
}

export default cunny;