import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable, of, tap } from 'rxjs';
import { Order, OrderItem, OrderStateModel } from '../domain/shop.model';
import { OrderService } from '../services/shop.service';
import {
	AddProductToOrder,
	GetAllOrders,
	SetLastOrder,
	SetSelectedOrder,
} from './shop.actions';

const defaults: OrderStateModel = {
	orders: [],
	selectedOrder: {} as Order,
};
@State<OrderStateModel>({
	name: 'cart',
	defaults,
})
@Injectable()
export class OrderState {
	constructor(private readonly orderService: OrderService) {}

	@Selector()
	public static getOrderList({ orders }: OrderStateModel): Order[] {
		return orders;
	}

	@Selector()
	public static getSelectedOrder({ selectedOrder }: OrderStateModel) {
		return selectedOrder;
	}

	@Action(GetAllOrders)
	getAll({
		getState,
		patchState,
	}: StateContext<OrderStateModel>): Observable<Order[]> {
		return this.orderService.getAll().pipe(
			tap((orders: Order[]) => {
				const state = getState();
				patchState({
					orders: [...orders],
					selectedOrder: state.selectedOrder,
				});
			})
		);
	}

	@Action(SetSelectedOrder)
	public setSelectedOrder(
		{ getState, patchState }: StateContext<OrderStateModel>,
		toStoreOrder: SetSelectedOrder
	): Observable<Order> {
		return this.orderService.getById(toStoreOrder.id).pipe(
			tap((order: Order) => {
				const state = getState();
				patchState({
					orders: [...state.orders],
					selectedOrder: order,
				});
			})
		);
	}
	@Action(AddProductToOrder)
	public addProductToOrder(
		{ getState, patchState }: StateContext<OrderStateModel>,
		addProductToOrder: AddProductToOrder
	): Observable<Order> {
		const state = getState();

		addProductToOrder.customer_id;
		const orderItem: OrderItem = {
			product_id: addProductToOrder.product_id,
			quantity: 1,
		};
		return this.orderService.addOrderItem(state.selectedOrder, orderItem).pipe(
			tap((order: Order) => {
				console.log('Order Complete', order);
				patchState({
					orders: [...state.orders],
					selectedOrder: order,
				});
			})
		);
		/* const state = getState();
		let order: Observable<Order> = new Observable();
		if (!state.selectedOrder) {
			const orderRaw = {
				customer_id: addProductToOrder.customer_id,
			};
			this.orderService.create(orderRaw).subscribe((orderCreated) => {
				order = of(orderCreated.data);
				console.log('order created', orderCreated);
			});
		} else {
			order = of(state.selectedOrder);
		}
		order.subscribe((order) => {
			const orderItem: OrderItem = {
				product_id: addProductToOrder.product_id,
				quantity: 1,
			};
			return this.orderService.addOrderItem(order, orderItem).pipe(
				tap((order: Order) => {
					console.log('Order Complete', order);

					patchState({
						orders: [...state.orders],
						selectedOrder: order,
					});
				})
			);
		});
		return order; */
	}

	@Action(SetLastOrder)
	public setLastOrder(
		{ getState, patchState }: StateContext<OrderStateModel>,
		toLastOrder: SetLastOrder
	): Observable<Order> {
		return this.orderService.getLastByUser(toLastOrder.customer_id).pipe(
			tap((order: Order) => {
				const state = getState();
				console.log('order', order);

				patchState({
					orders: [...state.orders],
					selectedOrder: order,
				});
			})
		);
	}
}
