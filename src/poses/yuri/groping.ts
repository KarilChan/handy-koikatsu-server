import ELoopType from '../../types/ELoopType';
import {IInfoPose} from '../../csv/scriptedPoses';

const groping: IInfoPose = 	{
	aliases: [
		'Mutual Groping', '互い弄り',
	],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 65
				},
				{
					time: 0.425,
					position: 10
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
					position: 80
				},
				{
					time: 0.475,
					position: 0
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
					position: 0
				},
				{
					time: 0.5,
					position: 50
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
			names: ['Orgasm'],
			strokes: [
				{
					time: 0,
					position: 30
				},
				{
					time: 0.5,
					position: 80
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
					position: 10
				},
				{
					time: 0.5,
					position: 40
				}
			],
			type: ELoopType.static
		},
	],
	csv: {
		name: 'grop.csv',
		sha256: 'fd3f211d7a67ba592b75a75ab8fc312701c91a68f87120032283d947a0beddae',
		size: 2230
	}
}

export default groping;