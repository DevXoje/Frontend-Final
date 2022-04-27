import { Order } from "../domain/shop.model";

/* export class SetOrders {
	static readonly type = '[Orders] SetAll';
	constructor(public customer_id: number) {}
} */
export class SetOrders {
	static readonly type = '[Orders] SetAll';
	constructor(public orders: Order[]) {}
}
export class GetAllOrders {
	static readonly type = '[Orders] GetAll';
}
export class SetSelectedOrder {
	static readonly type = '[Orders] SetSelected';
	constructor(public id: number) {}
}
export class AddProductToOrder {
	static readonly type = '[Orders] AddProduct';
	constructor(public product_id: number, public customer_id: number) {}
}

export class SetLastOrder {
	static readonly type = '[Orders] SetLast';
	constructor(public customer_id: number) {}
}
