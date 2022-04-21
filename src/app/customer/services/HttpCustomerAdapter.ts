import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpGenericAdapter } from 'src/app/app-common/services/HttpGenericAdapter';

import { Customer, CustomerServiceInterface } from '../domain/customer.model';

export class HttpCustomerAdapter
	extends HttpGenericAdapter<Customer>
	implements CustomerServiceInterface
{
	constructor(http: HttpClient, authUrl: string) {
		super(http, authUrl);
	}
	async getLastOrder(id: number): Promise<Customer> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Customer>(`${this.url}/${id}/orders/last`).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as Customer;
	}
}
