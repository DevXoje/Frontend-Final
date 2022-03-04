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
import { FormUserComponent } from './core/auth/app/form-user/form-user.component';
import { FormProductComponent } from './core/products/app/form-product/form-product.component';
import { ListProductsModule } from './core/products/app/list-products/list-products.module';
import { FooterComponent } from './core/shared/footer/footer.component';
import { LenguageFormComponent } from './core/shared/lenguage-form/lenguage-form.component';
import { CUSTOM_ERRORS } from "./custom-errors";
import { PublicModule } from './public/public.module';
import { SecureModule } from './secure/secure.module';




@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		LenguageFormComponent,
		FormProductComponent,
		FormUserComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		HttpClientModule,
		AppRoutingModule,
		NgBootstrapFormValidationModule,
		NgBootstrapFormValidationModule.forRoot(),
		PublicModule,
		ListProductsModule,
		SecureModule
	],
	providers: [{
		provide: CUSTOM_ERROR_MESSAGES,
		useValue: CUSTOM_ERRORS,
		multi: true
	}, Title],
	bootstrap: [AppComponent]
})
export class AppModule { }
