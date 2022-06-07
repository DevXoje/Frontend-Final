import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {finalize, Observable} from 'rxjs';
import {LoaderService} from '../../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
	totalRequests = 0;
	requestsCompleted = 0;

	constructor(private loader: LoaderService) {
	}

	intercept(
		request: HttpRequest<unknown>,
		next: HttpHandler
	): Observable<HttpEvent<unknown>> {
		this.loader.show();
		this.totalRequests++;

		return next.handle(request).pipe(
			finalize(() => {
				this.requestsCompleted++;
				if (this.requestsCompleted === this.totalRequests) {
					this.loader.hide();
					this.totalRequests = 0;
					this.requestsCompleted = 0;
				}
			})
		);
	}
}
