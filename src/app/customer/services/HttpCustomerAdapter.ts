import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpGenericAdapter } from 'src/app/app-common/services/HttpGenericAdapter';
import { Order } from 'src/app/shop/domain/shop.model';
import { environment } from 'src/environments/environment';

import { Customer, CustomerServiceInterface } from '../domain/customer.model';

export class HttpCustomerAdapter
	extends HttpGenericAdapter<Customer>
	implements CustomerServiceInterface
{
	/* private authHttp: HttpAuthAdapter = new HttpAuthAdapter(
		this.http,
		environment.baseUrl + '/customers'
	); */

	constructor(http: HttpClient, authUrl: string) {
		super(http, authUrl);
	}
	async getLastOrder(customer_id: number): Promise<Order> {
		const payload = await new Promise((resolve, reject) => {
			this.http
				.get<Order>(`${this.url}/${customer_id}/orders/last`)
				.subscribe({
					next: (data) => resolve(data),
					error: (err: HttpErrorResponse) => reject(err),
				});
		});
		return payload as Order;
	}
	async getProfile(): Promise<Customer> {
		const payload = await new Promise((resolve, reject) => {
			this.http
				.get<Customer>(`${environment.baseUrl}/api/auth/user-profile`)
				.subscribe({
					next: (data) => resolve(data),
					error: (err: HttpErrorResponse) => reject(err),
				});
		});
		return payload as Customer;
	}
	/* 	override async getById(auth_id: number): Promise<Customer> {
		const customer = super.getById(auth_id);
		const auth = this.authHttp.getById(auth_id);
		let customerComplete: Promise<Customer>;

		const prom = Promise.all([customer, auth])
			.then(([customer, auth]) => ({ ...customer, ...auth }))
			.catch((err) => {});
	} */
}
