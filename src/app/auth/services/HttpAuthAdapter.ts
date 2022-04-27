import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
	HttpGenericAdapter,
	HttpResponse,
} from 'src/app/app-common/services/HttpGenericAdapter';
import {
	Auth,
	AuthServiceInterface,
	LoginData,
	LoginResponse,
} from '../domain/auth.model';

export class HttpAuthAdapter
	extends HttpGenericAdapter<Auth>
	implements AuthServiceInterface
{
	constructor(
		http: HttpClient,
		authUrl: string
		//private token: TokenService
	) {
		super(http, authUrl);
	}
	async login(user: LoginData): Promise<HttpResponse<LoginResponse>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post<LoginResponse>(this.url + '/login', user).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as HttpResponse<LoginResponse>;
	}
	async restore(): Promise<HttpResponse<Auth>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<any>(this.url + '/profile').subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as HttpResponse<Auth>;
	}
	/* async getProfile(): Promise<LoginResponse> {	} */
}
