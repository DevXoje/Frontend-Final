import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { from, Observable, of } from 'rxjs';
import {
	CreateResponse,
	HttpGenericAdapter,
} from 'src/app/app-common/services/HttpGenericAdapter';
import { environment } from 'src/environments/environment';
import {
	Auth,
	AuthServiceInterface,
	LoginData,
	LoginResponse,
	RegisterData,
	RestoreData,
} from '../domain/auth.model';
import { HttpAuthAdapter } from './HttpAuthAdapter';

const mockAdmin =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlhvamUgQWRtaW4iLCJpYXQiOjE1MTYyMzkwMjIsInJvbGUiOiJhZG1pbiJ9.2-k2VNsmSCVuI5ddpF6QelIIC7yUoHSOtg-y5nZbJiU'; //admin
const mockCustomer =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFtYW5kZXIgUHJpbmdhbyIsImlhdCI6MTUxNjIzOTAyMiwicm9sZSI6ImN1c3RvbWVyIn0.61r67MyEOMJVAmlx02xRBdF59RFBkFq9au9zSDpEhV4'; //customer

@Injectable({ providedIn: 'root' })
export class AuthService {
	private authUrl = environment.baseUrl + '/auth';
	private authService: AuthServiceInterface = new HttpAuthAdapter(
		this.http,
		this.authUrl
	);
	constructor(
		public jwtHelper: JwtHelperService,
		private router: Router,
		private http: HttpClient
	) {}

	login(user: LoginData): Observable<LoginResponse> {
		return from(this.authService.login(user));
	}
	restore(user: RestoreData): Observable<LoginResponse> {
		let loginResponse: Observable<LoginResponse> =
			new Observable<LoginResponse>();
		console.log(this.jwtHelper.decodeToken(user.token));
		this.getById(user.id).subscribe((auth) => {
			loginResponse = from(
				this.login({ email: auth.email, password: auth.password })
			);
		});
		return loginResponse;
	}
	logout(id: number): Observable<Auth> {
		localStorage.clear();

		this.router.navigateByUrl('/login');
		return of({} as Auth);
	}
	signup(user: RegisterData): Observable<CreateResponse<Auth>> {
		return from(this.authService.create(user));
	}
	public isAuthenticated(): boolean {
		const token = localStorage.getItem('token') as string;
		// Check whether the token is expired and return
		// true or false
		//return !this.jwtHelper.isTokenExpired(token);
		return true;
	}
	isAdmin(token: string): boolean {
		return this.jwtHelper.decodeToken(token).role === 'admin';
	}
	isCustomer(token: string): boolean {
		return this.jwtHelper.decodeToken(token).role === 'customer';
	}
	checkRole(token: string) {
		console.log(this.jwtHelper.decodeToken(token));
		let route = '';
		if (this.isAdmin(token)) {
			route = '/dashboard';
		} else if (this.isCustomer(token)) {
			route = '/home';
		} else {
			route = '/';
		}
		this.router.navigateByUrl(route);
	}
	getStoredToken(): LoginResponse {
		return JSON.parse(
			localStorage.getItem('token') as string
		) as LoginResponse;
	}
	printToken(): string {
		return this.jwtHelper.decodeToken(this.getStoredToken().access_token);
	}
	getAll(): Observable<Auth[]> {
		//return of(this.authMocked);
		return from(this.authService.getAll());
	}
	getById(id: number): Observable<Auth> {
		return from(this.authService.getById(id));
	}

	mockAuth(role = 'admin') {
		const authMocked: Auth[] = [
			{
				id: 1,
				email: 'admin',
				password: 'admin',
				role: 'admin',
				token: '',
			},
			{
				id: 1,
				email: 'admin',
				password: 'admin',
				role: 'admin',
				token: '',
			},
		];
		localStorage.setItem(
			'token',
			role == 'admin' ? mockAdmin : mockCustomer
		);
	}
	/* addAuth(book: Auth): Observable<Auth> {
    this.authMocked.push(book);
    return of(book);
  }
  getAuths(): Observable<Auth[]> {
    return of(this.authMocked);
  }
  updateAuth(book: Auth): Observable<Auth[]> {
    const { id } = book;
    this.authMocked = this.authMocked.filter((item) => item.id !== id);
    this.authMocked.push(book);
    console.log(this.authMocked);
    return of(this.authMocked);
  }
  deleteAuth(id: number): Observable<Auth[]> {
    this.authMocked = this.authMocked.filter((item) => item.id !== id);
    return of(this.authMocked);
  } */
}
