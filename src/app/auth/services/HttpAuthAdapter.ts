import {
	HttpClient,
	HttpErrorResponse,
	HttpHeaders,
} from '@angular/common/http';
import {
	CreateResponse,
	HttpGenericAdapter,
} from 'src/app/app-common/services/HttpGenericAdapter';
import {
	Auth,
	AuthServiceInterface,
	LoginData,
	LoginResponse,
	RestoreData,
} from '../domain/auth.model';

export class HttpAuthAdapter
	extends HttpGenericAdapter<Auth>
	implements AuthServiceInterface
{
	constructor(http: HttpClient, authUrl: string) {
		super(http, authUrl);
	}
	async login(user: LoginData): Promise<LoginResponse> {
		const payload = await new Promise((resolve, reject) => {
			this.http
				.post<LoginResponse>(this.url + '/login', user, {
					//headers: this.headers,
				})
				.subscribe({
					next: (data) => resolve(data),
					error: (err: HttpErrorResponse) => reject(err),
				});
		});
		console.log('loginResponse', payload);
		return payload as LoginResponse;
	}
	
}
