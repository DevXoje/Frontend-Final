import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppCommonModule} from '../app-common/app-common.module';


import * as shopContainers from './containers';
import * as shopComponents from './components';
import {ProductModule} from '../product/product.module';
import {CustomerModule} from '../customer/customer.module';
import {SHOP_ROUTES} from './routing/shop.routes';

@NgModule({
	declarations: [...shopContainers.containers, ...shopComponents.components],
	imports: [
		CommonModule,
		AppCommonModule,
		ProductModule,
		CustomerModule,
		SHOP_ROUTES,
		/* NgxStripeModule.forRoot(environment.stripePK), */
	],
	exports: [
		...shopComponents.components,
	]
})
export class ShopModule {
}
