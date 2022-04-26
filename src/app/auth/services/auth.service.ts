import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { from, Observable, of } from 'rxjs';
import { HttpResponse } from 'src/app/app-common/services/HttpGenericAdapter';
import { environment } from 'src/environments/environment';
import {
	Auth,
	AuthServiceInterface,
	LoginData,
	LoginResponse,
	RegisterData,
} from '../domain/auth.model';
import { HttpAuthAdapter } from './HttpAuthAdapter';
import { TokenService } from './token.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private authUrl = environment.baseUrl + '/auth';
	private authService: AuthServiceInterface = new HttpAuthAdapter(
		this.http,
		this.authUrl
	);
	constructor(
		public jwtHelper: JwtHelperService,
		private http: HttpClient,
		private token: TokenService
	) {}

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
	getAll(): Observable<Auth[]> {
		return from(this.authService.getAll());
	}
	getById(id: number): Observable<Auth> {
		return from(this.authService.getById(id));
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
