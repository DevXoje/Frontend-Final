import { HttpClient } from "@angular/common/http";
import { Customer } from "@shared/tables/domain/models";

import { CustomerServiceInterface } from "./CustomerServiceInterface";

export class HttpClientAdapter implements CustomerServiceInterface {
	constructor(private http: HttpClient, private url: string) { }
	async getUsers(): Promise<Customer[]> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Customer>(this.url).subscribe(
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
		return payload as Customer[]
	}
	async getUser(id: number): Promise<Customer> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Customer>(`${this.url}/${id}`).subscribe(
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
		return payload as Customer;
	}
	async createUser(user: Customer): Promise<Customer> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post<Customer>(this.url, user).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Customer;
	}
	async updateUser(user: Customer): Promise<Customer> {
		const payload = await new Promise((resolve, reject) => {
			this.http.put<Customer>(this.url + '/' + user.id, user).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Customer;
	}
	async deleteUser(id: number): Promise<Customer> {
		const payload = await new Promise((resolve, reject) => {
			this.http.delete<Customer>(this.url + '/' + id).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Customer;
	}
}
