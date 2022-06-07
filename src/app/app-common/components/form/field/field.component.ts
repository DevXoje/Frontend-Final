import {Component, Input} from '@angular/core';
import {FormGroup, ValidationErrors} from '@angular/forms';
import {Field} from '../../../domain';
import {NotificationService} from '../../../services/notification.service';
import {HttpHeaders} from "@angular/common/http";

@Component({
	selector: 'app-field',
	templateUrl: './field.component.html',

})
export class FieldComponent {
	@Input() field!: Field<string>;
	@Input() form!: FormGroup;
	/* Variabe to store file data */
	filedata: any;

	constructor(private notification: NotificationService) {
	}

	/* File onchange event */
	fileEvent(e: any) {
		this.filedata = e.target.files[0];

		var myFormData = new FormData();
		const headers = new HttpHeaders();
		headers.append('Content-Type', 'multipart/form-data');
		headers.append('Accept', 'application/json');
		myFormData.append('image', this.filedata);

	}

	checkIsInvalid(event: FocusEvent) {
		const control = event.target as HTMLInputElement;
		const isInvalid =
			control.classList.contains('ng-invalid') //&&
		//control.classList.contains('ng-dirty') &&
		//control.classList.contains('ng-touched');
		if (isInvalid) {
			control.classList.remove('is-valid');
			control.classList.add('is-invalid');
			this.showError();
		} else {
			control.classList.remove('is-invalid');
			control.classList.add('is-valid');
		}
	}

	showError() {
		const errors = this.form.controls[this.field.key]
			.errors as ValidationErrors;
		console.log(errors);
		const error_name = Object.keys(errors)[0];
		const errorsMessages: { [x: string]: string } = {
			required: 'This field is required',
			minlength: 'This field must be at least 3 characters long',
			maxlength: 'This field must be at most 20 characters long',
			pattern: 'This field must be a valid email address',
			default: 'This field is invalid',
		};
		const message = errorsMessages[error_name] || errorsMessages['default'];

		const field_name = this.field.key;
		this.notification.showError(message, "Error in the field " + field_name);
	}
}
