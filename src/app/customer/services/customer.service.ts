import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {from, Observable, of} from 'rxjs';
import {HttpResponse} from 'src/app/app-common/services/HttpGenericAdapter';
import {AuthService} from 'src/app/auth/services/auth.service';
import {Order} from 'src/app/shop/domain/shop.model';
import {environment} from 'src/environments/environment';
import {Customer, CustomerServiceInterface} from '../domain/customer.model';
import {HttpCustomerAdapter} from './HttpCustomerAdapter';
import {Field, PasswordInput, TextInput} from "../../app-common/domain";
import {Validators} from "@angular/forms";

@Injectable({providedIn: 'root'})
export class CustomerService {
	$fields = [
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
		})
	];
	private customerUrl = environment.baseUrl + '/customers';
	private customerService: CustomerServiceInterface = new HttpCustomerAdapter(
		this.http,
		this.customerUrl
	);

	constructor(
		private router: Router,
		private http: HttpClient,
		private authService: AuthService
	) {
	}

	complete(customer: Partial<Customer>): Observable<HttpResponse<Customer>> {
		return from(this.customerService.complete(customer));
	}

	getLastOrder(customer_id: number): Observable<HttpResponse<Order>> {
		return from(this.customerService.getLastOrder(customer_id));
	}

	getAllOrders(customer_id: number): Observable<HttpResponse<Order[]>> {
		return from(this.customerService.getAllOrders(customer_id));
	}

	getOrders(customer_id: number): Observable<HttpResponse<Order[]>> {
		return from(this.customerService.getOrders(customer_id));
	}

	getById(auth_id: number): Observable<HttpResponse<Customer>> {
		return from(this.customerService.getById(auth_id));
	}

	getAll() {
		const customerAdminUrl = environment.baseUrl + 'admin/customers';
		const customerAdminService = new HttpCustomerAdapter(
			this.http,
			this.customerUrl
		);
		return from(customerAdminService.getAll());
	}

	getProfile(): Observable<Customer> {
		return from(this.customerService.getProfile());
	}

	update(customer: Partial<Customer>) {
		return from(this.customerService.update(customer));
	}

	delete(id: number) {
		return from(this.customerService.delete(id));
	}


	createPaymentIntent() {
		return undefined;
	}

	getFields(customer?: Customer): Observable<Field<any>[]> {
		return of(
			(!customer) ? this.$fields : this.setPlaceHolders(this.$fields, customer),
		);

	}

	setPlaceHolders(fields: Field<any>[], customer: Customer): Field<any>[] {
		fields.forEach(field => {
			if (field.key === 'name') {
				field.placeholder = customer.name as string;
			}
			if (field.key === 'email') {
				field.placeholder = customer.email as string;
			}
			if (field.key === 'address') {
				field.placeholder = customer.address as string;
			}
			if (field.key === 'official_doc') {
				field.placeholder = customer.official_doc as string;
			}
			if (field.key === 'password') {
				field.placeholder = '********';
			}

		});
		return fields;
	}
}
