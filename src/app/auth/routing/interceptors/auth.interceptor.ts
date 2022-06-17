import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {catchError, Observable, throwError} from 'rxjs';
import {Router} from '@angular/router';
import {TokenService} from '../../services/token.service';
import {NotificationService} from "../../../app-common/services/notification.service";

@Injectable({
	providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
	constructor(private router: Router, private token: TokenService, private notificationService: NotificationService) {
	}

	intercept(
		req: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		console.log('Intercepted HTTP call', req);
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
				const errors: { [x: number]: Function } = {
					401: () => this.notificationService.showError("Unauthorized", "Credentials are invalid"),
					403: () => this.notificationService.showError("Forbidden", "You don't have permission to access this resource"),
					404: () => this.notificationService.showError("Not Found", "The requested resource was not found"),
					500: () => this.notificationService.showError("Internal Server Error", "Something went wrong"),
				};
				if (err.status in errors) {
					errors[err.status];//TODO return this and not throw error
				}
				return throwError(() => new Error(`Interceptor Error ${err.status} => ` + err.message)
				);
			})
		);
	}
}
