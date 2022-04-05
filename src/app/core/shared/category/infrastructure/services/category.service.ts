import { DecimalPipe } from '@angular/common';
import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

import { HttpCategoryAdapter } from '../HttpCategoryAdapter';
import { SortDirection } from '@shared/tables/app/directives';
import { Category } from '@shared/category/domain/category.model';
import { CategoryServiceInterface } from '@shared/category/domain/CategoryServiceInterface';


@Injectable({ providedIn: 'root' })
export class CategoryService {
	private authUrl = environment.baseUrl + '/category';
	private categoryService: CategoryServiceInterface = new HttpCategoryAdapter(this.http, this.authUrl);

	private CATEGORIES!: Category[];

	private _loading$ = new BehaviorSubject<boolean>(true);
	private _categories$ = new BehaviorSubject<Category[]>([]);
	private _total$ = new BehaviorSubject<number>(0);

	constructor(private http: HttpClient) { }

	get categories$() {
		return this._categories$.asObservable();
	}
	get total$() {
		return this._total$.asObservable();
	}
	get loading$() {
		return this._loading$.asObservable();
	}

	getCategoriesObservable(): Observable<Category[]> {
		const promise = this.categoryService.getCategories();
		promise.then(
			(categories) => console.log(categories)

		);
		console.log('getCategoriesObservable');

		return from(this.categoryService.getCategories());
	}
	getCategoryObservable(id: number): Observable<Category> {
		return from(this.categoryService.getCategory(id));
	}
	getCategories(): Category[] {
		const categoriesFetched: Category[] = [];
		const observable = from(this.categoryService.getCategories());
		observable.subscribe(
			(categories) => categoriesFetched.push(...categories),
			(error: HttpErrorResponse) => console.error(`Error: ${error.message}`),
		);

		return categoriesFetched;
	}
	getCategory(id: number): Category {
		let categoryFetched!: Category;
		const observable = from(this.categoryService.getCategory(id));
		observable.subscribe(
			(category) => categoryFetched = category,
			(error: HttpErrorResponse) => console.error(`Service Error: ${error.message}`),
		);
		return categoryFetched;
	}
	updateCategory(category: Category): Observable<Category> {
		return from(this.categoryService.updateCategory(category));
	}
	deleteCategory(id: number): Observable<any> {
		return from(this.categoryService.deleteCategory(id));
	}
}