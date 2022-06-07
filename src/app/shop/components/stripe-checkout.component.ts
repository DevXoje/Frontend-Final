import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators';

import {StripeService} from 'ngx-stripe';
import {environment} from 'src/environments/environment';

@Component({
	selector: 'app-stripe-checkout',
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
		<button (click)="checkout()">GO TO CHECKOUT</button>
	`,
})
export class StripeCheckoutComponent {
	constructor(
		private http: HttpClient,
		private stripeService: StripeService
	) {
	}

	checkout() {
		// Check the server.js tab to see an example implementation
		this.http
			.post<any>(environment.baseUrl + '/create-checkout-session', {})
			.pipe(
				switchMap((session) => {
					console.log('session', session);

					return this.stripeService.redirectToCheckout({

						sessionId: session.id,
					});
				})
			)
			.subscribe((result) => {
				// If `redirectToCheckout` fails due to a browser or network
				// error, you should display the localized error message to your
				// customer using `error.message`.
				if (result.error) {
					alert(result.error.message);
				}
			});
	}
}
