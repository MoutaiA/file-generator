import BuildFile from './BuildFile';
import { Data } from './Data';
import { CsvOptions } from './Options';
import { writeFileSync  } from './WriteFile';

export default class BuildCSV extends BuildFile {
	constructor(data: Data, options: CsvOptions) {
		super(data, options);
	}

	build(): void {
		let { separator, headers } = this.options;
		let filecontent: string = '';

		if (headers) {
			if (typeof this.data.header === 'string') {
				filecontent = this.data.header;
			} else {
				if (
					typeof this.data.header === 'object' &&
					Object.keys(this.data.header).length
				)
					for (const fields of Object.values(this.data.header)) {
						filecontent += `${fields}${separator}`;
					}
				filecontent += '\n';
			}
		}

		for (const element of this.data.rawData) {
			for (const value of Object.values(element)) {
				filecontent += `${value}${separator}`;
			}
			filecontent += '\n'
		}

		writeFileSync(filecontent, this.options);
	}

	algorithm(): string {
		let result = '';
		//TODO: add the algorithm
		return result;
	}
}
