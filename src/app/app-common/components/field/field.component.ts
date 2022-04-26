import { Component, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { Field } from '../../domain/field';
import { NotificationService } from '../../services/notification.service';

@Component({
	selector: 'app-field',
	templateUrl: './field.component.html',
})
export class FieldComponent {
	constructor(private notification: NotificationService) {}

	@Input() field!: Field<string>;
	@Input() form!: FormGroup;

	checkIsInvalid(event: FocusEvent) {
		const control = event.target as HTMLInputElement;
		const isInvalid =
			control.classList.contains('ng-invalid') &&
			control.classList.contains('ng-dirty') &&
			control.classList.contains('ng-touched');
		if (isInvalid) {
			this.showError();
		}
	}
	showError() {
		const errors = this.form.controls[this.field.key]
			.errors as ValidationErrors;
		const error_name = Object.keys(errors)[0];
		const field_name = this.field.key;
		this.notification.showError(error_name, field_name);
	}
}
