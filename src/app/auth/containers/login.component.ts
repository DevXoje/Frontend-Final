import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {Field} from 'src/app/app-common/domain/field';
import {FieldControlService} from 'src/app/app-common/services/field-control.service';
import {NotificationService} from 'src/app/app-common/services/notification.service';
import {LoginData} from '../domain/auth.model';
import {Login} from '../state/auth.actions';
import {faFacebook, faGoogle} from "@fortawesome/free-brands-svg-icons";
import {AuthService} from "../services/auth.service";
import {PasswordInput, TextInput} from "../../app-common/domain";
import {Validators} from "@angular/forms";

@Component({
	selector: 'app-login',
	template: `
		<app-auth-layout>
			<div topHeader>
				<h3 class="text-muted mb-2">Continue with</h3>
				<div class="d-flex align-items-center">
					<a class="box me-2 selectio" *ngFor="let icon of iconsLogin">
						<fa-icon [icon]="icon" class="mb-2"></fa-icon>
						<p class="mb-0">Facebook</p>
					</a>
					<!--<a href="#" class="box">
					\t\t\t\t\t\t\t<span class="far fa-envelope mb-2"></span>
					\t\t\t\t\t\t\t<p class="mb-0">Email</p>
					\t\t\t\t\t\t</a>-->
				</div>
			</div>
			<app-form content
			          [fields]="fields$ | async"
			          (sendPayload)="loginHandler($event)"></app-form>
			<a routerLink="/auth/register">¡ Necesito una cuenta !</a>
		</app-auth-layout>

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
	fields$?: Observable<Field<any>[]>;
	iconsLogin = [
		faFacebook,
		faGoogle,
	];
	facebookIcon = faFacebook;

	googleIcon = faGoogle;

	constructor(
		fieldService: FieldControlService,
		private store: Store,
		private notification: NotificationService,
		private router: Router,
		private authService: AuthService,
	) {
		this.fields$ = of([
			new TextInput({
				key: 'email',
				label: 'Email',
				type: 'email',
				validators: [Validators.required, Validators.email],
				order: 1,
			}),
			new PasswordInput({
				key: 'password',
				label: 'Password',
				type: 'password',
				autocomplete: 'current-password',
				validators: [Validators.required, Validators.minLength(6)],
				order: 2,
			}),
		]);
	}

	loginHandler(event: LoginData) {
		this.store
			.dispatch(new Login(event)) // O SET CUSTOMER DATA
			.subscribe((store_data) => {
				const selectedUser = store_data.auth.selectedUser;
				const route = this.authService.getRouteByRole(selectedUser.role);
				this.router.navigateByUrl(route);
				this.notification.showSuccess(
					'Bienvenido ' + selectedUser.name,
					'Login'
				);
			});

	}
}
