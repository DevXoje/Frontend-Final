import {HttpClient, HttpErrorResponse} from '@angular/common/http';

export class HttpGenericAdapter<Dato> implements HttpGenericService<Dato> {
	constructor(protected http: HttpClient, protected url: string) {
	}

	async getAll(): Promise<HttpResponse<Dato[]>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Dato[]>(`${this.url}`).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as HttpResponse<Dato[]>;
	}

	async getById(id: number): Promise<HttpResponse<Dato>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Dato>(`${this.url}/${id}`).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as HttpResponse<Dato>;
	}

	async create(dato: Partial<Dato>): Promise<HttpResponse<Dato>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post(`${this.url}`, dato).subscribe({
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

	async delete(id: number): Promise<HttpResponse<Dato>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.delete<Dato>(this.url + '/' + id).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});

		});
		return payload as HttpResponse<Dato>;
	}
}

export type HttpResponse<Dato> = {
	success: boolean;
	message: string;
	data: Dato;
};
export type HttpGenericService<Dato> = {
	getAll: () => Promise<HttpResponse<Dato[]>>;
	getById: (id: number) => Promise<HttpResponse<Dato>>;
	create: (dato: Partial<Dato>) => Promise<HttpResponse<Dato>>;
	update: (dato: Partial<Dato>) => Promise<HttpResponse<Dato>>;
	delete: (id: number) => Promise<HttpResponse<Dato>>;
};
