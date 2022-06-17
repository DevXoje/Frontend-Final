import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {FieldControlService} from 'src/app/app-common/services/field-control.service';
import {NotificationService} from 'src/app/app-common/services/notification.service';
import {LoginData} from '../domain/auth.model';
import {Login} from '../state';
import {AuthService} from "../services/auth.service";

@Component({
	selector: 'app-login',
	template: `
		<app-form-user content [title]="'Login'" (sendPayload)="loginHandler($event)"
					   [only]="['email','password']"></app-form-user>
		<!--		<a routerLink="/auth/register">¡ Necesito una cuenta !</a>-->
		<a [routerLink]="['../register']">¡ Necesito una cuenta !</a>


	`, styles: [`
		.box {
			width: 100px;
			height: 100px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			border: 2px solid transparent;
			text-decoration: none;
			color: #615f5fdd;

			&:hover, &:active,
			&:visited {
				border: 2px solid #ee82ee;

			}
		}
	`]
})
export class LoginComponent {

	constructor(
		fieldService: FieldControlService,
		private store: Store,
		private notification: NotificationService,
		private router: Router,
		private authService: AuthService,
	) {
	}

	loginHandler(event: LoginData) {
		this.store
			.dispatch(new Login(event)) // O SET CUSTOMER DATA
			.subscribe((store_data) => {
				const selectedUser = store_data.auth.selectedUser;
				const route = this.authService.getRouteByRole(selectedUser.role);
				this.router.navigate(route).then(
					(e) => console.log('navigate to: ', route, e),
					(error) => console.log('error: ', error)
				);
				this.notification.showSuccess(
					'Bienvenido ' + selectedUser.name,
					'Login'
				);
			});

	}
}
