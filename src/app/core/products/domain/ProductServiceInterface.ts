import { Product } from "./Products";

export interface ProductServiceInterface {
	getUsers(): Promise<Product[]>;
	getUser(id: number): Promise<Product>;
	createUser(user: Product): Promise<Product>;
	updateUser(user: Product): Promise<Product>;
	deleteUser(id: number): Promise<Product>;
}
