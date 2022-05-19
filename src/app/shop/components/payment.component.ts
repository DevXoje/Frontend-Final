import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {StripeError} from '@stripe/stripe-js';

@Component({
	selector: 'app-payment',
	template: `
		<form [formGroup]="addCardForm" (ngSubmit)="submitPay()">
			<div class="addAccountForm">
				<div class="form-group card-no-rightModal">
					<label class="form-group-label">Card number</label>

					<div class="RightcardNoSec">
						<div
							id="cardNumber"
							class="{{
								cardDetails?.elementType == 'cardNumber' &&
								cardError
									? 'invalid-input'
									: ''
							}}"
						></div>

						<!--                                Here you can show the card brand -->

						<img
							src="/assets/img/{{ cardBrand }}.svg"
							class="rightModalCardImg"
							width="100"
							alt="Card brand"
						/>
					</div>
				</div>

				<div class="form-group">
					<label class="form-group-label">Card holder’s name</label>

					<input
						type="text"
						class="form-group-input darkinput"
						placeholder="enter card holder’s name"
					/>
				</div>

				<div class="multi-form-group">
					<div class="form-group">
						<label class="form-group-label">Exp date</label>

						<div
							id="cardExpiry"
							class="card-expiry {{
								cardDetails?.elementType == 'cardExpiry' &&
								cardError
									? 'invalid-input'
									: ''
							}}"
						></div>
					</div>

					<div class="form-group">
						<label class="form-group-label">CVV </label>

						<div
							id="cardCVC"
							class="{{
								cardDetails?.elementType == 'cardCvc' &&
								cardError
									? 'invalid-input'
									: ''
							}}"
						></div>
					</div>
				</div>

				<button
					class="primary-btn-lg"
					[disabled]="cardError || btnLoader"
				>
					Pay <span [ngClass]="{ 'btn-loader': btnLoader }"></span>
				</button>
			</div>
		</form>
	`,
})
export class PaymentComponent {
	addCardForm: FormGroup;
	btnLoader: boolean = false;
	cardDetails:any;
	cardError?:StripeError;
	cardBrand: string = 'visa';
	constructor(private fb: FormBuilder) {
		this.addCardForm = this.fb.group({
			cardNumber: [''],
			cardHolderName: [''],
			cardExpiry: [''],
			cardCVC: [''],
		});
	}
	submitPay() {}
}
