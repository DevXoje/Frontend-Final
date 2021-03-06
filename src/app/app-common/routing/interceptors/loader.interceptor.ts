import { Injectable } from '@angular/core';
import {
	HttpResponse,
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable, Observer } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
	totalRequests = 0;
	requestsCompleted = 0;

	constructor(private loader: LoaderService) {}

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
