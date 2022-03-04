import { Injectable } from '@angular/core';
import {
	Router, Resolve,
	RouterStateSnapshot,
	ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../../domain/Products';
import { ProductService } from '../../infrastructure/product.service';

@Injectable({
	providedIn: 'root'
})
export class ProductsResolver implements Resolve<Product[]> {
	constructor(private productsService: ProductService, private router: Router) { }
	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product[]> {
		return this.productsService.getProductsObservable().pipe(
			catchError(e => {
				this.router.navigate(['/events']);
				return of(null);
			})
		) as Observable<Product[]>;
	}
}
