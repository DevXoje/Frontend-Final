import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TokenService {
	private issuer = {
		login: environment.baseUrl + '/auth/login',
		register: environment.baseUrl + '/auth/register',
	};
	handleData(token: any) {
		localStorage.setItem('auth_token', token);
	}
	getToken(): string {
		return (localStorage.getItem('auth_token') as string).replace(/"/g, '');
	}
	// Verify the token
	isValidToken(): boolean {
		const token = this.getToken() as string;

		let isValid = false;
		if (token && token.length > 10) {
			const payload = this.payload(token);
			if (payload) {
				isValid =
					Object.values(this.issuer).indexOf(payload.iss) > -1
						? true
						: false;
			}
		}
		return isValid;
	}
	payload(token: any) {
		const jwtPayload = token.split('.')[1];
		return JSON.parse(atob(jwtPayload));
	}
	// User state based on valid token
	isLoggedIn() {
		return this.isValidToken();
	}
	// Remove token
	removeToken() {
		localStorage.removeItem('auth_token');
	}
}
