import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from '@angular/common/http';

export class HttpGenericAdapter<Dato> {

	headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
		/* Authorization: 'my-auth-token' */
	});
	constructor(protected http: HttpClient, protected url: string) {}

	async getAll(): Promise<Dato[]> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Dato[]>(`${this.url}`).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as Dato[];
	}
	async getById(id:number): Promise<Dato> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Dato>(`${this.url}/${id}`).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as Dato;
	}
	async create(dato: Partial<Dato>): Promise<CreateResponse<Dato>> {
		const payload = await new Promise((resolve, reject) => {
			this.http
				.post(`${this.url}/create`, dato, { headers: this.headers })
				.subscribe({
					next: (data) => resolve(data),
					error: (err: HttpErrorResponse) => reject(err),
				});
		});
		return payload as CreateResponse<Dato>;
	}

	/* async getCart(id: number): Promise<Cart> {
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
		return payload as Cart;
	}
	async createCart(user: Cart): Promise<Cart> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post<Cart>(this.url, user, { headers: this.headers }).subscribe(
				(user) => resolve(user),
				(error) => {
					console.error('Error: ', error);
					reject(error)
				});
		});
		return payload as Cart;
	}
	async updateCart(user: Cart): Promise<Cart> {
		const payload = await new Promise((resolve, reject) => {
			this.http.put<Cart>(this.url + '/' + user.id, user).subscribe(
				(user) => resolve(user),
				(error) => {
					console.error('Error: ', error);
					reject(error)
				});
		});
		return payload as Cart;
	}
	async deleteCart(id: number): Promise<Cart> {
		const payload = await new Promise((resolve, reject) => {
			this.http.delete<Cart>(this.url + '/' + id).subscribe(
				(user) => resolve(user),
				(error) => {
					console.error('Error: ', error);
					reject(error)
				});
		});
		return payload as Cart;
	} */
}

export type CreateResponse<Dato> = {
	success: boolean;
	message: string;
	data: Dato;
}
