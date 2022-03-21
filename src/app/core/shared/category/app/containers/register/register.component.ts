import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Input } from '@shared/app-common/app/components/form/input';
import { SignUpData } from '@shared/app-common/app/components/form/sign-up-data';
import { Auth } from '@shared/auth/domain/auth.model';
import { AuthService } from '@shared/auth/infrastructure/services';

@Component({
	selector: 'app-form-user',
	templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
	user: SignUpData = {
		name: '',
		email: '',
		password: '',
		passwordConfirmation: '',
	};
	form = new FormGroup({});
	completed: boolean = false;

	inputs: any/* : Input[] */;
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
	constructor(private authService: AuthService) {
		this.inputs = {
			email: {
				id: 'inputEmailAddress',
				name: 'Correo Electronico',
				type: 'email',
				placeholder: 'Email',
				validators: [
					Validators.required,
					Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
				]
			},
			name: {
				id: 'inputName',
				name: 'Nombre Completo',
				type: 'text',
				validators: [
					Validators.required,
					Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
				]
			},
			password: {
				id: 'inputPassword',
				name: 'Contraseña',
				type: 'password',
				validators: [
					Validators.required,
					Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
				]
			},
			confirmPassword: {
				id: 'inputCorfirmPassword',
				name: 'Confirmacion Contraseña',
				type: 'password',
				validators: [
					Validators.required,
					Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
				]
			},

		};
	}
	ngOnInit(): void {
		this.form = new FormGroup({
			name: new FormControl(this.user.name, [
				Validators.required,
				Validators.minLength(4),
				//forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
			]),
			email: new FormControl(this.user.email, [
				Validators.required,
				Validators.minLength(4),
				//forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
			]),
			password: new FormControl(this.user.password),
			passwordConfirmation: new FormControl(this.user.passwordConfirmation, Validators.required)
		})

	}
	onSubmit(evento: any) {

		console.log(evento.submitter);
		const val = this.form.value;
		console.info(this.form.value);

		if (val.email && val.password) {
			this.user = this.form.value;
			//this.authService.login(this.user);
		} else {
			console.error('error en datos introducidos');

		}
		/* this.authService.createUser(this.newCustomer).subscribe(
			(data: Auth) => console.log(`User created: ${data}`),
			(error: HttpErrorResponse) => {
				console.error(`Error Registrando usuario: ${error.message}`)
			}
		); */
		evento.preventDefault();
	}

}
