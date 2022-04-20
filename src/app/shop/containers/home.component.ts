import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/auth/domain/auth.model';
import { AuthState } from 'src/app/auth/state/auth.state';
import { Order } from '../domain/shop.model';
import { SetSelectedOrder } from '../state/shop.actions';
import { OrderState } from '../state/shop.state';

@Component({
	selector: 'app-home',
	template: `<app-gallery-products></app-gallery-products>`,
})
export class HomeComponent implements OnInit {
	@Select(AuthState.getSelectedAuth)
	customer$?: Observable<Auth>;
	@Select(OrderState.getSelectedOrder)
	order$?: Observable<Order>;
	constructor(private store: Store) {}

	ngOnInit(): void {
		this.customer$?.subscribe((user) =>
			this.store.dispatch(SetSelectedOrder)
		);
	}
}
