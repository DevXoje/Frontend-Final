import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {HttpGenericAdapter, HttpResponse,} from 'src/app/app-common/services/HttpGenericAdapter';
import {Auth, AuthServiceInterface, LoginData, LoginResponse,} from '../domain/auth.model';
import {environment} from "../../../environments/environment";
import {Customer} from "../../customer/domain/customer.model";

export class HttpAuthAdapter
	extends HttpGenericAdapter<Auth>
	implements AuthServiceInterface {

	constructor(
		http: HttpClient,
		authUrl: string
		//private token: TokenService
	) {
		super(http, authUrl);
	}


	async login(user: LoginData): Promise<HttpResponse<LoginResponse>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post<LoginResponse>(environment.baseUrl + '/login', user).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as HttpResponse<LoginResponse>;
	}

	async restore(): Promise<HttpResponse<Auth>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.get<any>(environment.baseUrl + '/restore').subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as HttpResponse<Auth>;
	}

	override async update(dato: Partial<Customer>): Promise<HttpResponse<Customer>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.put(`${this.url}`, dato).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as HttpResponse<Customer>;
	}

	/*override async create(dato: Partial<Auth>): Promise<HttpResponse<Auth>> {
		const payload = await new Promise((resolve, reject) => {
			this.http.post(`${this.url}`, dato).subscribe({
				next: (data) => resolve(data),
				error: (err: HttpErrorResponse) => reject(err),
			});
		});
		return payload as HttpResponse<Auth>;
	}*/

	/* async getProfile(): Promise<LoginResponse> {	} */
}
