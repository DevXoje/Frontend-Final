import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { Auth } from '../domain/Auth';
import { HttpClientAdapter } from '../infrastructure/HttpClientAdapter';
import { AuthServiceInterface } from '../domain/AuthServiceInterface';


@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private authUrl = environment.baseUrl + '/auth';
	private userService: AuthServiceInterface = new HttpClientAdapter(this.http, this.authUrl);
	constructor(private http: HttpClient) { }
	/* getUsers(): Observable<Auth[]> {
		return from(this.userService.getUsers());

	} */
	getUsers(): Auth[] {
		const usersFetched: Auth[] = [];
		const observable = from(this.userService.getUsers());
		observable.subscribe(
			(users) => usersFetched.push(...users),
			(error: HttpErrorResponse) => console.error(`Error: ${error.message}`),
		);

		return usersFetched;
	}
	getUser(id: number): Auth {
		let userFetched: Auth = {
			id: 0,
			name: '',
			email: '',
			email_verified_at: false,
			password: '',
			remenber_token: '',
			created_at: '',
			updated_at: ''
		};
		const observable = from(this.userService.getUser(id));
		observable.subscribe(
			(user) => userFetched = user,
			(error: HttpErrorResponse) => console.error(`Service Error: ${error.message}`),
		);

		return userFetched;
	}
	createUser(user: Auth): Observable<Auth> {
		return from(this.userService.createUser(user));
	}
	updateUser(user: Auth): Observable<Auth> {
		return from(this.userService.updateUser(user));
	}
	deleteUser(id: number): Observable<Auth> {
		return from(this.userService.deleteUser(id));
	}







}

