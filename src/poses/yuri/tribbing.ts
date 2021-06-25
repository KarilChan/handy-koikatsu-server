import ELoopType from '../../types/ELoopType';
import {IInfoPose} from '../../csv/combinedPoses';

const tribbing: IInfoPose = {
	aliases: [
		'Tribbing', '具合わせ',
	],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 80
				},
				{
					time: 0.55,
					position: 0
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
					position: 0
				},
				{
					time: 0.4,
					position: 60
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
					position: 70
				},
				{
					time: 0.55,
					position: 0
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
					position: 60
				},
				{
					time: 0.5,
					position: 10
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
					position: 5
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
		name: 'trib.csv',
		sha256: 'fd3f211d7a67ba592b75a75ab8fc312701c91a68f87120032283d947a0beddae',
		size: 22302
	}
}

export default tribbing;