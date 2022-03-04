import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/infrastructure/auth.service';
import { Input } from 'src/app/core/shared/form/input';
import { LoginData } from 'src/app/core/shared/form/login-data';

@Component({
	selector: 'app-login',
	template: `
	<h2>Login</h2>
	<pre>{{data.user | json}}</pre>
	<div class="row justify-content-center ">
		<div class="col-md-4  col-md-offset-3">
			<form>
				<app-form [inputs]="inputs" (validSubmit)="onSubmit($event)"></app-form>
			</form>
		</div>
	</div>`,
})
export class LoginComponent {

	inputs: Input[] = [];
	data = {
		user: {},
		form: {
			Email: '',
			Password: ''
		}
	}
	constructor(private authService: AuthService) {
		this.inputs = [
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
	}

	onSubmit(data: LoginData) {
		this.authService.login(data);
		console.log(data);
	}

}
