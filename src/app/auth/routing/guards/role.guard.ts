import { Injectable } from '@angular/core';
import {
	Router,
	CanActivate,
	ActivatedRouteSnapshot
} from '@angular/router';
import decode, { JwtDecodeOptions } from 'jwt-decode';
import { AuthService } from '../../services/auth.service';
@Injectable()
export class RoleGuard implements CanActivate {
	constructor(public authService: AuthService, public router: Router) { }
	canActivate(route: ActivatedRouteSnapshot): boolean {
		// this will be passed from the route config
		// on the data property
		//const expectedRole = route.data['expectedRole'];
		const expectedRole = "admin";
		const token = this.authService.checkToken();
		console.log('roleguard');

		// decode the token to get its payload
		const tokenPayload = decode<any>(token)// as any;
		if (
			!this.authService.isAuthenticated() ||
			tokenPayload.role !== expectedRole
		) {
			this.router.navigateByUrl('/login');
			return false;
		}
		return true;
	}
}