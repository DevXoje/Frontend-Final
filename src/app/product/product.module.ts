import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AppCommonModule} from '../app-common/app-common.module';

import * as productComponents from './components'
import * as productContainers from './containers'
import {PRODUCT_ROUTES} from "./routes/product.routes";

@NgModule({
	declarations: [...productComponents.components, ...productContainers.containers],
	imports: [
		CommonModule,
		AppCommonModule,
		PRODUCT_ROUTES
	],
	exports: [...productComponents.components, ...productContainers.containers]
})
export class ProductModule {
}
