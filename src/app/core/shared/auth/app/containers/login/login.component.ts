import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
	store: Store;
	constructor(private authService: AuthService) {
		this.store = AppComponent.store;
		this.inputs = [
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
	}
	ngOnInit(): void {
		this.form = new FormGroup({
			email: new FormControl(this.user.username, [
				Validators.required,
				Validators.minLength(4),
				//forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
			]),
			password: new FormControl(this.user.password),
			remember: new FormControl(this.user.remember, Validators.required)
		}, {
			updateOn: 'blur',
			validators: [
				Validators.required,
			],
			asyncValidators: [],

		});

	}

	get email() { return this.form.get('email'); }

	get password() { return this.form.get('password'); }

	onSubmit(event: Event) {

		const val = this.form.value;
		console.info(this.form.value);

		if (val.email && val.password) {
			this.user = this.form.value;
			this.authService.login(this.user);
			this.store
				.dispatch(new Login({ email: 'some@email.com', password: 'password' }))
				.subscribe(success => {
					console.log(success);
				}, error => {
					console.log(error);
				});
		} else {
			console.error('error en datos introducidos');

		}

	}


}
