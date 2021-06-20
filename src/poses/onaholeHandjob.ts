import {IInfoPose} from '../csv/combinedPoses';
import ELoopType from '../types/ELoopType';

const onaholeHandjob: IInfoPose = {
	aliases: [
		'Standing Onahole Handjob', '立ちオナホ手コキ',
	],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 35
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
					time: 37 / 80,
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
					position: 30
				},
				{
					time: 0.5,
					position: 75
				}
			],
			multiplier: 5,
			type: ELoopType.static
		},
		{
			names: ['M_OUT_Start', 'M_OUT_Loop', 'OUT_A'],
			strokes: [
				{
					time: 0,
					position: 100
				},
				{
					time: 0.5,
					position: 100
				},
			],
			type: ELoopType.static
		}
	],
	csv: {
		name: 'onaHj.csv',
		sha256: 'ece40e502c89adc0b7d996781f5302df0b9f93edc877458a54fbd15f3fda763b'
	}
}

export default onaholeHandjob;