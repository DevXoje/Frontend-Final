import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { HttpResponse } from 'src/app/app-common/services/HttpGenericAdapter';
import { Order, OrderItem, OrderStateModel } from '../domain/shop.model';
import { OrderService } from '../services/shop.service';
import {
	AddProductToOrder,
	GetAllOrders,
	SetLastOrder,
	SetOrders,
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
	}: StateContext<OrderStateModel>): Observable<HttpResponse<Order[]>> {
		return this.orderService.getAll().pipe(
			tap((resp: HttpResponse<Order[]>) => {
				patchState({
					orders: [...resp.data],
					selectedOrder: getState().selectedOrder,
				});
			})
		);
	}

	@Action(SetSelectedOrder)
	public setSelectedOrder(
		{ getState, patchState }: StateContext<OrderStateModel>,
		toStoreOrder: SetSelectedOrder
	): Observable<HttpResponse<Order>> {
		return this.orderService.getById(toStoreOrder.id).pipe(
			tap((resp: HttpResponse<Order>) => {
				patchState({
					orders: [...getState().orders],
					selectedOrder: resp.data,
				});
			})
		);
	}
	/* @Action(SetOrders)
	public setOrders(
		{ getState, patchState }: StateContext<OrderStateModel>,
		toSetOrder: SetOrders
	): Observable<HttpResponse<Order[]>> {
		return this.orderService.getByUser(toSetOrder.customer_id).pipe(
			tap((resp: HttpResponse<Order[]>) =>
				patchState({
					orders: [...resp.data],
					selectedOrder: getState().selectedOrder,
				})
			)
		);
	} */
	@Action(SetOrders)
	public setOrders(
		{ getState, patchState }: StateContext<OrderStateModel>,
		toSetOrder: SetOrders
	) {
		patchState({
			orders: [...toSetOrder.orders],
			selectedOrder: getState().selectedOrder,
		});
	}

	@Action(AddProductToOrder)
	public addProductToOrder(
		{ getState, patchState }: StateContext<OrderStateModel>,
		addProductToOrder: AddProductToOrder
	): Observable<Order> {
		const state = getState();
		const orderItem: OrderItem = {
			product_id: addProductToOrder.product_id,
			quantity: 1,
		};
		return this.orderService
			.addOrderItem(state.selectedOrder, orderItem)
			.pipe(
				tap((order: Order) => {
					patchState({
						orders: [...state.orders],
						selectedOrder: order,
					});
				})
			);
	}

	@Action(SetLastOrder)
	public setLastOrder(
		{ getState, patchState }: StateContext<OrderStateModel>,
		toLastOrder: SetLastOrder
	): Observable<Order> {
		return this.orderService.getLastByUser(toLastOrder.customer_id).pipe(
			tap((order: any) =>
				patchState({
					orders: [...getState().orders],
					selectedOrder: order.data,
				})
			)
		);
	}
}
