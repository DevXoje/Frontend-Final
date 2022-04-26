import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';
import { SHOP_ROUTES } from './shop.routes';

import * as shopContainers from './containers';
import * as shopComponents from './components';
import { ProductModule } from '../product/product.module';
import { CustomerModule } from '../customer/customer.module';

@NgModule({
	declarations: [...shopContainers.containers, ...shopComponents.components],
	imports: [
		CommonModule,
		AppCommonModule,
		ProductModule,
		CustomerModule,
		SHOP_ROUTES,
	],
})
export class ShopModule {}
