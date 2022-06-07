import {Field} from "../field";
import {Validators} from "@angular/forms";

export class IntUnsignedInput extends Field<number> {
	override controlType = 'number';
	override validators = [Validators.min(0)];

	constructor(options: {} = {}) {
		super(options);
	}
}
