import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppCommonModule} from '../app-common/app-common.module';

import * as adminContainers from './containers';
import {ProductModule} from '../product/product.module';
import {AuthModule} from '../auth/auth.module';
import {ADMIN_ROUTES} from "./admin.routes";
import {ShopModule} from "../shop/shop.module";

@NgModule({
	declarations: [
		...adminContainers.containers
	],
	imports: [
		CommonModule,
		AppCommonModule,
		ProductModule,
		AuthModule,
		ADMIN_ROUTES,
		ShopModule,
	]
})
export class AdminModule {
}
