import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {JWT_OPTIONS, JwtHelperService} from '@auth0/angular-jwt';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';

import {environment} from 'src/environments/environment';
import {AppCommonModule} from './app-common/app-common.module';

import {ProductState} from './product/state';
import {OrderState} from './shop/state';
import {AuthState} from './auth/state';

import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		AppCommonModule,
		NgxsModule.forRoot([
			AuthState,
			ProductState,
			OrderState], {
			developmentMode: !environment.production,
		}),
		NgxsReduxDevtoolsPluginModule.forRoot(),
  NgbModule,


	],
	providers: [
		{
			provide: JWT_OPTIONS,
			useValue: JWT_OPTIONS,
			//useClass: JwtHelperService,
		},
		JwtHelperService,
		//...authInterceptors.interceptors,
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
