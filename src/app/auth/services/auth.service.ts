import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {HttpResponse} from 'src/app/app-common/services/HttpGenericAdapter';
import {environment} from 'src/environments/environment';
import {Auth, AuthServiceInterface, LoginData, LoginResponse, RegisterData,} from '../domain/auth.model';
import {HttpAuthAdapter} from './HttpAuthAdapter';
import {Customer} from "../../customer/domain/customer.model";
import {NavigationExtras} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {
	private authUrl = environment.baseUrl + '/auth';
	private authService: AuthServiceInterface = new HttpAuthAdapter(
		this.http,
		this.authUrl
	);

	constructor(
		private http: HttpClient,
	) {
	}

	update(user: Partial<Customer>) {
		return from(this.authService.update(user));
	}

	login(user: LoginData): Observable<HttpResponse<LoginResponse>> {
		return from(this.authService.login(user));
	}

	restore(): Observable<HttpResponse<Auth>> {
		return from(this.authService.restore());
	}

	logout(): Observable<Auth> {
		localStorage.clear();

		return of({} as Auth);
	}

	signup(user: RegisterData): Observable<HttpResponse<Auth>> {
		return from(this.authService.create(user));
	}

	getAll(): Observable<HttpResponse<Auth[]>> {
		return from(this.authService.getAll());
	}

	getById(id: number): Observable<HttpResponse<Auth>> {
		return from(this.authService.getById(id));
	}

	getRouteByRole(role: string): any[] {
		const data: NavigationExtras = {
			queryParams: {
				role: role
			},
			fragment: '',
			queryParamsHandling: 'merge',
			preserveFragment: false
		};
		const routes: any = {
			admin: ['/dashboard'],
			customer: ['shop'],
		};
		return routes[role];
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
    return of(this.authMocked);
  }
  deleteAuth(id: number): Observable<Auth[]> {
    this.authMocked = this.authMocked.filter((item) => item.id !== id);
    return of(this.authMocked);
  } */
}
