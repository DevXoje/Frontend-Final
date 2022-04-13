import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from '../app-common/app-common.module';
import { CUSTOMER_ROUTES } from './routing/customer.routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
	AppCommonModule,
	CUSTOMER_ROUTES
  ]
})
export class CustomerModule { }
