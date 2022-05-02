import { Component } from '@angular/core';
import {
	faShoppingCart,
	faUser,
	faUserSlash,
} from '@fortawesome/free-solid-svg-icons';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/auth/domain/auth.model';
import { AuthState } from 'src/app/auth/state/auth.state';
import { Order } from '../domain/shop.model';
import { OrderState } from '../state/shop.state';

@Component({
	selector: 'app-cart-nav',
	template: `
		<!-- <div *ngIf="customer$|async as customer; else notLogged"> -->
		<div>
			<fa-icon [icon]="cartIcon" [routerLink]="'checkout'"></fa-icon>
			<p>user:{{ (customer$ | async)?.email }}</p>
			<p>order:{{ (order$ | async)?.amount }}</p>
		</div>
		<!-- <div #notLogged> -->
		<div>
			<button [routerLink]="'/login'">
				Login<fa-icon [icon]="authIcon"> </fa-icon>
			</button>
		</div>
	`,
})
export class CartNavComponent {
	@Select(AuthState.getSelectedAuth)
	customer$?: Observable<Auth>;
	@Select(OrderState.getSelectedOrder)
	order$?: Observable<Order>;
	constructor(private store: Store) {}

	cartIcon = faShoppingCart;
	authIcon = faUser;
}
