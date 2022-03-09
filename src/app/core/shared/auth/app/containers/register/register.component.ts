import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { Input } from '@shared/app-common/app/components/form/input';
import { Auth } from '@shared/auth/domain/auth.model';
import { AuthService } from '@shared/auth/infrastructure/services';

@Component({
	selector: 'app-form-user',
	templateUrl: './register.component.html',
})
export class RegisterComponent {
	newCustomer: Auth = {
		name: '',
		email: '',
		password: '',
	};
	@ViewChild('form') myFormVariable!: ElementRef;
	completed: boolean = false;

	controles = {
		correo: {
			id: 'inputEmailAddress',
			name: 'Correo Electronico',
			type: 'email',
			placeholder: 'Email',
			validators: [
				Validators.required,
				Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
			]
		},
		nombre: {
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
	constructor(private authService: AuthService) { }
	onSubmit(evento: any) {

		console.log(evento.submitter);

		this.authService.createUser(this.newCustomer).subscribe(
			(data: Auth) => console.log(`User created: ${data}`),
			(error: HttpErrorResponse) => {
				console.error(`Error: ${error.message}`)
			}
		);
		evento.preventDefault();
	}

}
