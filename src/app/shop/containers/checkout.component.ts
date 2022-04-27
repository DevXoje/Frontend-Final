import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Order } from '../domain/shop.model';
import { OrderState } from '../state/shop.state';

@Component({
	selector: 'app-checkout',
	template: `
		<app-customer-checkout
			(completed)="completeOrder($event)"
		></app-customer-checkout>
		<app-cart-checkout
			[orderItems$]="order.order_items"
			*ngIf="order$ | async as order"
		></app-cart-checkout>
	`,
})
export class CheckoutComponent {
	@Select(OrderState.getSelectedOrder)
	order$?: Observable<Order>;
	constructor(private store: Store, private http: HttpClient) {
		this.order$?.subscribe((order) => {
			console.log('order', order.order_items);
		});
	}

	completeOrder(a: any) {
		this.order$?.subscribe((order) => {
			this.connectStripe();
			console.log('completeOrder');
			console.log('order', order);
			console.log('evento', a);
		});
	}
	connectStripe() {
		console.log('connectStripe');
	}
}
