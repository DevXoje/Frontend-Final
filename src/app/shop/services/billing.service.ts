import {Injectable} from '@angular/core';

declare var Stripe: any;

@Injectable({providedIn: 'root'})
export class BillingService {


	/*private cardDtl = new Subject();
	getCardDetails$ = this.cardDtl.asObservable();

	constructor(private http: HttpClient) {}

	// init payment form with all the input fields

	initPaymentForm(paymentForm: any) {
		const stripe = (window as any).stripe;
		var elements = stripe.elements();
		const style:StripeElementStyle = {
			base: {
				color: '#fff',
				fontWeight: 500,
				fontSize: '18px',
				lineHeight: '30px',
				padding: '40px',
				fontSmoothing: 'antialiased',
				':-webkit-autofill': {
					color: '#fce883',
				},
				'::placeholder': {
					color: 'rgba(224, 176, 156, 0.4)',
				},
			},
		};

		paymentForm.value.card_number = elements.create('cardNumber', {
			placeholder: '9876  5432  0123  4567',
			style: style,
		});

		let cardExpiry = elements.create('cardExpiry', {
			placeholder: 'MM / YY',
			style: style,
		});

		let cardCVC = elements.create('cardCvc', {
			placeholder: 'CVV',
			style: style,
		});

		paymentForm.value.card_number.on('change', (e: any) => {
			this.cardDtl.next(e);
		});
		cardExpiry.on('change', (e: any) => {
			this.cardDtl.next(e);
		});
		cardCVC.on('change', (e: any) => {
			this.cardDtl.next(e);
		});

		paymentForm.value.card_number.mount('#cardNumber');
		cardExpiry.mount('#cardExpiry');
		cardCVC.mount('#cardCVC');
	}

	// Confirm card step up, is the card is valid or not validate by Stripe

	confirmCardSetup(intent: any, paymentForm: any, cb: any) {
		const stripe = (window as any).stripe;
		return stripe
			.confirmCardSetup(intent.client_secret, {
				payment_method: {
					card: paymentForm.value.card_number,
					billing_details: {
						name: 'Vikas Singh',
						address: {
							city: 'Noida',
							country: 'IN',
							line1: 'xxxx Delhi',
							postal_code: '110000',
							state: 'Delhi',
						},
					},
				},
			})
			.then(cb);
	}

	// This method is for handle 3d secure authentication

	handleConfirmCardPayment(intent: any, cb: any) {
		const stripe = (window as any).stripe;
		return stripe
			.confirmCardPayment(intent.client_secret, {
				payment_method: intent.payment_method,
			})
			.then(cb, this);
	}*/
}
