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

	const date = new Date();
	const timestamp = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
	const path = `data/OUT_${timestamp}.csv`;
	fs.appendFile(path, result, (err) => {
		if (err) throw err;
		console.log('OK');
	});
}

const data = [
	{
		name: 'Zoldyck',
		firstname: 'Kirua',
		nenType: 'Transmutation'
	},
	{
		name: 'Freecs',
		firstname: 'Gon',
		nenType: 'Enhancer'
	},
	{
		name: 'Kuruta',
		firstname: 'Kurapika',
		nenType: 'Conjurer'
	},
	{
		name: 'Paradinight',
		firstname: 'Leorio',
		nenType: 'Emitter'
	}
];
const options = {
	separator: '|'
};

writeFile(data, options);

module.exports = {
	writeFile
};
