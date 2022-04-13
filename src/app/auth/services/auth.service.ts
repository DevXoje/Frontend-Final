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

	private authMocked: Auth[] = [
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

	mockAuth(role = 'admin') {
		localStorage.setItem(
			'token',
			role == 'admin' ? mockAdmin : mockCustomer
		);
	}
	login(user: LoginData): Observable<LoginResponse
	> {
		return from(this.authService.login(user));
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
		return true;
		//return this.jwtHelper.decodeToken(token).role === 'admin';
	}
	isCustomer(token: string): boolean {
		return true;
		//return this.jwtHelper.decodeToken(token).role === 'customer';
	}
	checkRole(token: string) {
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
	checkToken(): string {
		return localStorage.getItem('token') as string;
	}
	printToken(): string {
		return  this.jwtHelper.decodeToken(this.checkToken());
	}
	getAll(): Observable<Auth[]> {
		//return of(this.authMocked);
		return from(this.authService.getAll());
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
