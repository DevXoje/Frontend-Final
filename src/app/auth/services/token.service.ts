import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class TokenService {
	private issuer = {
		login: environment.baseUrl + '/auth/login',
		register: environment.baseUrl + '/auth/register',
	};
	constructor(private jwtHelper: JwtHelperService) {}

	handleData(token: any) {
		localStorage.setItem('auth_token', token);
	}
	getToken(): string | undefined {
		if (localStorage.getItem('auth_token')) {
			return (localStorage.getItem('auth_token') as string).replace(
				/"/g,
				''
			);
		} else {
			return undefined;
		}
	}
	// Verify the token
	isValidToken(): boolean {
		return !this.jwtHelper.isTokenExpired(this.getToken());
		/* const token = this.getToken();
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
		return isValid; */
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
