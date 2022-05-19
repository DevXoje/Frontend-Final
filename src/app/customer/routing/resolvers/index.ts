import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

export const interceptors = [

	{
		provide: HTTP_INTERCEPTORS,
		useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
			console.log('interceptor');
		},
	}
];

export * from './customer.resolver';
