import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {Field} from 'src/app/app-common/domain/field';
import {FieldControlService} from 'src/app/app-common/services/field-control.service';
import {SetSelectedCustomer} from "../../customer/state";
import {PasswordInput, TextInput} from "../../app-common/domain";
import {Validators} from "@angular/forms";
import {HttpResponse} from "../../app-common/services/HttpGenericAdapter";
import {Customer} from "../../customer/domain/customer.model";

@Component({
	selector: 'app-form-user',
	template: `

		<app-auth-layout>
			<div topHeader>
				<h3 class="text-muted mb-2">{{title|titlecase}}</h3>
			</div>
			<app-form
				[fields]="fields$ | async"
				(sendPayload)="sendPayload.emit($event)"
				[extraValidators]="atLeastOneValidator"
				content></app-form>
		</app-auth-layout>

	`,
})
export class FormUserComponent implements OnInit {
	@Input() title: string = 'user';
	fields$?: Observable<Field<any>[]> = of([
		new TextInput({
			key: 'name',
			label: 'nombre',
			type: 'text',
			validators: [],
			order: 1,
		}),
		new TextInput({
			key: 'email',
			label: 'Email',
			type: 'email',
			validators: [Validators.email],
			order: 2,
		}),
		new TextInput({
			key: 'address',
			label: 'address',
			type: 'text',
			validators: [],
			order: 3,
		}),
		new TextInput({
			key: 'official_doc',
			label: 'dni',
			type: 'text',
			validators: [Validators.pattern('[0-9]{8}')],
			order: 4,
		}),
		new PasswordInput({
			key: 'password',
			label: 'Password',
			type: 'password',

			validators: [Validators.minLength(6)],
			order: 5,
		}),
	]);
	//@Input() fields$: Observable<Field<any>[]> | null = null;
	@Output() sendPayload = new EventEmitter<any>();
	id?: number;
	customer?: Customer;

	constructor(
		fieldService: FieldControlService,
		private store: Store,
		private router: Router,
		private route: ActivatedRoute
	) {
		const resp = this.route.snapshot.data["customerResp"] as HttpResponse<Customer>
		if (resp) {//Esto deberia gestionarlo edit customer
			this.customer = resp.data;
			this.store.dispatch(new SetSelectedCustomer(this.customer.id));

			this.fields$ = of([
				new TextInput({
					key: 'name',
					label: 'nombre',
					type: 'text',
					placeholder: this.customer.name,
					validators: [],
					order: 1,
				}),
				new TextInput({
					key: 'email',
					label: 'Email',
					type: 'email',
					placeholder: this.customer.email,
					validators: [Validators.email],
					order: 2,
				}),
				new TextInput({
					key: 'address',
					label: 'address',
					type: 'text',
					placeholder: this.customer.address,
					validators: [],
					order: 3,
				}),
				new TextInput({
					key: 'official_doc',
					label: 'dni',
					type: 'text',
					placeholder: this.customer.official_doc,
					validators: [Validators.pattern('[0-9]{8}')],
					order: 3,
				}),
				new PasswordInput({
					key: 'password',
					label: 'Password',
					type: 'password',

					validators: [Validators.minLength(6)],
					order: 3,
				}),
			]);
		}

	}

	atLeastOneValidator = () => {
		return (controlGroup: any) => {
			console.log(controlGroup);
			let controls = controlGroup.controls;
			if (controls) {
				let theOne = Object.keys(controls).find(key => controls[key].value !== '');
				if (!theOne) {
					return {
						atLeastOneRequired: {
							text: 'At least one should be selected'
						}
					}
				}
			}
			return null;
		};
	};


	ngOnInit(): void {

	}


}
