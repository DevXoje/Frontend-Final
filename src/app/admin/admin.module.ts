import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppCommonModule} from '../app-common/app-common.module';

import * as adminContainers from './containers';
import {DashboardLayoutComponent} from "./layout/dashboard.layout";
import {ShopModule} from "../shop/shop.module";
import {AdminRoutingModule} from "./routing/admin-routing";

@NgModule({
	declarations: [
		...adminContainers.containers,
		DashboardLayoutComponent
	],
	imports: [
		CommonModule,
		AppCommonModule,
		AdminRoutingModule,
		ShopModule,
	],
	exports: []
})
export class AdminModule {
}
