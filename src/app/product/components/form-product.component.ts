import {Component, EventEmitter, Output} from "@angular/core";
import {DropDownInput, TextInput} from "../../app-common/domain";
import {Validators} from "@angular/forms";
import {HttpResponse} from "../../app-common/services/HttpGenericAdapter";
import {ActivatedRoute} from "@angular/router";
import {Product} from "../domain/product.model";

@Component({
	selector: 'app-form-product',
	template: `
		<app-form [fields]="fields$ | async" (sendPayload)="sendPayload.emit($event)"></app-form>`
})
export class FormProductComponent {
	fields$: any;
	@Output() sendPayload = new EventEmitter<HttpResponse<Product>>();

	constructor(private route: ActivatedRoute) {
		const resp = this.route.snapshot.data["productResp"] as HttpResponse<Product>
		const product = resp.data;
		if (false) {
			this.fields$ = [
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
		} else {
			this.fields$ = [
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
				new TextInput({
					key: 'price',
					label: 'price',
					type: 'number',
					order: 3
				}),
				new TextInput({
					key: 'quantity',
					label: 'quantity',
					type: 'number',
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
					options: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
					order: 6
				}),
			];
		}
	}
}
