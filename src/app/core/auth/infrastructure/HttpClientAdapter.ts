import { HttpClient } from "@angular/common/http";
import { Auth } from "../domain/Auth";
import { AuthServiceInterface } from "../domain/AuthServiceInterface";

export class HttpClientAdapter implements AuthServiceInterface {
	constructor(private http: HttpClient, private url: string) { }
	async getUsers(): Promise<Auth[]> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Auth>(this.url).subscribe(
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
		return payload as Auth[]
	}
	async getUser(id: number): Promise<Auth> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Auth>(this.url + id).subscribe(
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
		return payload as Auth;
	}
	async createUser(user: Auth): Promise<Auth> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post<Auth>(this.url, user).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Auth;
	}
	async updateUser(user: Auth): Promise<Auth> {
		const payload = await new Promise((resolve, reject) => {
			this.http.put<Auth>(this.url + '/' + user.id, user).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Auth;
	}
	async deleteUser(id: number): Promise<Auth> {
		const payload = await new Promise((resolve, reject) => {
			this.http.delete<Auth>(this.url + '/' + id).subscribe(
				(user) => resolve(user),
				(error) => {
					console.log('Error: ', error);
					reject(error)
				});
		});
		console.log('PAYLOAD', payload);
		return payload as Auth;
	}
}
