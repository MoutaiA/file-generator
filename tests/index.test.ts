const fs = require('fs');
const { writeFile } = require('../index');

test('Test', () => {
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
		}
	];
	const date = new Date();
	const timestamp = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
	const path = `data/TEST_${timestamp}.csv`;
	const options = {
		separator: ';',
		path
	};
	const expected = 'Zoldyck;Kirua;Transmutation;\nFreecs;Gon;Enhancer;\nKuruta;Kurapika;Conjurer';

	writeFile(data, options);
	const file = fs.readFileSync(path, { encoding: 'utf-8' });

	expect(file).toMatch(expected)
});