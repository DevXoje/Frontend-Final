import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { Field, PasswordInput, TextInput, DropDownInput } from '../domain';

@Injectable({ providedIn: 'root' })
export class FieldControlService {
	constructor() {}

	toFormGroup(fields: Field<string>[]) {
		const group: any = {};

		fields.forEach((field) => {
			/* group[field.key] = field.required ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || ''); */
			group[field.key] = new FormControl(
				field.value || '',
				field.validators
			);
		});
		return new FormGroup(group);
	}
	// TODO: get from a remote source of field metadata
	getFields() {
		const fields: Field<string>[] = [
			new DropDownInput({
				key: 'brave',
				label: 'Bravery Rating',
				options: [
					{ key: 'solid', value: 'Solid' },
					{ key: 'great', value: 'Great' },
					{ key: 'good', value: 'Good' },
					{ key: 'unproven', value: 'Unproven' },
				],
				order: 3,
			}),

			new TextInput({
				key: 'firstName',
				label: 'First name',
				value: 'Bombasto',
				required: true,
				order: 1,
			}),

			new TextInput({
				key: 'emailAddress',
				label: 'Email',
				type: 'email',
				order: 2,
			}),
		];

		return of(fields.sort((a, b) => a.order - b.order));
	}
	getLoginFields() {
		const fields: Field<string>[] = [
			new TextInput({
				key: 'email',
				label: 'Email',
				type: 'email',
				validators: [Validators.required, Validators.email],
				order: 1,
			}),
			new PasswordInput({
				key: 'password',
				label: 'Password',
				type: 'password',
				validators: [Validators.required, Validators.minLength(6)],
				order: 2,
			}),
		];

		return of(fields.sort((a, b) => a.order - b.order));
	}
	getRegisterFields() {
		const fields: Field<string>[] = [
			new TextInput({
				key: 'name',
				label: 'nombre',
				type: 'text',
				validators: [Validators.required],
				order: 1,
			}),
			new TextInput({
				key: 'email',
				label: 'Email',
				type: 'email',
				validators: [Validators.required],
				order: 2,
			}),
			new PasswordInput({
				key: 'password',
				label: 'Password',
				type: 'password',
				order: 3,
			}),
		];

		return of(fields.sort((a, b) => a.order - b.order));
	}
}
