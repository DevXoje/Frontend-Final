import { Product } from "./Products";

export interface ProductServiceInterface {
	getProducts(): Promise<Product[]>;
	getProduct(id: number): Promise<Product>;
	createProduct(user: Product): Promise<Product>;
	updateProduct(user: Product): Promise<Product>;
	deleteProduct(id: number): Promise<Product>;
}
