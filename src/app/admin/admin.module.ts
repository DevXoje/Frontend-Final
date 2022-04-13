import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AppCommonModule } from '../app-common/app-common.module';

import * as adminContainers from './containers';
import { ProductModule } from '../product/product.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    ...adminContainers.containers
  ],
  imports: [
    CommonModule,
    AppCommonModule,
    ProductModule,
    AuthModule,
    AdminRoutingModule,
  ]
})
export class AdminModule { }
