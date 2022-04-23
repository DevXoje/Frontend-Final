import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../domain/field';

@Component({
	selector: 'app-field',
	templateUrl: './field.component.html',
})
export class FieldComponent implements OnInit{
	constructor() {}

	ngOnInit(): void {}
	@Input() field!: Field<string>;
	@Input() form!: FormGroup;
	get isInvalid() {
		const control= this.form.controls[this.field.key];
		return control.touched && control.invalid;
	}
	get getErrors() {
		return this.form.controls[this.field.key].errors;
	}

}
