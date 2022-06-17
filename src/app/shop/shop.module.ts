import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppCommonModule} from '../app-common/app-common.module';


import * as shopContainers from './containers';
import * as shopComponents from './components';
import {ShopLayoutComponent} from "./layout/shop.layout";
import {ShopRoutingModule} from "./routing/shop-routing";
import {CustomerModule} from "../customer/customer.module";
import {ProductModule} from "../product/product.module";

@NgModule({
	declarations: [...shopContainers.containers, ...shopComponents.components, ShopLayoutComponent],
	imports: [
		CommonModule,
		AppCommonModule,
		CustomerModule,
		ShopRoutingModule,
		ProductModule,
	],
	exports: [
		...shopComponents.components,
		ShopLayoutComponent,
	]
})
export class ShopModule {
	constructor() {
	}
}
