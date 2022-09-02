const { writeFileSync } = require('../index');
import { Options } from '../src/Options';

test('Test', () => {
	const fs = require('fs');
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
	const path = `dist/`;
	const filename: string = `TEST_${timestamp}.csv`;
	const options: Options = {
		separator: ';',
		path,
		filename
	};
	const expected = 'Zoldyck;Kirua;Transmutation;\nFreecs;Gon;Enhancer;\nKuruta;Kurapika;Conjurer';

	writeFileSync(data, options);
	const filepath: string = `${path}/${filename}`;
	const file = fs.readFileSync(filepath, { encoding: 'utf-8' });

	expect(file).toMatch(expected)
});


export { }