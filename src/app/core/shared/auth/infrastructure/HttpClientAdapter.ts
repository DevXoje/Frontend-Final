import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Auth, AuthServiceInterface } from "@shared/auth/domain/auth.model";

export class HttpClientAdapter implements AuthServiceInterface {
	headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
		/* Authorization: 'my-auth-token' */
	})
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
		return payload as Auth[]
	}
	async getUser(id: number): Promise<any> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<Auth>(`${this.url}/${id}`).subscribe(
				(user) => {
					resolve(user)
				},
				(error) => {
					console.error('getUser Error: ', error.message);
					reject(error)
				}
			);
		});
		return payload as Auth;
	}
	async createUser(user: Auth): Promise<Auth> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post<Auth>(this.url, user, { headers: this.headers }).subscribe(
				(user) => resolve(user),
				(error) => {
					console.error('Error: ', error);
					reject(error)
				});
		});
		return payload as Auth;
	}
	async updateUser(user: Auth): Promise<Auth> {
		const payload = await new Promise((resolve, reject) => {
			this.http.put<Auth>(this.url + '/' + user.id, user).subscribe(
				(user) => resolve(user),
				(error) => {
					console.error('Error: ', error);
					reject(error)
				});
		});
		return payload as Auth;
	}
	async deleteUser(id: number): Promise<Auth> {
		const payload = await new Promise((resolve, reject) => {
			this.http.delete<Auth>(this.url + '/' + id).subscribe(
				(user) => resolve(user),
				(error) => {
					console.error('Error: ', error);
					reject(error)
				});
		});
		return payload as Auth;
	}
}
