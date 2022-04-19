import { Order } from "../domain/shop.model";

export class GetAllOrders {
	static readonly type = '[Orders] GetAll';
}
export class SetSelectedOrder {
	static readonly type = '[Orders] SetSelected';
	constructor(public id: number) { }
}
