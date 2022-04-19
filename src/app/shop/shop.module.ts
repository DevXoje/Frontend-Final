import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { SHOP_ROUTES } from './shop.routes';

import * as shopContainers from './containers';
import { ProductModule } from '../product/product.module';

@NgModule({
  declarations: [
    ...shopContainers.containers
  ],
  imports: [
    CommonModule,
    AppCommonModule,
	ProductModule,
    SHOP_ROUTES,
  ]
})
export class ShopModule { }
