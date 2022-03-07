import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListProductsRoutingModule } from './list-products-routing.module';
import { ListProductsComponent } from './list-products.component';
import { ListModule } from '../../../shared/list/list.module';


@NgModule({
	declarations: [
		ListProductsComponent,
	],
	imports: [
		CommonModule,
		ListProductsRoutingModule,
		ListModule
	],
	exports:[ListProductsComponent]
})
export class ListProductsModule { }
