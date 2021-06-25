import {json2csv} from 'json-2-csv';
import fs from 'fs';
import HandyCsv, {
	CSV_RESOLUTION,
	CSV_TIME_PER_LOOP,
	KK_LOOP_BASE_LENGTH,
	KK_SPEED_MIN
} from './csv/HandyCsv';
import ELoopType from './types/ELoopType';
import combinedPoses from './csv/combinedPoses';

interface ICsvStroke {
	time: number,
	position: number
}

for (const pose of combinedPoses) {
	const strokes: ICsvStroke[] = [];
	const states = pose.states;
	// Handy ignores the first line of csv, use it to store metadata
	const firstLine = `# ${pose.aliases[0]} / Resolution: ${CSV_RESOLUTION} / Interval length: ${CSV_TIME_PER_LOOP}ms \n`;

	states.forEach((state, index) => {
		const baseTime = HandyCsv.getStateStartTimeByIndex(pose, index);
		switch (state.type) {
			case ELoopType.variable: {
				for (let i = 1; i <= CSV_RESOLUTION; i++) {
					const multi = KK_SPEED_MIN + ((state.maxMulti || 2.5) - KK_SPEED_MIN) / (CSV_RESOLUTION - 1) * (i - 1);
					const length = KK_LOOP_BASE_LENGTH / multi / (state.baseSpeed ?? 1);
					for (let time = (i - 1) * CSV_TIME_PER_LOOP; time < i * CSV_TIME_PER_LOOP - length; time += length) {
						let lastTime = -1;
						for (const stroke of state.strokes) {
							if (stroke.time >= 1 || stroke.time <= lastTime) {
								throw new Error('Stroke.time is less than previous stroke');
							}
							lastTime = stroke.time;
							strokes.push({
								time: Math.round(time + baseTime + length * stroke.time),
								position: stroke.position
							});
						}
					}
				}
				break;
			}
			case ELoopType.static: {
				const length = KK_LOOP_BASE_LENGTH / (state.baseSpeed ?? 1);
				for (let time = 0; (time + length) < CSV_TIME_PER_LOOP; time += length) {
					for (const stroke of state.strokes) {
						strokes.push({
							time: Math.round(time + baseTime + length * stroke.time),
							position: stroke.position
						});
					}
				}
				break;
			}
			case ELoopType.single: {
				for (const stroke of state.strokes) {
					const length = KK_LOOP_BASE_LENGTH / (state.baseSpeed ?? 1);
					strokes.push({
						time: Math.round(baseTime + length * stroke.time),
						position: stroke.position
					});
				}
				break;
			}
		}

	})

	json2csv(strokes, (err, csv) => {
		if (!csv) {
			console.error('CSV Error', err?.message);
		} else {
			fs.writeFileSync(`scripts/${pose.csv.name}`, firstLine + csv);
		}
	}, {
		prependHeader: false
	})
}