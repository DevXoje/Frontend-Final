import { Injectable } from '@angular/core';
import {
	Router,
	CanActivate,
	ActivatedRouteSnapshot
} from '@angular/router';
import { AuthService } from '@shared/auth/infrastructure/services';
import decode, { JwtPayload } from 'jwt-decode';
import { Observable, of } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class AuthRoleGuard implements CanActivate {
	constructor(public auth: AuthService, public router: Router) { }
	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		// this will be passed from the route config
		// on the data property
		const expectedRole = route.data.expectedRole;
		const token = localStorage.getItem('token') as string;
		// decode the token to get its payload
		//const tokenPayload = decode(token) as any;// as JwtPayload;
		/* if (
			!this.auth.isAuthenticated() ||
			tokenPayload.role !== expectedRole
		) {
			this.router.navigate(['login']);
			return of(false);
		}
		return of(true); */
		//Temporal hasta implemetar JWT
		if (!this.auth.isAuthenticated()) {
			alert('You are not logged in');
			this.router.navigate(['login']);
			return of(false);
		}
		return of(true);
	}
}
