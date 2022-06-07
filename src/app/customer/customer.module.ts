import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppCommonModule} from '../app-common/app-common.module';
import {CUSTOMER_ROUTES} from './routing/customer.routes';

import * as customerContainers from './containers';
import {AuthModule} from "../auth/auth.module";

@NgModule({
	declarations: [...customerContainers.containers],
	imports: [CommonModule, AppCommonModule, CUSTOMER_ROUTES, AuthModule],
	exports: [...customerContainers.containers],
})
export class CustomerModule {
}
