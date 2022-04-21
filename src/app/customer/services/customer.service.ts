import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CustomerServiceInterface } from '../domain/customer.model';
import { HttpCustomerAdapter } from './HttpCustomerAdapter';

@Injectable({ providedIn: 'root' })
export class CustomerService {
	private customerUrl = environment.baseUrl + '/customers';
	private customerService: CustomerServiceInterface = new HttpCustomerAdapter(
		this.http,
		this.customerUrl
	);
	constructor(private router: Router, private http: HttpClient) {}
	getLastOrder(id: number): Observable<any> {
		return from(this.customerService.getLastOrder(id));
	}
}
