import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TokenService} from '../../services/token.service';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(public token: TokenService, public router: Router) {
	}

	canActivate(): boolean {
		console.log('AuthGuard');

		if (!this.token.isValidToken()) {
			this.router.navigateByUrl('/login');
			return false;
		}
		return true;
	}
}
