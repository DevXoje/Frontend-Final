import { Field } from "./field";

export class PasswordInput extends Field<string> {
	override controlType = 'password';

	constructor(options: {} = {}) {
		super(options);
	}
}