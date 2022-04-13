export class TableElement<T> {
	value: T | undefined;

	constructor(options: {
		value?: T;
	} = {}) {
		this.value = options.value;
	}
}