import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Order } from 'src/app/shop/domain/shop.model';
import { environment } from 'src/environments/environment';
import { Customer, CustomerServiceInterface } from '../domain/customer.model';
import { HttpCustomerAdapter } from './HttpCustomerAdapter';

@Injectable({ providedIn: 'root' })
export class CustomerService {
	private customerUrl = environment.baseUrl + '/customers';
	private customerService: CustomerServiceInterface = new HttpCustomerAdapter(
		this.http,
		this.customerUrl
	);
	constructor(
		private router: Router,
		private http: HttpClient,
		private authService: AuthService
	) {}
	getLastOrder(customer_id: number): Observable<Order> {
		return from(this.customerService.getLastOrder(customer_id));
	}
	getById(auth_id: number): Observable<Customer> {
		/* const customerBase= this.customerService.getById(auth_id);
		const customerAuth=this.authService.getById(auth_id); */
		return from(this.customerService.getById(auth_id));
	}
	getProfile(): Observable<Customer> {
		return from(this.customerService.getProfile());
	}
}
