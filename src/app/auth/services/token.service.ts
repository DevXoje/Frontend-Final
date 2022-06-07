import {Injectable} from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import {environment} from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class TokenService {
	private issuer = {
		login: environment.baseUrl + '/auth/login',
		register: environment.baseUrl + '/auth/register',
	};

	constructor(private jwtHelper: JwtHelperService) {
	}

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

	isValidToken(): boolean {//TODO: check if token is expired, now not working well
		return !this.jwtHelper.isTokenExpired(this.getToken());
	}

	payload(token: any) {
		const jwtPayload = token.split('.')[1];
		return JSON.parse(atob(jwtPayload));
	}

	// Remove token
	removeToken() {
		localStorage.removeItem('auth_token');
	}

}
