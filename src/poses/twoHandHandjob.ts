import {IInfoPose} from '../csv/combinedPoses';
import ELoopType from '../types/ELoopType';

const twoHandHandjob: IInfoPose = 	{
	aliases: [
		'Two-Hand Handjob', '両手コキ',
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
					time: 0.375,
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
					position: 90
				},
				{
					time: 0.61111,
					position: 45
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop', 'M_OUT_Start', 'M_OUT_Loop'],
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
			multiplier: 5,
			type: ELoopType.static
		},
		{
			names: ['OUT_A'],
			strokes: [
				{
					time: 0,
					position: 0
				},
				{
					time: 0.5,
					position: 10
				},
			],
			type: ELoopType.static
		}
	],
	csv: {
		name: 'thh.csv',
		sha256: 'f7df7691b9097641214a529aac6a576045ca9b81caca9a6804725e59c7da49bf',
		size: 21565
	}
};

export default twoHandHandjob;