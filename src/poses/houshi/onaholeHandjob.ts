import {IInfoPose} from '../../csv/scriptedPoses';
import ELoopType from '../../types/ELoopType';

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
					position: 10
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
			baseSpeed: 5,
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
		sha256: 'ece40e502c89adc0b7d996781f5302df0b9f93edc877458a54fbd15f3fda763b',
		size: 21601
	}
}

export default onaholeHandjob;