import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Validators} from '@angular/forms';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Field, TextInput} from 'src/app/app-common/domain';
import {AuthState} from 'src/app/auth/state/auth.state';
import {Customer} from '../domain/customer.model';
import {CustomerService} from '../services/customer.service';
import {CompleteUser} from "../../auth/state";

@Component({
	selector: 'app-customer-complete',
	template: `
		<app-form-user
			[title]="'Complete User'"
			(sendPayload)="completeHandler($event)"
			[exclude]="['name','email','password','password_confirmation']"
		>
		</app-form-user>`,
})
export class CustomerCompleteComponent implements OnInit {
	@Select(AuthState.getSelectedAuth)
	auth$?: Observable<Customer>;

	@Output() completed = new EventEmitter<any>();
	fields: Field<string>[] = [];

	constructor(
		private store: Store,
		private customerService: CustomerService
	) {
	}

	completeHandler(payload: any) {
		console.log('completeHandler', payload);
		this.store.dispatch(new CompleteUser(payload));
		//this.completed.emit(payload);
	}

	createPaymentIntent() {
	}

	ngOnInit(): void {
		this.auth$?.subscribe((auth) => {
			console.log('auth', auth);
			this.setFields(auth);//TODO: abstraer a servcio y con paso de parameto
			this.createPaymentIntent();
			/* this.customerService.getById(auth.id).subscribe((customer) => {
				console.log(customer, 'oninit');
			}); */
		});
	}

	setFields(auth: Customer) {
		this.fields = [
			new TextInput({
				key: 'address',
				label: 'address',
				type: 'text',
				validators: [Validators.required],
				order: 1,
				placeholder: auth.address,
			}),
			new TextInput({
				key: 'userName',
				label: 'name',
				type: 'text',
				validators: [Validators.required],
				order: 2,
				placeholder: auth.email,
			}),
		];
	}
}
