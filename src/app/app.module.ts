import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { environment } from 'src/environments/environment';
import { AppCommonModule } from './app-common/app-common.module';

import { AppComponent } from './app.component';
import { AuthState } from './auth/state/auth.state';
import { JwtHelperService, JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { ProductState } from './product/state/product.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_ROUTES } from './app.routes';
import { OrderState } from './shop/state/shop.state';
@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		APP_ROUTES,
		AppCommonModule,
		NgxsModule.forRoot([AuthState, ProductState, OrderState], {
			developmentMode: !environment.production,
		}),
		NgxsReduxDevtoolsPluginModule.forRoot(),
		/* JwtModule.forRoot({
			config: {
				tokenGetter: () => {
					return localStorage.getItem('token');
				},
				//allowedDomains: ["example.com"],
				//disallowedRoutes: ["http://example.com/examplebadroute/"],
			},
		}), */
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
export class AppModule {}
