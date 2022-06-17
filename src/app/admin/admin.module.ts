import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppCommonModule} from '../app-common/app-common.module';

import * as adminContainers from './containers';
import * as adminComponents from './components';
import {DashboardLayoutComponent} from "./layout/dashboard.layout";
import {ShopModule} from "../shop/shop.module";
import {AdminRoutingModule} from "./routing/admin-routing";
import {ProductModule} from "../product/product.module";

@NgModule({
	declarations: [
		...adminContainers.containers,
		...adminComponents.components,
		DashboardLayoutComponent,
	],
	imports: [
		CommonModule,
		AppCommonModule,
		AdminRoutingModule,
		ShopModule,
		ProductModule,
	],
	exports: []
})
export class AdminModule {
}
