import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of, throwError } from 'rxjs';
import { catchError, retry, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';
import { HttpClientAdapter } from '../HttpClientAdapter';
import { AuthResponse } from '../AuthResponse';
import { SignUpData } from '@shared/app-common/app/components/form/sign-up-data';
import { LoginData } from '@shared/app-common/app/components/form/login-data';
import { Auth, AuthServiceInterface } from '@shared/auth/domain/auth.model';
import { NotificationService } from '@shared/app-common/infrastructure/services/notification.service';
import { NotificationType } from '@shared/app-common/domain/notification.message';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';


@Injectable({
	providedIn: 'root'
})
export class AuthService {

	private authUrl = environment.baseUrl + '/auth';
	private userService: AuthServiceInterface = new HttpClientAdapter(this.http, this.authUrl);
	constructor(
		private http: HttpClient,
		private notificationService: NotificationService,
		private router: Router
		/* , public jwtHelper: JwtHelperService */
	) { }
	isAuthenticated(): boolean {

		/* const token = localStorage.getItem('token') as string;
		// Check whether the token is expired and return
		// true or false
		return !this.jwtHelper.isTokenExpired(token); */
		return true;
	}
	getAuth$(): Observable<{}> {
		return of({});
	}
	getUsersObservable(): Observable<Auth[]> {
		return from(this.userService.getUsers());
	}
	getUserObservable(id: number): Observable<Auth> {
		return from(this.userService.getUser(id));
	}
	getUsers(): Auth[] {
		const usersFetched: Auth[] = [];
		const observable = from(this.userService.getUsers());
		observable.subscribe(
			(users) => usersFetched.push(...users),
			(error: HttpErrorResponse) => console.error(`Error: ${error.message}`),
		);

		return usersFetched;
	}
	async getUser(id: number): Promise<Auth> {
		let userFetched: Auth;
		return await from(this.userService.getUser(id)).toPromise()

		// return observable.subscribe(
		// 	(user) => user,
		// 	(error: HttpErrorResponse) => console.error(`Service Error: ${error.message}`),
		// );
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
	login(data: LoginData) {
		return this.http.post<AuthResponse>(this.authUrl + '/login', data)
			.subscribe(
				(data) => {
					console.log("User is logged in");
					this.router.navigateByUrl('/');
				},
				(error: HttpErrorResponse) => {
					console.error(`Error en login: ${error.message}`);
					/* this.notificationService.sendMessage({
						message: `Error creando evento: ${error.message}`,
						type: NotificationType.danger
					}) */
				},
			);
	}
	signUp(data: SignUpData) {
		return this.http.post<AuthResponse>(this.authUrl + '/signup', data)
			.pipe(
				catchError(
					(resp: HttpErrorResponse) => {
						//this.printErrors(resp.error);
						return throwError(`Error registrando usuario. Código de servidor: ${resp.status}. Mensaje: ${resp.message}`)
					}
				),
				map(response => response.user)
			);
	}
	printErrors(errors: any[]) {
		errors.forEach((error: any) => {
			const errorComplete = {
				name: Object.keys(error.constraints)[0],
				message: error.constraints[Object.keys(error.constraints)[0]]
			}
			alert(`${errorComplete.name}: ${errorComplete.message}`);
			/* this.notificationService.sendMessage({
				message: `${errorComplete.name}: ${errorComplete.message}`,
				type: NotificationType.warning
			}); */
		});
	}








}

