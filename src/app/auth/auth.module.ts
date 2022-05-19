import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppCommonModule} from '../app-common/app-common.module';

import * as authComponents from './components';
import * as authContainers from './containers';
import * as authGuards from './routing/guards';

import {AUTH_ROUTES} from './routing/auth.routes';

@NgModule({
	declarations: [...authComponents.components, ...authContainers.containers],
	imports: [CommonModule, AppCommonModule, AUTH_ROUTES],
	providers: [
		//JwtHelperService
		...authGuards.guards,
	],
	exports: [...authComponents.components],
})
export class AuthModule {
}
