import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {HttpResponse} from "../../app-common/services/HttpGenericAdapter";
import {Product} from "../domain/product.model";
import {ProductService} from "../services/product.service";
import {Observable} from "rxjs";

@Component({
	selector: 'app-form-product',
	template: `
		<app-form [fields]="fields$ | async" (sendPayload)="handlePayload($event)"></app-form>`
})
export class FormProductComponent implements OnInit {
	@Input() product?: Product;
	fields$?: Observable<any>;
	@Output() sendPayload = new EventEmitter<HttpResponse<Product>>();// TODO quiza refactor sin el HttpResponse

	constructor(private productService: ProductService) {
	}

	handlePayload(payload: any) {

		console.log(payload);
		this.sendPayload.emit(payload);
	}

	ngOnInit(): void {
		this.fields$ = this.productService.getFields(this.product);
	}
}
