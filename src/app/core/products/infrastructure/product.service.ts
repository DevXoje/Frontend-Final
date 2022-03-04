import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Product } from '../domain/Products';
import { ProductServiceInterface } from '../domain/ProductServiceInterface';
import { HttpProductAdapter } from './HttpProductAdapter';

@Injectable({
	providedIn: 'root'
})
export class ProductService {

	private authUrl = environment.baseUrl + '/product';
	private productService: ProductServiceInterface = new HttpProductAdapter(this.http, this.authUrl);
	constructor(private http: HttpClient) { }
	/* getProducts(): Observable<Product[]> {
		return from(this.productService.getProducts());

	} */
	getProducts(): Product[] {
		const productsFetched: Product[] = [];
		const observable = from(this.productService.getProducts());
		observable.subscribe(
			(products) => productsFetched.push(...products),
			(error: HttpErrorResponse) => console.error(`Error: ${error.message}`),
		);

		return productsFetched;
	}
	getProductsObservable(): Observable<Product[]> {
		return from(this.productService.getProducts());
	}

	getProduct(id: number): Product {
		let productFetched: Product = {
			id: 0,
			name: '',
			description: '',
			price: 0,
			created_at: '',
			updated_at: '',
			image: ''
		};
		const observable = from(this.productService.getProduct(id));
		observable.subscribe(
			(product) => productFetched = product,
			(error: HttpErrorResponse) => console.error(`Service Error: ${error.message}`),
		);

		return productFetched;
	}
	createProduct(product: Product): Observable<Product> {
		return from(this.productService.createProduct(product));
	}
	updateProduct(product: Product): Observable<Product> {
		return from(this.productService.updateProduct(product));
	}
	deleteProduct(id: number): Observable<Product> {
		return from(this.productService.deleteProduct(id));
	}
}
