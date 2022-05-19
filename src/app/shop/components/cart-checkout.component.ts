import {Component, Input, OnChanges, SimpleChanges,} from '@angular/core';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Store} from '@ngxs/store';
import {StripeError, Token} from '@stripe/stripe-js';
import {StripeInstance} from 'ngx-stripe';
import {Observable, of} from 'rxjs';
import {OrderItem} from '../domain/shop.model';
import {OrderService} from '../services/order.service';

@Component({
	selector: 'app-cart-checkout',
	template: `
		<!-- <app-table
			[datos]="orderItemsToSend$"
			(onEdit)="editHadler($event)"
			(onDelete)="deleteHadler($event)"
		></app-table> -->

		<!-- <div *ngIf="invalidError" style="color:red">
			{{ invalidError.message }}
		</div>

		<stripe-card
			#stripeCard
			(catch)="onStripeError($event)"
			[(complete)]="cardDetailsFilledOut"
			[(invalid)]="invalidError"
			(cardMounted)="cardReady = 1"
			(tokenChange)="setStripeToken($event)"
			(sourceChange)="setStripeSource($event)"
		></stripe-card> -->

		<!-- <button type="button" (click)="stripeCard.createToken(extraData)">
			createToken
		</button> -->
	`,
})
export class CartCheckoutComponent implements OnChanges {
	@Input() orderItems$?: OrderItem[];
	orderItemsToSend$?: Observable<OrderItem[]>;
	//orderItems$: Observable<OrderItem[]> = new Observable<OrderItem[]>();
	cartIcon = faShoppingCart;
	cardReady = false;
	extraData = {
		"name": null,
		"address_city": null,
		"address_line1": null,
		"address_line2": null,
		"address_state": null,
		"address_zip": null
	};

	constructor(private store: Store, private orderService: OrderService) {
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log('ngOnChanges', changes);

		let orderItems;
		if (changes['orderItems$'].currentValue !== undefined) {
			orderItems = changes['orderItems$'];
			//if (this.orderItems$ instanceof Observable)
			console.log('orderItems', orderItems);

			this.orderItemsToSend$ = of(orderItems.currentValue);
		}
	}

	editHadler(id: number) {
		console.log('editHadler', id);
	}

	deleteHadler(id: number) {
		console.log('deleteHadler', id);
	}

	onStripeInvalid(error: StripeError) {
		console.log('Validation Error', error)
	}

	setStripeToken(token: Token) {
		console.log('Stripe token', token)
	}

	setStripeSource(source: StripeInstance) {
		console.log('Stripe source', source)
	}

	onStripeError(error: StripeError) {
		console.error('Stripe error', error)
	}
}
