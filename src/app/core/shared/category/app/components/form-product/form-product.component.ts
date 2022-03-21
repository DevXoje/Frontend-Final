import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { Input } from '@shared/app-common/app/components/form/input';


@Component({
	selector: 'app-form-product',
	template: `
<h2>Creacion de Producto</h2>
<div class="row">
	<div class="col-md-6 col-md-offset-3">
		<form (validSubmit)="onSubmit()">
			<!-- <app-form [inputs]="inputs"></app-form> -->

		</form>
	</div>
</div>
`,
})
export class FormProductComponent {
	inputs: Input[] = [
		{
			id: 'name',
			name: 'Name',
			type: 'text',
			validators: [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(20)
			]
		},
		{
			id: 'description',
			name: 'Description',
			type: 'textarea',
			validators: [

			]
		},
		{
			id: 'price',
			name: 'Price',
			type: 'number',
			validators: [
				Validators.required,
				Validators.pattern(/^[0-9]{10}$/)

			]
		},
		/* 		{
					name: 'File',
					tipo: 'file',
					validators: [
						Validators.required,
					]
				}, */


	]
	constructor() { }
	onSubmit() {
		console.log('this.formGroup');
	}

}
