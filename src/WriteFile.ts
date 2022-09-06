import * as fs from 'fs-extra';
import { Data } from './Data';
import { Options, CsvOptions } from './Options';

export default class WriteFile {
	csv(data: Data, options: CsvOptions): void {
		let { separator, headers } = options;
		let filecontent: string = '';

		if (headers) {
			if (typeof data.header === 'string') {
				filecontent = data.header;
			} else {
				if (typeof data.header === 'object' && Object.keys(data.header).length)
					for (const fields of Object.values(data.header)) {
						filecontent += `${fields}${separator}`;
					}
				filecontent += '\n';
			}
		}

		//TODO: Add the creation of the file + using the algorithm() function
		for (const element of data.rawData) {
			for (const value of Object.values(element)) {
				filecontent += `${value}${separator}`;
			}
			filecontent += '\n';
		}
		this.writeFileSync(filecontent, options);
	}

	// Define what is should return
	algorithm(rows: Array<Object | any>) {
		//TODO: Implement it
	}

	writeFileSync(filecontent: string, options: Options): void {
		const { path, filename } = options;
		const filepath: string = `${path}/${filename}`;
		try {
			fs.ensureDirSync(path);
			fs.appendFileSync(filepath, filecontent);
		} catch (e) {
			console.error(e);
		}
	}
}
