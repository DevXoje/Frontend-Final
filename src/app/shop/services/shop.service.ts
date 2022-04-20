import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, map, Observable, of } from 'rxjs';
import { HttpResponse } from 'src/app/app-common/services/HttpGenericAdapter';
import { AuthService } from 'src/app/auth/services/auth.service';
import { environment } from 'src/environments/environment';
import { Order, OrderItem, OrderServiceInterface } from '../domain/shop.model';
import { HttpShopAdapter } from './HttpShopAdapter';

@Injectable({ providedIn: 'root' })
export class OrderService {
	private productUrl = environment.baseUrl + '/orders';
	private orderService: OrderServiceInterface = new HttpShopAdapter(
		this.http,
		this.productUrl
	);
	constructor(
		private router: Router,
		private http: HttpClient,
		private authService: AuthService
	) {}
	private orderMocked: Order[] = [
		{
			id: 4,
			customer_id: 4,
			amount: 100,
			order_items: [
				{
					id: 4,
					order_id: 4,
					product_id: 4,
					quantity: 1,
					amount: 100,
				},
			],
		},
	];
	getAll(): Observable<Order[]> {
		return from(this.orderService.getAll());
		//return of(this.orderMocked);
	}
	getById(id: number): Observable<Order> {
		/* const order = this.orderMocked.filter((order) => order.id == id)[0];
		return of(order as Order); */
		return from(this.orderService.getById(id));
	}
/* 	getLastByUser(customer_id: number): Observable<Order> {

		//return from(this.orderService.getById(id));
	} */
	addOrderItem(order: Order, orderItem: OrderItem): Observable<Order> {
		return from(this.orderService.addOrderItem(order, orderItem));
	}
	update(order: Partial<Order>): Observable<HttpResponse<Order>> {
		return from(this.orderService.update(order));
	}
	create(order: Partial<Order>): Observable<HttpResponse<Order>> {
		return from(this.orderService.create(order));
	}
}
