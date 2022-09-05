export interface Options {
	path: string;
	filename: string;
	extension: string;
	separator?: string;
	headers?: boolean;
}

export class CsvOptions implements Options {
	path: string;
	filename: string;
	extension: string;
	separator?: string | undefined;
	headers?: boolean | undefined;

	constructor(path: string, filename: string, separator: string = ';', headers: boolean = false) {
		this.path = path;
		this.filename = filename;
		this.separator = separator;
		this.headers = headers;
		this.extension = 'csv';
	}
}

export {}