import * as fs from 'fs-extra';
import { Options } from './Options';

function writeFileSync(filecontent: string, options: Options) {
	const { path, filename } = options;
	const filepath: string = `${path}/${filename}`;
	try {
		fs.ensureDirSync(path);
		fs.appendFileSync(filepath, filecontent);
	} catch (e) {
		console.error(e);
	}
}

export { writeFileSync };
