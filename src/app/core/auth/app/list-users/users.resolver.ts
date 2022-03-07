import { Injectable } from '@angular/core';
import {
	Router, Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Auth } from '../../domain/Auth';
import { AuthService } from '../../infrastructure/auth.service';

@Injectable({
	providedIn: 'root'
})
export class UsersResolver implements Resolve<Auth[]> {
	constructor(private authService: AuthService, private router: Router) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Auth[]> {
		return this.authService.getUsersObservable().pipe(
			catchError(e => {
				this.router.navigate(['/secure/home']);
				return of(null);
			})
		) as Observable<Auth[]>;
	}
}
