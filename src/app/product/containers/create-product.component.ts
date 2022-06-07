import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Field} from 'src/app/app-common/domain';
import {FieldControlService} from 'src/app/app-common/services/field-control.service';
import {Product} from '../domain/product.model';
import {CreateProduct, ProductState} from '../state';


@Component({
	selector: 'app-create-product',
	template: `
		<a routerLink="/dashboard">Return</a>
		<div>
			<h2>Create Product</h2>
			<app-form-product (sendPayload)="createHandler($event)"></app-form-product>
			<figure>
				<title>{{image.title}}</title>
				<img src="" alt="">
			</figure>
		</div> `
})
export class CreateProductComponent implements OnInit {//, TableCustom: edit,delete
	@Select(ProductState.getSelectedProduct) customer$?: Observable<Product>;
	fields$?: Observable<Field<any>[]>;
	fields: Field<string>[] = [];
	image = {
		title: '',
		image: ''
	}

	constructor(private store: Store, fieldService: FieldControlService) {

	}

	ngOnInit(): void {
		/*
		this.store.select(ProductState.getSelectedProduct).subscribe(product => {
			this.fields = [
				new TextInput({
					key: 'name',
					label: 'name',
					type: 'text',
					placeholder: product.name,
					validators: [Validators.required],
					order: 1
				}),
				new TextInput({
					key: 'description',
					label: 'description',
					type: 'text',
					placeholder: product.description,
					order: 2
				}),
				new TextInput({
					key: 'price',
					label: 'price',
					type: 'number',
					placeholder: product.price,
					order: 3
				}),
				new TextInput({
					key: 'stock',
					label: 'stock',
					type: 'number',
					placeholder: product.stock,
					order: 4
				}),
				new ImageInput({
					key: 'image',
					label: 'image',
					type: 'file',
					order: 5
				}),
				/*new DropDownInput({
					key: 'category',
					label: 'category',
					type: 'select',
					//placeholder: placeholders.name,
					options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
					order: 6
				}),*
	];
		this.fields$ = of(this.fields);
	});

* */
	}

	createHandler(event: any) {//TODO: tipar dato
		console.log(event);
		this.store.dispatch(new CreateProduct(event));
	}

}
