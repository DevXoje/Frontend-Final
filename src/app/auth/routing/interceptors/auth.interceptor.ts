import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';

@Injectable({
	providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
	constructor(private router: Router, private token: TokenService) {
	}

	intercept(
		req: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		let authReq = req;
		if (this.token.isValidToken()) {
			authReq = req.clone({
				setHeaders: {
					Authorization: `Bearer ${this.token.getToken()}`,
				},
			});
		}
		return next.handle(authReq).pipe(
			catchError((err: HttpErrorResponse) => {
				return throwError(() => new Error(err.message)
				);
			})
		);
	}
}
