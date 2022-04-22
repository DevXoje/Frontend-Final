import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { Field, PasswordInput, TextInput } from 'src/app/app-common/domain';
import { Auth } from 'src/app/auth/domain/auth.model';
import { AuthState } from 'src/app/auth/state/auth.state';
import { Order } from '../domain/shop.model';
import { SetLastOrder, SetSelectedOrder } from '../state/shop.actions';
import { OrderState } from '../state/shop.state';

@Component({
	selector: 'app-checkout',
	template: `
		<app-customer-checkout
			(completed)="completeOrder($event)"
		></app-customer-checkout>
		<app-cart-checkout></app-cart-checkout>
	`,
})
export class CheckoutComponent implements OnInit {
	@Select(OrderState.getSelectedOrder)
	order$?: Observable<Order>;
	constructor(private store: Store,private http:HttpClient) {}

	ngOnInit(): void {}
	completeOrder(a: any) {
		this.order$?.subscribe((order) => {
			this.connectStripe();
			console.log('completeOrder', a, order);
		});
	}
	connectStripe() {
		console.log('connectStripe');
	}
}
