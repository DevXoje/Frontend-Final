import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {TokenService} from './auth/services/token.service';
import {Restore} from "./auth/state/auth.actions";
import {AuthService} from "./auth/services/auth.service";

@Component({
	selector: 'app-root',
	template: `
		<app-loader></app-loader>
		<router-outlet></router-outlet>
	`,
})
export class AppComponent implements OnInit {
	constructor(
		private store: Store,
		private router: Router,
		private token: TokenService,
		private authService: AuthService,
	) {
	}


	ngOnInit() {

		this.checkToRestore();
	}

	checkToRestore() {
		if (this.token.getToken()) {
			if (!this.token.isValidToken()) {
				this.token.removeToken();
				this.router.navigateByUrl('/shop');
			} else {
				this.store.dispatch(Restore).subscribe((store_data: any) => {
					const selectedUser = store_data.auth.selectedUser;
					let route = this.authService.getRouteByRole(selectedUser.role);
					this.router.navigateByUrl(route);
				});
			}
		}
	}
}
