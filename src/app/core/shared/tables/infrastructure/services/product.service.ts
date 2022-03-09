import { DecimalPipe } from '@angular/common';
import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Product } from 'src/app/core/products/domain/Products';
import { ProductServiceInterface } from 'src/app/core/products/domain/ProductServiceInterface';
import { HttpProductAdapter } from './HttpProductAdapter';
import { SortDirection } from '@shared/tables/app/directives';
interface SearchResult {
	products: Product[];
	total: number;
}

interface State {
	page: number;
	pageSize: number;
	searchTerm: string;
	sortColumn: string;
	sortDirection: SortDirection;
}

export const compare = (v1: string | number | boolean, v2: string | number | boolean) => v1 < v2 ? -1 : v1 > v2 ? 1 : 0;

function sort(products: Product[], column: string, direction: string): Product[] {
	if (direction === '') {
		return products;
	} else {/*Coladero con any */
		return [...products].sort((a: any, b: any) => {
			const res = compare(a[column], b[column]);
			return direction === 'asc' ? res : -res;
		});
	}
}

function matches(product: Product, term: string, pipe: PipeTransform) {
	return (
		product.name.toLowerCase().includes(term.toLowerCase()) ||
		pipe.transform(product.name).includes(term) ||
		pipe.transform(product.description).includes(term)
	);
}

@Injectable({ providedIn: 'root' })
export class ProductService {
	private authUrl = environment.baseUrl + '/auth';
	private productService: ProductServiceInterface = new HttpProductAdapter(this.http, this.authUrl);



	private PRODUCTS!: Product[];

	private _loading$ = new BehaviorSubject<boolean>(true);
	private _search$ = new Subject<void>();
	private _products$ = new BehaviorSubject<Product[]>([]);
	private _total$ = new BehaviorSubject<number>(0);

	private _state: State = {
		page: 1,
		pageSize: 4,
		searchTerm: '',
		sortColumn: '',
		sortDirection: '',
	};

	constructor(private http: HttpClient) {
		/* this._search$
			.pipe(
				tap(() => this._loading$.next(true)),
				debounceTime(120),
				switchMap(() => this._search()),
				delay(120),
				tap(() => this._loading$.next(false))
			)
			.subscribe(result => {
				this._products$.next(result.products);
				this._total$.next(result.total);
			});

		this._search$.next(); */
	}

	get products$() {
		return this._products$.asObservable();
	}
	get total$() {
		return this._total$.asObservable();
	}
	get loading$() {
		return this._loading$.asObservable();
	}
	get page() {
		return this._state.page;
	}
	set page(page: number) {
		this._set({ page });
	}
	get pageSize() {
		return this._state.pageSize;
	}
	set pageSize(pageSize: number) {
		this._set({ pageSize });
	}
	get searchTerm() {
		return this._state.searchTerm;
	}
	set searchTerm(searchTerm: string) {
		this._set({ searchTerm });
	}
	set sortColumn(sortColumn: string) {
		this._set({ sortColumn });
	}
	set sortDirection(sortDirection: SortDirection) {
		this._set({ sortDirection });
	}

	private _set(patch: Partial<State>) {
		Object.assign(this._state, patch);
		this._search$.next();
	}

	private _search(): Observable<SearchResult> {
		const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

		// 1. sort
		let products = sort(this.PRODUCTS, sortColumn, sortDirection);

		// 2. filter
		/* products = products.filter(product => matches(product, searchTerm, this.pipe)); */
		const total = products.length;

		// 3. paginate
		products = products.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
		return of({ products, total });
	}

	getUsersObservable(): Observable<Product[]> {
		return from(this.productService.getProducts());
	}
	getUserObservable(id: number): Observable<Product> {
		return from(this.productService.getProduct(id));
	}
	getUsers(): Product[] {
		const productsFetched: Product[] = [];
		const observable = from(this.productService.getProducts());
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
			image: '',
			created_at: '',
			updated_at: ''
		};
		const observable = from(this.productService.getProduct(id));
		observable.subscribe(
			(product) => productFetched = product,
			(error: HttpErrorResponse) => console.error(`Service Error: ${error.message}`),
		);
		return productFetched;
	}
}
