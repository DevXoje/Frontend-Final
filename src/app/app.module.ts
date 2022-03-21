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
import { LenguageFormComponent } from '@shared/lenguage-form/lenguage-form.component';
import { CUSTOM_ERRORS } from "@shared/custom-errors";
import { PublicModule } from '@public/public.module';
import { SecureModule } from '@secure/secure.module';
import { ToastrModule } from 'ngx-toastr';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from 'src/state/auth.state';




@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		LenguageFormComponent,
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
		NgxsModule.forRoot([AuthState], {}),
	],
	providers: [{
		provide: CUSTOM_ERROR_MESSAGES,
		useValue: CUSTOM_ERRORS,
		multi: true
	}, Title],
	bootstrap: [AppComponent]
})
export class AppModule { }
