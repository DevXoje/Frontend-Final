/* export class ProductAdapter {
}
 */
export const products = [];
import { HttpClient } from "@angular/common/http";
import { Product } from "../domain/Products";
import { ProductServiceInterface } from "../domain/ProductServiceInterface";

export class HttpProductAdapter implements ProductServiceInterface {
	constructor(private http: HttpClient, private url: string) { }
	async getUsers(): Promise<Product[]> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Product>(this.url).subscribe(
				(users) => {
					resolve(users)
				},
				(error) => {
					console.error('getUser Error: ', error.message);
					reject(error)
				}
			);
		});
		console.log('PAYLOAD', payload);
		return payload as Product[]
	}
	async getUser(id: number): Promise<Product> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Product>(this.url + id).subscribe(
				(user) => {
					resolve(user)
				},
				(error) => {
					console.error('getUser Error: ', error.message);
					reject(error)
				}
			);
		});
		console.log('PAYLOAD', payload);
		return payload as Product;
	}
	async createUser(user: Product): Promise<Product> {
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
	async updateUser(user: Product): Promise<Product> {
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
	async deleteUser(id: number): Promise<Product> {
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
