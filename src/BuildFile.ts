import { Data } from './Data';
import { Options } from './Options';

export default abstract class BuildFile {
	data: Data;
	options: Options;

	constructor(data: Data, options: Options) {
		this.data = data;
		this.options = options;
	}

	abstract build(): void;

	abstract algorithm(): string;
}
