import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/auth/domain/auth.model';
import { AuthState } from 'src/app/auth/state/auth.state';
import { Order } from '../domain/shop.model';
import { SetLastOrder, SetSelectedOrder } from '../state/shop.actions';
import { OrderState } from '../state/shop.state';

@Component({
	selector: 'app-cart-nav',
	template: `
		<fa-icon [icon]="cartIcon" [routerLink]="'checkout'"></fa-icon>
		<p>user:{{ (customer$ | async)?.email }}</p>
		<p>order:{{ (order$ | async)?.amount }}</p>
	`,
})
export class CartNavComponent implements OnInit {
	@Select(AuthState.getSelectedAuth)
	customer$?: Observable<Auth>;
	@Select(OrderState.getSelectedOrder)
	order$?: Observable<Order>;
	constructor(private store: Store) {}

	ngOnInit(): void {
		
	}
	cartIcon = faShoppingCart;
}
