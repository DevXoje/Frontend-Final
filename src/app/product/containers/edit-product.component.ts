import {Component} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Field} from 'src/app/app-common/domain';
import {Product} from '../domain/product.model';
import {ProductState, SetSelectedProductToUpdate} from '../state';
import {HttpResponse} from "../../app-common/services/HttpGenericAdapter";
import {ActivatedRoute} from "@angular/router";


@Component({
	selector: 'app-edit-product',
	template: `
		<a routerLink="/dashboard">Return</a>

		<div>
			<h2>Edit Product</h2>
			<app-form-product (sendPayload)="editHandler($event)" [product]="product"></app-form-product>
			<figure>
				<title>{{image.title}}</title>
				<img src="" alt="">
			</figure>
		</div> `
})
export class EditProductComponent {//, TableCustom: edit,delete
	@Select(ProductState.getSelectedProduct) product$?: Observable<Product>;
	fields$?: Observable<Field<any>[]>;
	image = {
		title: '',
		image: ''
	}
	product?: Product;

	constructor(private store: Store, private route: ActivatedRoute) {
		const resp = this.route.snapshot.data["productResp"] as HttpResponse<Product>
		if (resp) {
			this.product = resp.data;
		}
	}

	editHandler(event: HttpResponse<Product>) {
		this.store.dispatch(new SetSelectedProductToUpdate(event.data));
	}

	/*ngOnInit(): void {
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
			key: 'quantity',
			label: 'quantity',
			type: 'number',
			placeholder: product.quantity,
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
		this.fields$ = of(this.fields);
	  });

	}*/

}
