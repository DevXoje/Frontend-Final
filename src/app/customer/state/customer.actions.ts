import {Customer} from "../domain/customer.model";

export class SetCustomers {
	static readonly type = '[Customers] SetAll';

	constructor(public orders: Customer[]) {
	}
}

export class GetAllCustomers {
	static readonly type = '[Customers] GetAll';
}

export class SetSelectedCustomer {
	static readonly type = '[Customers] SetSelected';

	constructor(public id: number) {
	}
}

export class UpdateCustomer {
	static readonly type = '[Customers] Update';

	constructor(public customer: Partial<Customer>) {
	}
}
