import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {from, Observable, of} from 'rxjs';
import {HttpResponse} from 'src/app/app-common/services/HttpGenericAdapter';
import {environment} from 'src/environments/environment';
import {Product, ProductServiceInterface} from '../domain/product.model';
import {HttpProductAdapter} from './HttpProductAdapter';
import {DropDownInput, Field, TextInput} from "../../app-common/domain";
import {Validators} from "@angular/forms";
import {IntUnsignedInput} from "../../app-common/domain/fields/IntUnsignedInput";

@Injectable({providedIn: 'root'})
export class ProductService {
	$fields = [
		new TextInput({
			key: 'name',
			label: 'name',
			type: 'text',
			validators: [Validators.required],
			order: 1
		}),
		new TextInput({
			key: 'description',
			label: 'description',
			type: 'text',
			order: 2
		}),
		new IntUnsignedInput({
			key: 'price',
			label: 'price',
			order: 3
		}),
		new IntUnsignedInput({
			key: 'stock',
			label: 'stock',
			order: 4
		}),
		new TextInput({
			key: 'image',
			label: 'image',
			type: 'file',
			order: 5
		}),
		new DropDownInput({
			key: 'category',
			label: 'category',
			type: 'select',
			//placeholder: placeholders.name,
			options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
			order: 6
		}),
	];
	private productUrl = environment.baseUrl + '/products';
	private productService: ProductServiceInterface = new HttpProductAdapter(
		this.http,
		this.productUrl
	);

	constructor(private router: Router, private http: HttpClient) {
	}

	getAll(): Observable<HttpResponse<Product[]>> {
		return from(this.productService.getAll());
	}

	getById(id: number): Observable<HttpResponse<Product>> {
		return from(this.productService.getById(id));
	}

	create(product: Product): Observable<HttpResponse<Product>> {
		return from(this.productService.create(product));
	}

	delete(id: number): Observable<HttpResponse<Product>> {
		return from(this.productService.delete(id));
	}

	getFields(product?: Product): Observable<Field<string>[]> {
		return of(
			(!product) ? this.$fields : this.setPlaceHolders(this.$fields, product),
		);

	}

	setPlaceHolders(fields: Field<any>[], product: Product): Field<any>[] {
		fields.forEach(field => {
			if (field.key === 'name') {
				field.placeholder = product.name;
			}
			if (field.key === 'description') {
				field.placeholder = product.description;
			}
			if (field.key === 'price') {
				field.placeholder = product.price + "";
			}
			if (field.key === 'stock') {
				field.placeholder = product.stock + "";
			}
			if (field.key === 'image') {
				field.placeholder = product.image;
			}

		});
		return fields;
	}


}
