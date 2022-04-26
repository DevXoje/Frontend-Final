import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { TokenService } from '../../services/token.service';
@Injectable()
export class AuthGuard implements CanActivate {
	constructor(public token: TokenService, public router: Router) {}
	canActivate(): boolean {
		if (!this.token.isValidToken()) {
			this.router.navigateByUrl('/login');
			return false;
		}
		return true;
	}
}
