import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserSlash } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngxs/store';
import { TokenService } from './auth/services/token.service';
import { Logout, Restore } from './auth/state/auth.actions';
import { SetSelectedProduct } from './product/state/product.actions';
import { SetLastOrder, SetOrders } from './shop/state/shop.actions';

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
		private token: TokenService
	) {}

	ngOnInit() {
		if (this.token.isValidToken()) {
			console.log('token valid');

			this.store.dispatch(Restore).subscribe((store_data: any) => {
				this.store.dispatch(
					new SetOrders(store_data.auth.selectedUser.orders)
				);
				this.store.dispatch(
					new SetLastOrder(store_data.auth.selectedUser.id)
				);

				/* const paths = {
					admin: '/dashboard',
					customer: '/shop',
				};
				type UserRole = 'admin' | 'customer';
				const role: UserRole = store_data.auth.selectedUser.role;
				let route: string = paths[role]; */

				//MOCK
				let route = '/customer/profile';
				console.log('route', route);
				console.log(this.router);

				try {
					this.router.navigate([route]);
				} catch (error) {
					console.log('error', error);
				}
			});
		} else {
			this.router.navigate(['/shop']);
		}
	}

}
