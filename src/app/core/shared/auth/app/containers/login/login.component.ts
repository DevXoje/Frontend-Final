import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@shared/auth/infrastructure/services';
import { Input } from '@shared/app-common/app/components/form/input';
import { LoginData } from '@shared/app-common/app/components/form/login-data';

@Component({
	selector: 'app-login',
	template: `

	<app-layout-auth>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-5">
                <div class="card shadow-lg border-0 rounded-lg mt-5">
                    <div class="card-header">
                        <h3 class="text-center font-weight-light my-4">Login</h3>
                    </div>
                    <div class="card-body">
                        <form>
                            <div class="form-group"><label class="small mb-1"
                                    for="inputEmailAddress">Email</label><input class="form-control py-4"
                                    id="inputEmailAddress" type="email" placeholder="Enter email address" /></div>
                            <div class="form-group"><label class="small mb-1" for="inputPassword">Password</label><input
                                    class="form-control py-4" id="inputPassword" type="password"
                                    placeholder="Enter password" /></div>
                            <div class="form-group">
                                <div class="custom-control custom-checkbox"><input class="custom-control-input"
                                        id="rememberPasswordCheck" type="checkbox" /><label class="custom-control-label"
                                        for="rememberPasswordCheck">Remember password</label></div>
                            </div>
                            <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0"><a
                                    class="small" routerLink="/auth/forgot-password">Forgot Password?</a><a
                                    class="btn btn-primary" routerLink="/dashboard">Login</a></div>
                        </form>
                    </div>
                    <div class="card-footer text-center">
                        <div class="small"><a routerLink="/auth/register">Need an account? Sign up!</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</app-layout-auth>

	<!-- <div class="row justify-content-center ">
		<div class="col-md-4  col-md-offset-3">
			<form>
				<app-form [inputs]="inputs" (validSubmit)="onSubmit($event)"></app-form>
			</form>
		</div>
	</div> -->`,
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
