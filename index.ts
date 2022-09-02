import * as fs from 'fs-extra';
import { Options } from './src/Options';

function writeFileSync(data: any, options: Options): void {
	checkIfParametersSet(data, options);
	try {
		let result: string = '';
		const separator: string = options && options.separator ? options.separator : ';';

		for (const element of data) {
			for (const value of Object.values(element)) {
				result += `${value}${separator}`;
			}
			result += '\n';
		}

		const { path, filename } = options;
		const filepath: string = `${path}/${filename}`
		fs.ensureDirSync(path);
		fs.appendFileSync(filepath, result);
	} catch (e) {
		console.error(e);
	}
}

const checkIfParametersSet = (data: any, options: Options): void => {
	if (!data) {
		throw new Error('No data provided');
	}

	if (!options || !Object.keys(options).length) {
		throw new Error('No options provided');
	}
};

export {
	writeFileSync,
}