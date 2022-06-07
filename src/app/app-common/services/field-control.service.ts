import {Injectable} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {of} from 'rxjs';
import {DropDownInput, Field, TextInput} from '../domain';

@Injectable({providedIn: 'root'})
export class FieldControlService {
	constructor() {
	}


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
					{key: 'solid', value: 'Solid'},
					{key: 'great', value: 'Great'},
					{key: 'good', value: 'Good'},
					{key: 'unproven', value: 'Unproven'},
				],
				validators: [Validators.min(1)],
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


	matchOtherValidator(otherControlName: string) {
		return (control: FormControl) => {
			const otherControl: FormControl = control.root.get(otherControlName) as FormControl;
			if (otherControl) {
				const subscription: any = otherControl.valueChanges.subscribe(() => {
					control.updateValueAndValidity();
					subscription.unsubscribe();
				});
			}
			return otherControl && control.value !== otherControl.value ? {match: true} : null;
		};
	}
}
