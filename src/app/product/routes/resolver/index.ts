import {ProductResolver} from "./product.resolver";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";


export const resolvers = [
	{
		provide: ProductResolver,
		useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
		}
	}
];

export * from './product.resolver';
