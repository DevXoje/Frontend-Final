import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
	CUSTOM_ERROR_MESSAGES, NgBootstrapFormValidationModule
} from "ng-bootstrap-form-validation";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormProductComponent } from './core/shared/product/app/components/form-product/form-product.component';
import { ListProductsModule } from './core/shared/product/app/components/list-products/list-products.module';
import { FooterComponent } from '@shared/footer/footer.component';
import { CUSTOM_ERRORS } from "@shared/custom-errors";
import { PublicModule } from '@public/public.module';
import { SecureModule } from '@secure/secure.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxsModule } from '@ngxs/store';
import { environment } from '@environment/environment.prod';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ProductState } from '@shared/product/infrastructure/ngxs/product.state';
import { CategoryState } from '@shared/category/infrastructure/ngxs/category.state';
import { AuthState } from '@shared/auth/infrastructure/ngxs/auth.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';




@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		FormProductComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		HttpClientModule,
		AppRoutingModule,
		NgBootstrapFormValidationModule,
		PublicModule,
		ListProductsModule,
		SecureModule,
		NgBootstrapFormValidationModule.forRoot(),
		ToastrModule.forRoot(),
		NgxsModule.forRoot([
			AuthState,
			ProductState,
			CategoryState
		], {
			developmentMode: true,
		}),
		NgxsStoragePluginModule.forRoot(
			{ key: ['auth.token ', 'auth.email ', 'auth.name '] }
		),
		NgxsLoggerPluginModule.forRoot(),
		NgxsReduxDevtoolsPluginModule.forRoot(),
	],
	providers: [{
		provide: CUSTOM_ERROR_MESSAGES,
		useValue: CUSTOM_ERRORS,
		multi: true
	}, Title],
	bootstrap: [AppComponent]
})
export class AppModule { }
