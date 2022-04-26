import { HttpClient, HttpErrorResponse } from '@angular/common/http';

export class HttpGenericAdapter<Dato> {
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
	async getById(id: number): Promise<Dato> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Dato>(`${this.url}/${id}`).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as Dato;
	}
	async create(dato: Partial<Dato>): Promise<HttpResponse<Dato>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post(`${this.url}/create`, dato).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as HttpResponse<Dato>;
	}
	async update(dato: Partial<Dato>): Promise<HttpResponse<Dato>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.put(`${this.url}`, dato).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as HttpResponse<Dato>;
	}

	/*
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

export type HttpResponse<Dato> = {
	success: boolean;
	message: string;
	data: Dato;
};
