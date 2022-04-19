import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { Order, OrderStateModel } from '../domain/shop.model';
import { OrderService } from '../services/shop.service';
import { GetAllOrders, SetSelectedOrder } from './shop.actions';

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
}
