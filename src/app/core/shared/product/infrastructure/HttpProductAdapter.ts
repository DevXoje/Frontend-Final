/* export class ProductAdapter {
}
 */
export const products = [];
import { HttpClient } from "@angular/common/http";
import { Product } from "../domain/product.model";
import { ProductServiceInterface } from "../domain/ProductServiceInterface";


export class HttpProductAdapter implements ProductServiceInterface {
	constructor(private http: HttpClient, private url: string) { }
	async getProducts(): Promise<Product[]> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Product>(this.url).subscribe(
				(products) => {
					resolve(products)
				},
				(error) => {
					console.error('getProduct Error: ', error.message);
					reject(error)
				}
			);
		});
		console.log('PAYLOAD', payload);
		return payload as Product[]
	}
	async getProduct(id: number): Promise<Product> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Product>(this.url + id).subscribe(
				(product) => {
					resolve(product)
				},
				(error) => {
					console.error('getProduct Error: ', error.message);
					reject(error)
				}
			);
		});
		console.log('PAYLOAD', payload);
		return payload as Product;
	}
	async createProduct(product: Product): Promise<Product> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post<Product>(this.url, product).subscribe(
				(product) => resolve(product),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Product;
	}
	async updateProduct(product: Product): Promise<Product> {
		const payload = await new Promise((resolve, reject) => {
			this.http.put<Product>(this.url + '/' + product.id, product).subscribe(
				(product) => resolve(product),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Product;
	}
	async deleteProduct(id: number): Promise<Product> {
		const payload = await new Promise((resolve, reject) => {
			this.http.delete<Product>(this.url + '/' + id).subscribe(
				(product) => resolve(product),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Product;
	}
}
