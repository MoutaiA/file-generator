const fs = require('fs');

function writeFile(data, options) {
	if (!data) {
		throw new Error('No data provided');
	}

	let result = '';
	const separator = options && options.separator ? options.separator : ';';

	for (const element of data) {
		for (const value of Object.values(element)) {
			result += `${value}${separator}`;
		}
		result += '\n';
	}

	try {
		fs.appendFileSync(options.path, result);
	} catch (e) {
		console.error(e);
	}
}

module.exports = {
	writeFile
};
