import * as fs from 'fs-extra';
import { Options } from './src/Options';
import { Data } from './src/Data';

function writeFileSync(data: Data, options: Options): void {
	checkIfParametersSet(data, options);
	try {
		let result: string = '';
		const separator: string = options && options.separator ? options.separator : ';';

		if (options.headers) {
			if (typeof data.header === 'string') {
				result = data.header;
			} else {
				if (typeof data.header === 'object' && Object.keys(data.header).length)
					for (const fields of Object.values(data.header)) {
						result += `${fields}${separator}`;
					}
				result += '\n';
			}
		}

		for (const element of data.rawData) {
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

	if (options.headers && !data.header) {
		throw new Error('The headers option has been set to true, but no header has been provided in the data parameter');
	}
};

export {
	writeFileSync,
}