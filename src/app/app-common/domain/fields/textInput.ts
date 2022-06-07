import {Field} from "../field";

export class TextInput extends Field<string> {
	override controlType = 'textbox';

	constructor(options: {} = {}) {
		super(options);
	}
}
