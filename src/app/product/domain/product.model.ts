export type Product = {
	id: number;
	name: string;
	description: string;
	price: number;
	quantity: number;
	image: string;
	category_id: number;
	created_at: string;
	updated_at: string;

}
export type ProductSearch = "name" | "description" | "price" | "quantity" | "category_id" | "created_at" | "updated_at";

export type ProductStateModel = {
	products: Product[];
	selectedProduct: Product;
}