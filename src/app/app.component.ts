import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Auth } from './auth/domain/auth.model';
import { TokenService } from './auth/services/token.service';
import { Login, Logout, Restore } from './auth/state/auth.actions';

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
		private router: Router,
		private token: TokenService
	) {}

	ngOnInit() {
		if (this.token.isValidToken()) {
			this.store.dispatch(Restore).subscribe((auth: any) => {
				let route = '/';

				const role = auth.auth.selectedUser.role;
				if (role === 'admin') {
					route = '/dashboard';
				} else if (role === 'customer') {
					route = '/shop';
					// O SET CUSTOMER DATA
				} else {
					route = '/';
				}
				//MOCK
				route = '/customer/profile';

				this.router.navigate([route]);
			});
		}
	}
	logoutHandler() {
		this.store.dispatch(new Logout(0)).subscribe(() => {
			this.router.navigate(['/login']);
		});
	}
}
