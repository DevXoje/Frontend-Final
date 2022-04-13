import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Select } from '@ngxs/store';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { DropDownInput, Field, TextInput } from 'src/app/app-common/domain';
import { FieldControlService } from 'src/app/app-common/services/field-control.service';
import { Product } from '../domain/product.model';
import { SetSelectedProductToUpdate } from '../state/product.actions';
import { ProductState } from '../state/product.state';


@Component({
  selector: 'app-edit-product',
  template: `
  <div>
	<h2>Job Application for Heroes</h2>
	<app-form [fields]="fields$ | async" (sendPayload)="editHandler($event)"></app-form>
  <figure>
    <title>{{image.title}}</title>
  <img src="" alt="">
  </figure>
</div> `
})
export class EditProductComponent implements OnInit {//, TableCustom: edit,delete
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

  }
  editHandler(event: Product) {
    this.store.dispatch(new SetSelectedProductToUpdate(event));
  }

}
