import { Injectable } from '@angular/core';
import {
	Router, Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';
import { Product } from '@shared/product/domain/product.model';
import { ProductService } from '@shared/product/infrastructure/services';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ProductResolver implements Resolve<Product> {
	constructor(
		private productsService: ProductService,
		private router: Router) { }

	resolve(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<Product>{
		return this.productsService.getProductObservable(route.params.id).pipe(

		) as Observable<Product>;
	}
}
