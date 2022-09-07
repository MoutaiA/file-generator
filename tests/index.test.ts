import * as fs from 'fs-extra';
import { WriteFile } from '../index';
import { Options } from '../src/Options';
import { Data } from '../src/Data';

test('Should create a CSV file', () => {
	const data: Data = {
		rawData: [
			{
				name: 'Zoldyck',
				firstname: 'Kirua',
				nenType: 'Transmutation',
			},
			{
				name: 'Freecs',
				firstname: 'Gon',
				nenType: 'Enhancer',
			},
			{
				name: 'Kuruta',
				firstname: 'Kurapika',
				nenType: 'Conjurer',
			},
		],
	};
	const date = new Date();
	const timestamp = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
	const path = `dist`;
	const filename: string = `TEST_${timestamp}.csv`;
	const options: Options = {
		separator: ';',
		path,
		filename,
		extension: 'csv',
	};
	const expected = 'Zoldyck;Kirua;Transmutation;\nFreecs;Gon;Enhancer;\nKuruta;Kurapika;Conjurer;';

	new WriteFile().csv(data, options);
	const filepath: string = `${path}/${filename}`;
	const file = fs.readFileSync(filepath, { encoding: 'utf-8' });
	console.log('filepath', filepath);
	console.log('file', file);

	expect(file).toMatch(expected);
});

test('Should add a header', () => {
	const data = {
		header: ['name', 'firstname', 'nenType'],
		rawData: [
			{
				name: 'Isaac',
				firstname: 'Netero',
				nenTyle: 'Enhancer',
			},
			{
				name: 'Lucifer',
				firstname: 'Chrollo',
				nenType: 'Specialization',
			},
			{
				name: 'Morow',
				firstname: 'Hisoka',
				nenType: 'Transmuter',
			},
		],
	};
	const date = new Date();
	const timestamp = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`;
	const path = `dist/`;
	const filename: string = `TEST2_${timestamp}.csv`;
	const options: Options = {
		path,
		filename,
		headers: true,
		separator: ',',
		extension: 'csv',
	};
	const expected =
		'name,firstname,nenType,\nIsaac,Netero,Enhancer,\nLucifer,Chrollo,Specialization,\nMorow,Hisoka,Transmuter,';

	new WriteFile().csv(data, options);
	const filepath: string = `${path}/${filename}`;
	const file = fs.readFileSync(filepath, { encoding: 'utf-8' });

	expect(file).toMatch(expected);
});

export {};
