import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
	HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private router: Router) {}

	intercept(
		req: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		const token: string = localStorage.getItem('token') as string;

		let request = req;

		if (token) {
			request = req.clone({
				setHeaders: {
					authorization: `Bearer ${token}`,
				},
			});
		}

		return next.handle(request).pipe(
			catchError((err: HttpErrorResponse) => {
				if (err.status === 401) {
					this.router.navigateByUrl('/login');
				}
				return throwError(() => new Error(err.message));
			})
		);
	}
}