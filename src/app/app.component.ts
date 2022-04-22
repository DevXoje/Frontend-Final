import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth, RestoreData } from './auth/domain/auth.model';
import { AuthService } from './auth/services/auth.service';
import { Login, Logout, Restore } from './auth/state/auth.actions';
import { AuthState } from './auth/state/auth.state';

@Component({
	selector: 'app-root',
	template: `
		<button (click)="logoutHandler()">Logout</button>
		<app-loader></app-loader>
		<router-outlet></router-outlet>
	`,
})
export class AppComponent implements OnInit {
	constructor(
		private store: Store,
		public authService: AuthService,
		private router: Router
	) {}

	ngOnInit() {
		//this.checkLastConnection();
	}
	logoutHandler() {
		this.store.dispatch(new Logout(0)).subscribe(() => {
			this.router.navigate(['/login']);
		});
	}
	checkLastConnection() {
		const jwtToken = this.authService.getStoredToken();

		if (jwtToken) {
			const restoreData: RestoreData = {
				id: jwtToken.user.id,
				token: jwtToken.access_token,
			};
			this.store.dispatch(new Restore(restoreData));
		}
	}
}
