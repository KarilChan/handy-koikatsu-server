import {IInfoPose} from '../csv/combinedPoses';
import ELoopType from '../types/ELoopType';

const crowdedHandjob: IInfoPose = {
	aliases: [
		'Crowded Handjob', '密着手コキ',
	],
	states: [
		{
			names: ['Idle'],
			strokes: [
				{
					time: 0,
					position: 60
				},
				{
					time: 0.5,
					position: 75
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 55
				},
				{
					time: 0.5,
					position: 85
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
					time: 0.5,
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
					position: 65
				},
				{
					time: 0.5,
					position: 85
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
					position: 60
				},
				{
					time: 0.5,
					position: 70
				},
			],
			type: ELoopType.static
		}
	],
	csv: {
		name: 'ch.csv',
		sha256: '92576532a97b6d76cdc1faa89f1c2ee11914b1f31b48981995ae525199d2042b',
		size: 32615
	}
}

export default crowdedHandjob;