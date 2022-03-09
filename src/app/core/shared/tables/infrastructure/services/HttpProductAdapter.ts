/* export class ProductAdapter {
}
 */
export const products = [];
import { HttpClient } from "@angular/common/http";
import { Product } from "src/app/core/products/domain/Products";
import { ProductServiceInterface } from "src/app/core/products/domain/ProductServiceInterface";


export class HttpProductAdapter implements ProductServiceInterface {
	constructor(private http: HttpClient, private url: string) { }
	async getProducts(): Promise<Product[]> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Product>(this.url).subscribe(
				(users) => {
					resolve(users)
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
				(user) => {
					resolve(user)
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
	async createProduct(user: Product): Promise<Product> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post<Product>(this.url, user).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Product;
	}
	async updateProduct(user: Product): Promise<Product> {
		const payload = await new Promise((resolve, reject) => {
			this.http.put<Product>(this.url + '/' + user.id, user).subscribe(
				(user) => resolve(user),
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
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Product;
	}
}
