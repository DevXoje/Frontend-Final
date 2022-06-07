import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {catchError, Observable, of} from 'rxjs';
import {HttpResponse} from "../../../app-common/services/HttpGenericAdapter";
import {Product} from "../../domain/product.model";
import {ProductService} from "../../services/product.service";
import {Store} from "@ngxs/store";

@Injectable({
	providedIn: 'root'
})
export class ProductResolver implements Resolve<Observable<HttpResponse<Product>>> {
	constructor(private productService: ProductService, private store: Store) {
	}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<HttpResponse<Product>> {
		const id = parseInt(route.paramMap.get('id') as string);
		return this.productService.getById(id).pipe(
			catchError(e => {
				console.error(e);
				return of(null);
			})
		) as Observable<HttpResponse<Product>>;
	}
}
