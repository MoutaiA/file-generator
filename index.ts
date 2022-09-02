import * as fs from 'fs-extra';
import { Options } from './src/Options';

function writeFileSync(data: any, options: Options): void {
	if (!data) {
		throw new Error('No data provided');
	}

	let result: string = '';
	const separator = options && options.separator ? options.separator : ';';

	for (const element of data) {
		for (const value of Object.values(element)) {
			result += `${value}${separator}`;
		}
		result += '\n';
	}

	try {
		const { path, filename } = options;
		fs.ensureDirSync(path);
		const filepath: string = `${path}/${filename}`
		fs.appendFileSync(filepath, result);
	} catch (e) {
		console.error(e);
	}
}

export {
	writeFileSync
}