import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../domain/Products';
import { ProductServiceInterface } from '../domain/ProductServiceInterface';
import { HttpProductAdapter } from '../infrastructure/product-adapter';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	private authUrl = environment.baseUrl + '/product';
	private productService: ProductServiceInterface = new HttpProductAdapter(this.http, this.authUrl);
	constructor(private http: HttpClient) { }
	/* getUsers(): Observable<Product[]> {
		return from(this.productService.getUsers());

	} */
	getUsers(): Product[] {
		const productsFetched: Product[] = [];
		const observable = from(this.productService.getUsers());
		observable.subscribe(
			(products) => productsFetched.push(...products),
			(error: HttpErrorResponse) => console.error(`Error: ${error.message}`),
		);

		return productsFetched;
	}
	getUser(id: number): Product {
		let productFetched: Product = {
			id: 0,
			name: '',
			description: '',
			price: 0,
			created_at: '',
			updated_at: '',
			image: ''
		};
		const observable = from(this.productService.getUser(id));
		observable.subscribe(
			(product) => productFetched = product,
			(error: HttpErrorResponse) => console.error(`Service Error: ${error.message}`),
		);

		return productFetched;
	}
	createUser(product: Product): Observable<Product> {
		return from(this.productService.createUser(product));
	}
	updateUser(product: Product): Observable<Product> {
		return from(this.productService.updateUser(product));
	}
	deleteUser(id: number): Observable<Product> {
		return from(this.productService.deleteUser(id));
	}
}
