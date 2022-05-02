import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/auth/domain/auth.model';
import { AuthState } from 'src/app/auth/state/auth.state';
import { SetLastOrder } from '../state/shop.actions';

@Component({
	selector: 'app-home',
	template: `
		<app-shop-layout>
			<app-cart-nav topHeader></app-cart-nav>
			<app-gallery-products content></app-gallery-products>
		</app-shop-layout>

	<!-- 	<app-cart-nav></app-cart-nav> -->
	`,
})
export class HomeComponent implements OnInit {
	@Select(AuthState.getSelectedAuth)
	customer$?: Observable<Auth>;

	constructor(private store: Store) {}

	ngOnInit(): void {
		this.customer$?.subscribe((user) => {
			console.log('user', user);

			if (user.id != undefined) {
				this.store.dispatch(new SetLastOrder(user.id));
			}
		});
	}
}
