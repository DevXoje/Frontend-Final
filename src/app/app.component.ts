import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {TokenService} from './auth/services/token.service';
import {AuthState, Restore} from "./auth/state";
import {AuthService} from "./auth/services/auth.service";
import {NotificationService} from "./app-common/services/notification.service";
import {Observable} from "rxjs";
import {Customer} from "./customer/domain/customer.model";

@Component({
	selector: 'app-root',
	template: `
		<app-loader></app-loader>
		<router-outlet></router-outlet>
	`,
})
export class AppComponent implements OnInit {
	@Select(AuthState.getSelectedAuth)
	customer$?: Observable<Customer>;

	constructor(
		private store: Store,
		private router: Router,
		private token: TokenService,
		private authService: AuthService,
		private notificationService: NotificationService,
	) {
	}

	ngOnInit() {
		this.checkToRestore();
	}

	checkToRestore() {
		if (this.token.getToken()) {
			if (!this.token.isValidToken()) {
				this.token.removeToken();
				this.router.navigate(this.authService.getRouteByRole("customer"));
				this.notificationService.showWarning('Your session has expired. Please login again.', 'Session Expired');
			} else {
				this.store.dispatch(Restore).subscribe((store_data: any) => {
					this.customer$?.subscribe((customer: Customer) => {
						let route = this.authService.getRouteByRole(customer.role);
						this.router.navigate(route);
						this.notificationService.showSuccess('Welcome back ' + customer.name, 'Welcome Again');

					});
				});
			}
		}
	}
}
