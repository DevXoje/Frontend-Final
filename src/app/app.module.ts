import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
	CUSTOM_ERROR_MESSAGES, NgBootstrapFormValidationModule
} from "ng-bootstrap-form-validation";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormProductComponent } from './core/shared/product/app/view/components/form-product/form-product.component';
import { FooterComponent } from '@shared/app-common/app/views/components/footer/footer.component';
import { CUSTOM_ERRORS } from "@shared/custom-errors";

import { ToastrModule } from 'ngx-toastr';
import { NgxsModule } from '@ngxs/store';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { environment } from '@environment/environment';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


// Custom Modules
import { AppCommonModule } from '@shared/app-common/app/app-common.module';
import { PublicModule } from '@public/public.module';
import { SecureModule } from '@secure/secure.module';

const customModules = [AppCommonModule, PublicModule, SecureModule];

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		...customModules,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		HttpClientModule,
		AppRoutingModule,
		NgBootstrapFormValidationModule,
		NgBootstrapFormValidationModule.forRoot(),
		ToastrModule.forRoot(),
		NgxsModule.forRoot([
			/* AuthState,
		   ProductState,
		   CategoryState,
		   CartState */
		], {
			developmentMode: !environment.production
		}),
		NgxsStoragePluginModule.forRoot(
			{ key: ['auth.token ', 'auth.email ', 'auth.name '] }
		),
		NgxsLoggerPluginModule.forRoot(),
		NgxsReduxDevtoolsPluginModule.forRoot(),
		TranslateModule.forRoot(
			{
				loader: {
					provide: TranslateLoader,
					useFactory: httpTranslateLoader,
					deps: [HttpClient]
				}
			}
		)
	],
	providers: [{
		provide: CUSTOM_ERROR_MESSAGES,
		useValue: CUSTOM_ERRORS,
		multi: true
	}, Title],
	bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http);
}