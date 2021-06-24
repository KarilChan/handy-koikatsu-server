'use strict';
import {getEnvs} from './getEnvs';
import Server from './Server';
import {checkForUpdates} from './checkForUpdates';
import {getHandyFw} from './getHandyFw';
import {EHandyApiVer} from './types/EHandyApiVer';

try {
	void (async () => {
		await checkForUpdates();
		const envs = await getEnvs();
		const fwVer = await getHandyFw(envs.handyKey);
		// API V2 requires FW3+
		const server = new Server(envs.handyKey, parseFloat(fwVer) >= 3 ? EHandyApiVer.V2 : EHandyApiVer.V1);
		server.start(envs.serverPort);
	})();
} catch (e) {
	console.error(e);
	console.log('Press any key to exit');
	process.stdin.setRawMode(true);
	process.stdin.on('data', () => process.exit(1));
}