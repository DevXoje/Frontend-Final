import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {TokenService} from '../../services/token.service';
import {Select, Store} from "@ngxs/store";
import {AuthState} from "../../state";
import {Observable, of} from "rxjs";
import {Auth} from "../../domain/auth.model";

@Injectable()
export class RoleGuard implements CanActivate {
	@Select(AuthState.getSelectedAuth) auth$?: Observable<Auth>;

	/*
	* 	@Select(OrderState.getSelectedOrder)
	order$?: Observable<Order>;
	* */
	constructor(
		public authService: AuthService,
		public router: Router,
		private token: TokenService,
		private store: Store
	) {
	}

	canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
		let canPass: Observable<boolean> = new Observable<boolean>();
		if (!this.token.isValidToken()) {
			this.token.removeToken();
			this.router.navigateByUrl('/shop');
			canPass = of(false);
		} else {
			this.auth$?.subscribe((auth: Auth) => {
				canPass = of(auth.role === 'admin');
			});
		}
		return canPass;

	}
}
