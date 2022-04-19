import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Order } from '../domain/shop.model';

@Injectable({ providedIn: 'root' })
export class OrderService {
	constructor(private router: Router) {}
	private orderMocked: Order[] = [
		{
			id: 4,
			customer_id: '4',
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
		return of(this.orderMocked);
	}
	getById(id: number): Observable<Order> {
		const order = this.orderMocked.filter((order) => order.id == id)[0];
		return of(order as Order);
	}
	updateOrder(order: Partial<Order>): Observable<Order> {
		let newOrder: Order = {} as Order;
		if (order.id) {
			const oldOrder = this.getById(order.id).subscribe((oldOrder) => {
				console.log(oldOrder);
				console.log(order);

				newOrder = { ...oldOrder, ...order };
				newOrder = { ...order, ...oldOrder };
				console.log(newOrder);
			});
		}

		return of(newOrder);
	}
}
