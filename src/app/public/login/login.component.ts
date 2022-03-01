import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Input } from 'src/app/interfaces/input';

@Component({
	selector: 'app-login',
	template: `
	<h2>Login</h2>
	<div class="row justify-content-center ">
		<div class="col-md-4  col-md-offset-3">
			<form (validSubmit)="onSubmit()">
				<app-form [inputs]="inputs"></app-form>
			</form>
		</div>
	</div>`,
})
export class LoginComponent {


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
		}
	]
	constructor() { }

	onSubmit() {
		console.log('this.formGroup');
	}

}
