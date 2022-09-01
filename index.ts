import fs, { WriteFileOptions } from 'fs';

function writeFile(data: any, options: any) {
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
		const filepath: string = `${path}/${filename}`
		fs.appendFileSync(filepath, result);
	} catch (e) {
		console.error(e);
	}
}

export {
	writeFile
}