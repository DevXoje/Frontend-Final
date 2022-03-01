import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Input } from 'src/app/interfaces/input';

@Component({
	selector: 'app-form-auth',
	template: `

<h2>Creacion de Cliente</h2>
<div class="row">
	<div class="col-md-6 col-md-offset-3">
		<form (validSubmit)="onSubmit()">
			<app-form [inputs]="inputs"></app-form>
		</form>
	</div>
</div>

	`,
})
export class FormAuthComponent {
	inputs: Input[] = [
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


	]
	constructor() { }
	onSubmit() {
		console.log('this.formGroup');
	}

}
