import { Product } from '../domain/product.model';

export class GetAllProducts {
	static readonly type = '[Product] GetAll';
}
export class GetSortedProducts {
	static readonly type = '[Product] GetSorted';
	constructor(public order: string) {}
}
export class SetSelectedProduct {
	static readonly type = '[Product] SetSelected';
	constructor(public id: number) {}
}

export class SetSelectedProductToUpdate {
	static readonly type = '[Product] SetSelectedToUpdate';
	constructor(public product: Product) {}
}
