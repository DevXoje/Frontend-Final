import {HttpClient} from '@angular/common/http';
import {Component} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Order} from '../domain/shop.model';
import {CompleteOrder, OrderState} from '../state';

@Component({
	selector: 'app-checkout',
	template: `
		<app-customer-checkout
			(completed)="completeOrder($event)"
		></app-customer-checkout>
		<!-- 	<app-cart-checkout
			[orderItems$]="order.order_items"
			*ngIf="order$ | async as order"
		></app-cart-checkout> -->
		<!-- <app-stripe-checkout></app-stripe-checkout> -->
		<app-payment></app-payment>
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

	completeOrder(_a: any) {
		this.order$?.subscribe((_order) => {
			this.store.dispatch(CompleteOrder);
		});
	}
}
