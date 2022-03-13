import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@shared/auth/infrastructure/services';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(public auth: AuthService, public router: Router) { }
	canActivate():Observable <boolean> {
		if (!this.auth.isAuthenticated()) {
			alert('You are not logged in');
			this.router.navigate(['login']);
			return of(false);
		}
		return of(true);
	}
}
