import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Field } from 'src/app/app-common/domain/field';
import { FieldControlService } from 'src/app/app-common/services/field-control.service';
import { LoginData, LoginResponse } from '../domain/auth.model';
import { AuthService } from '../services/auth.service';
import { Login } from '../state/auth.actions';

@Component({
	selector: 'app-login',
	template: ` <div>
		<h2>Identificate</h2>
		<app-form
			[fields]="fields$ | async"
			(sendPayload)="loginHandler($event)"
		></app-form>
		<a routerLink="/register">¡ Necesito una cuenta !</a>
	</div>`,
})
export class LoginComponent implements OnInit {
	fields$?: Observable<Field<any>[]>;

	constructor(
		fieldService: FieldControlService,
		private store: Store,
		private authService: AuthService,
		private router: Router
	) {
		this.fields$ = fieldService.getLoginFields();
	}

	ngOnInit(): void {}
	loginHandler(event: LoginData) {
		this.store
			.dispatch(new Login(event)) // O SET CUSTOMER DATA
			.subscribe((response) => {
				let route = '/';
				const role = response.auth.selectedUser.role;

				if (role === 'admin') {
					route = '/dashboard';
				} else if (role === 'customer') {
					route = '/shop';
					// O SET CUSTOMER DATA
				} else {
					route = '/';
				}

				this.router.navigate([route]);
			});
		//this.authService.mockAuth('customer'); //MOCK
		//const savedToken = this.authService.checkToken();
		//this.authService.checkRole(savedToken);
	}
}
