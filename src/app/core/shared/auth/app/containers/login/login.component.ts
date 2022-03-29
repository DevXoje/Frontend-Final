import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@shared/auth/infrastructure/services';
import { Input } from '@shared/app-common/app/components/form/input';
import { LoginData } from '@shared/app-common/app/components/form/login-data';
import { Auth } from '@shared/auth/domain/auth.model';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Login } from '@shared/auth/infrastructure/ngxs/auth.actions';
import { Store } from '@ngxs/store';
import { AppComponent } from 'src/app/app.component';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
	inputs: Input[] = [];
	form = new FormGroup({});
	user: LoginData = {
		username: '',
		password: '',
		remember: false
	};
	errors: any[] = [];
	constructor(private store: Store, private fb: FormBuilder) {
		this.inputs = [
			{
				id: 'username',
				label: 'Email',
				type: 'email',
				autocomplete: 'username',
				placeholder: 'Enter email address',
				validators: [
					Validators.required,
					Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
				]
			},
			{
				id: 'password',
				label: 'Password',
				type: 'password',
				placeholder: 'Enter password',
				autocomplete: 'current-password',
				validators: [
					Validators.required,
					Validators.minLength(8),
					Validators.maxLength(20)
				]
			},
			{
				id: 'remember',
				label: 'Remember password',
				type: 'checkbox',
				validators: [
					
				]
			}
		]

	}
	ngOnInit(): void {
	
		
		this.form = this.fb.group({
			username: ['', this.inputs.find(input => input.id == "username")?.validators],
			password: ['', this.inputs.find(input => input.id == "password")?.validators],
			remember: ['', this.inputs.find(input => input.id == "remember")?.validators]
		});


	}

	get email() { return this.form.get('email'); }

	get password() { return this.form.get('password'); }

	onSubmit(event: Event) {
		if (this.form.valid) {
			console.log("Todos los datos son válidos");
		} else {
			console.log("Hay datos inválidos en el formulario");
		}
		const val = this.form.value as LoginData;

		if (val.username && val.password) {
			console.warn('Your login has been submitted', this.form.value);

			this.user = this.form.value;
			console.log(this.user);

			//this.authService.login(this.user);
			this.store
				.dispatch(new Login({ email: 'some@email.com', password: 'password' }))
				.subscribe(success => {
					console.log(`Stored succes `, success);
				}, error => {
					console.error(error);
				});
		} else {
			console.error('error en datos introducidos');

		}





		this.form.reset();

	}

	setErrors(arg: any) {
		
		if (arg) {
			this.errors = Object.keys(arg);

		} else {
			this.errors = [];
		}

	}


}
