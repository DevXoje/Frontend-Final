import { HttpErrorResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { FormComponent } from '@shared/app-common/app/views/components';
import { Input } from '@shared/app-common/app/views/components/form/input';
import { Auth, SignUpData, SignUpFormData } from '@shared/auth/domain/auth.model';
import { SignUp } from '@shared/auth/infrastructure/ngxs/auth.actions';
import { AuthState } from '@shared/auth/infrastructure/ngxs/auth.state';
import { AuthService } from '@shared/auth/infrastructure/services';
import { Observable } from 'rxjs';
@Component({
	selector: 'app-form-user',
	templateUrl: './register.component.html',
})
export class RegisterComponent implements OnInit {
	//@Select(AuthState.userDetails) auth$?: Observable<Auth>;

	form = new FormGroup({});
	formControls = {
		submit: { text: 'Create Account', },
		reset: {
			text: 'Reset',
			action: () => alert('Reset'),
		},
	}
	completed: boolean = false;

	inputs: Input[];
	constructor(private router: Router, private store: Store) {
		this.inputs = [
			{
				id: 'user_name',
				label: 'Correo Electronico',
				type: 'email',
				placeholder: 'Email',
				validators: [
					Validators.required,
					Validators.email
				]
			},
			{
				id: 'name',
				label: 'Nombre Completo',
				type: 'text',
				validators: [
					Validators.required,
					//Validators.pattern("^[A-Za-zÀ-ÿ ,.'-]+$")

				]
			},
			{
				id: 'password',
				label: 'Contraseña',
				type: 'password',
				validators: [
					Validators.required,
					//Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
				]
			},
			{
				id: 'confirm_password',
				label: 'Confirmacion Contraseña',
				type: 'password',
				validators: [
					Validators.required,
					//Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
				]
			},

		];
	}
	ngOnInit(): void {


	}
	onSubmit(evento: SignUpFormData) {
		const { name, user_name, password } = evento;
		if (user_name && password) {
			const data: SignUpData = { name, user_name, password };
			this.store.dispatch(new SignUp(data));
		} else {
			console.error('error en datos introducidos');
		}

	}

}
