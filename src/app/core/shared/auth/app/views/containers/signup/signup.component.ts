import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@shared/auth/infrastructure/services';
import { Input } from '@shared/app-common/app/views/components/form/input';
import { SignUpData } from '@shared/auth/domain/auth.model';


@Component({
	selector: 'app-signup',
	template: `
	<h2>Sign Up</h2>
	<pre>{{data.user | json}}</pre>
	<div class="row justify-content-center ">
		<div class="col-md-4  col-md-offset-3">
			<form>
				<app-form [inputs]="inputs" (validSubmit)="onSubmit($event)"></app-form>
			</form>
		</div>
	</div>`,
})
export class SignUpComponent implements OnInit {

	inputs: Input[] = [
		{
			id: 'name',
			name: 'Name',
			type: 'text',
			validators: [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(20)
			]
		},
		{
			id: 'email',
			name: 'Email',
			type: 'email',
			validators: [
				Validators.required,
				Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
			]
		},
		{
			id: 'password',
			name: 'Password',
			type: 'password',
			validators: [
				Validators.required,
				Validators.minLength(8),
				Validators.maxLength(20)
			]
		}
	]
	data = {
		user: {},
		form: {
			Email: '',
			Password: ''
		}
	}
	constructor(private authService: AuthService) { }

	ngOnInit(): void {
		//throw new Error('Method not implemented.');
	}

	onSubmit(data: SignUpData) {
		this.authService.signUp(data).subscribe(
			(response) => console.log(response),
			(error) => console.error(error)
		)

	}

}
