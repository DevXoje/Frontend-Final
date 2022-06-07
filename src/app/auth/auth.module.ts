import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppCommonModule} from '../app-common/app-common.module';

import * as authComponents from './components';
import * as authContainers from './containers';
import {LoginComponent} from './containers';
import * as authGuards from './routing/guards';
import {AuthLayoutComponent} from "./layout/auth.layout";
import {AuthRoutingModule} from "./routing/auth-routing";

@NgModule({
	declarations: [...authComponents.components, ...authContainers.containers, AuthLayoutComponent],
	imports: [
		CommonModule,
		AppCommonModule,
		AuthRoutingModule],
	providers: [
		//JwtHelperService
		...authGuards.guards,
	],
	exports: [...authComponents.components, LoginComponent],
})
export class AuthModule {
	constructor() {
	}
}
