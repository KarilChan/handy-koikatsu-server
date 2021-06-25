import ELoopType from '../../types/ELoopType';
import {IInfoPose} from '../../csv/combinedPoses';

const tipShaftLicking: IInfoPose = 	{
	aliases: [
		'Tip & Shaft Licking', '先舐め＋竿舐め',
	],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 75
				},
				{
					time: 0.5,
					position: 95
				}
			],
			baseSpeed: 2,
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 50
				},
				{
					time: 0.5,
					position: 75
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
			baseSpeed: 5,
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
		name: 'tsl.csv',
		sha256: '1e0fda060cb647def9b70d7916b8710be0d6eee4b4d9dd6cc990784040ddb4bb',
		size: 31977
	}
}

export default tipShaftLicking;