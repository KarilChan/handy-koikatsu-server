import dotenv from 'dotenv';
import readline from 'readline';

interface IEnvs {
	handyKey: string,
	serverPort: number,
}

export const getEnvs = async (): Promise<IEnvs> => new Promise(resolve => {
	if (
		dotenv.config().error
		|| !process.env.HANDY_KEY
		|| !process.env.SERVER_PORT
	) {
		const rl = readline.createInterface({
			input: process.stdin,
			output: process.stdout
		});
		rl.question('.env file not found, enter your Handy key here instead: ', handyKey => {
			return resolve({
				handyKey,
				serverPort: 42069
			});
		})
	} else {
		return resolve({
			handyKey: process.env.HANDY_KEY,
			serverPort: Number(process.env.SERVER_PORT),
		});
	}
})