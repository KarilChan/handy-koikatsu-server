import {IInfoPose} from '../../csv/scriptedPoses';
import ELoopType from '../../types/ELoopType';

const glansRubbing: IInfoPose = {
	aliases: [
		'Glans Rubbing', '亀頭いじり',
		'Standing Glans Rubbing', '立ち亀頭いじり',
		'Seated Glans Rubbing', '椅子亀頭いじり',
	],
	states: [
		{
			names: ['WLoop'],
			strokes: [
				{
					time: 0,
					position: 70
				},
				{
					time: 0.5,
					position: 95
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['SLoop'],
			strokes: [
				{
					time: 0,
					position: 75
				},
				{
					time: 0.5,
					position: 100
				}
			],
			type: ELoopType.variable
		},
		{
			names: ['OLoop'],
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
			baseSpeed: 5,
			type: ELoopType.static
		},
		{
			names: ['M_OUT_Start', 'M_OUT_Loop'],
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
			baseSpeed: 2.5,
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
					position: 15
				},
			],
			type: ELoopType.static
		}
	],
	csv: {
		name: 'gr.csv',
		sha256: '66c9e4ff0303a9019990b1313ebd8cfa073fd72993f4e555704fca3381ce17ad',
		size: 22557
	}
}

export default glansRubbing;