import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Cart, CartServiceInterface } from "@public/cart/domain/cart.model";

export class HttpCartAdapter implements CartServiceInterface {
	headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
		/* Authorization: 'my-auth-token' */
	})
	constructor(private http: HttpClient, private url: string) { }

	async getCart(id: number): Promise<Cart> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Cart>(`${this.url}/${id}`).subscribe(
				(user) => {
					resolve(user)
				},
				(error) => {
					console.error('getCart Error: ', error.message);
					reject(error)
				}
			);
		});
		console.log('PAYLOAD', payload);
		return payload as Cart;
	}
	async createCart(user: Cart): Promise<Cart> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post<Cart>(this.url, user, { headers: this.headers }).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Cart;
	}
	async updateCart(user: Cart): Promise<Cart> {
		const payload = await new Promise((resolve, reject) => {
			this.http.put<Cart>(this.url + '/' + user.id, user).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Cart;
	}
	async deleteCart(id: number): Promise<Cart> {
		const payload = await new Promise((resolve, reject) => {
			this.http.delete<Cart>(this.url + '/' + id).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Cart;
	}
}
