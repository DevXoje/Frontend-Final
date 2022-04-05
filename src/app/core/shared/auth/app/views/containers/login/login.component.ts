import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@shared/auth/infrastructure/services';
import { Input } from '@shared/app-common/app/views/components/form/input';
import { Auth, AuthStateModel, LoginData } from '@shared/auth/domain/auth.model';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { Login } from '@shared/auth/infrastructure/ngxs/auth.actions';
import { Store } from '@ngxs/store';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
	inputs: Input[] = [];
	form = new FormGroup({});
	formControls = {
		submit: { text: 'Login', },
		reset: {
			text: 'Forgot password?',
			action: () => { this.router.navigate(['forgot-password']) }
		},
	}

	user: LoginData = {
		user_name: '',
		password: '',
		remember: false
	};
	constructor(private store: Store, private router: Router) {
		this.inputs = [
			{
				id: 'user_name',
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
	ngOnInit(): void { }

	get email() { return this.form.get('email'); }

	get password() { return this.form.get('password'); }

	onSubmit(event: LoginData) {

		if (event.user_name && event.password) {
			this.user = event;
			this.store
				.dispatch(new Login({ user_name: this.user.user_name, password: this.user.password }))
				.subscribe(
					success => {
						//this.saveOnLocalStorage(success.auth.selectedUser);
						this.router.navigate(['/tienda']);
					}, error => {
						console.error(error);
					});
		} else {
			console.error('error en datos introducidos');
		}





		this.form.reset();

	}

	saveOnLocalStorage(event: LoginData) {
		localStorage.clear();
		console.log(event);

		localStorage.setItem('auth.email', event.user_name as string);
		localStorage.setItem('auth.remenber', "true");
		//localStorage.setItem('remember', (event.remember as boolean).toString());

	}




}
