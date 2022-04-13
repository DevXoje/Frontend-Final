import { Field } from "./field";

export class DropDownInput extends Field<string> {
	override controlType = 'dropdown';

	constructor(options: {} = {}) {
		super(options);
	}
}