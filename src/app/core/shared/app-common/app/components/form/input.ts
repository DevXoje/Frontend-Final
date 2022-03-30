import { ValidatorFn } from "@angular/forms";

export type Input = {
	//[key: string]: {
	id: string,
	name?: string;
	placeholder?: string,
	label?: string,
	type: string;
	validators: ValidatorFn[];
	autocomplete?: "username" | "current-password";
	//}
}
/* inputs: Input[] = [
		{
			name: 'Email',
			tipo: 'email',
			validators: [
				Validators.required,
				Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
			]
		},
		{
			name: 'Password',
			tipo: 'password',
			validators: [
				Validators.required,
				Validators.minLength(8),
				Validators.maxLength(20)
			]
		},
		{
			name: 'Phone',
			tipo: 'tel',
			validators: [
				Validators.required,
				Validators.pattern(/^[0-9]{10}$/)
			]
		},
		{
			name: 'Name',
			tipo: 'text',
			validators: [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(20)
			]
		},
		{
			name: 'Description',
			tipo: 'textarea',
			validators: [

			]
		},
		{
			name: 'Price',
			tipo: 'number',
			validators: [
				Validators.required,
				Validators.pattern(/^[0-9]{10}$/)

			]
		},
		{
			name: 'File',
			tipo: 'file',
			validators: [
				Validators.required,
			]
		},


	] */

