import { DecimalPipe } from '@angular/common';
import { Injectable, PipeTransform } from '@angular/core';
import { BehaviorSubject, from, Observable, of, Subject } from 'rxjs';
import { debounceTime, delay, switchMap, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { HttpClientAdapter } from './HttpClientAdapter';
import { CustomerServiceInterface } from './CustomerServiceInterface';
import { filter } from 'rxjs/operators';
import { Customer } from '../../domain/models';
import { SortDirection } from '../../app/directives';

interface SearchResult {
	customers: Customer[];
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

function sort(customers: Customer[], column: string, direction: string): Customer[] {
	if (direction === '') {
		return customers;
	} else {/*Coladero con any */
		return [...customers].sort((a: any, b: any) => {
			const res = compare(a[column], b[column]);
			return direction === 'asc' ? res : -res;
		});
	}
}

function matches(customer: Customer, term: string, pipe: PipeTransform) {
	return (
		customer.name.toLowerCase().includes(term.toLowerCase()) ||
		pipe.transform(customer.name).includes(term) ||
		pipe.transform(customer.email).includes(term)
	);
}

@Injectable({ providedIn: 'root' })
export class CustomerService {
	private authUrl = environment.baseUrl + '/auth';
	private userService: CustomerServiceInterface = new HttpClientAdapter(this.http, this.authUrl);

	private CUSTOMERS!: Customer[];

	private _loading$ = new BehaviorSubject<boolean>(true);
	private _search$ = new Subject<void>();
	private _customers$ = new BehaviorSubject<Customer[]>([]);
	private _total$ = new BehaviorSubject<number>(0);

	private _state: State = {
		page: 1,
		pageSize: 4,
		searchTerm: '',
		sortColumn: '',
		sortDirection: '',
	};

	constructor(private pipe: DecimalPipe, private http: HttpClient) {
		this._search$
			.pipe(
				tap(() => this._loading$.next(true)),
				debounceTime(120),
				switchMap(() => this._search()),
				delay(120),
				tap(() => this._loading$.next(false))
			)
			.subscribe(result => {
				this._customers$.next(result.customers);
				this._total$.next(result.total);
			});

		this._search$.next();
	}

	get customers$() {
		return this._customers$.asObservable();
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
		try {
			const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;

			// 1. sort
			let customers = sort(this.CUSTOMERS, sortColumn, sortDirection);

			// 2. filter
			customers = customers.filter(customer => matches(customer, searchTerm, this.pipe));
			const total = customers.length;

			// 3. paginate
			customers = customers.slice((page - 1) * pageSize, (page - 1) * pageSize + pageSize);
			return of({ customers, total });
		} catch (error) {
			/* console.error('Mi custom error: ', error); */
			return of({ customers: [], total: 0 });
		}

	}

	getUsersObservable(): Observable<Customer[]> {
		return from(this.userService.getUsers());
	}
	getUserObservable(id: number): Observable<Customer> {
		return from(this.userService.getUser(id));
	}
	getUsers(): Customer[] {
		const usersFetched: Customer[] = [];
		const observable = from(this.userService.getUsers());
		observable.subscribe(
			(users) => usersFetched.push(...users),
			(error: HttpErrorResponse) => console.error(`Error: ${error.message}`),
		);

		return usersFetched;
	}
	getUser(id: number): Customer {
		let userFetched: Customer = {
			id: 0,
			name: '',
			email: '',
			email_verified_at: new Date(),
			password: '',
			role: 'Customer',
			remenber_token: '',
			created_at: '',
			updated_at: ''
		};
		const observable = from(this.userService.getUser(id));
		observable.subscribe(
			(user) => userFetched = user,
			(error: HttpErrorResponse) => console.error(`Service Error: ${error.message}`),
		);
		return userFetched;
	}
}
