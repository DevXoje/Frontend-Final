import { Product } from "@shared/product/domain/product.model";
import { Customer } from "@shared/tables/domain/models";

export interface Cart {
	id: number;
	products: Product[];
	total: number;
	customer?: Customer;
}

export interface CartServiceInterface {
	//getCarts(): Promise<Cart[]>;
	getCart(id: number): Promise<Cart>;
	createCart(user: Cart): Promise<Cart>;
	updateCart(user: Cart): Promise<Cart>;
	deleteCart(id: number): Promise<Cart>;
}
export class CartStateModel {
	cart?: Cart;
}