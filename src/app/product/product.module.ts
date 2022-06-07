import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppCommonModule} from '../app-common/app-common.module';

import * as productComponents from './components';
import * as productContainers from './containers';
import {PRODUCT_ROUTES} from "./routes/product.routes";
import {AuthModule} from "../auth/auth.module";


@NgModule({
	declarations: [...productComponents.components, ...productContainers.containers],
	imports: [
		CommonModule,
		AppCommonModule,
		PRODUCT_ROUTES,
		AuthModule
	],
	exports: [...productComponents.components, ...productContainers.containers],
	providers: []
})
export class ProductModule {
}
