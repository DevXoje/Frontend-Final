import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
	CUSTOM_ERROR_MESSAGES, NgBootstrapFormValidationModule
} from "ng-bootstrap-form-validation";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LenguageFormComponent } from './components/lenguage-form/lenguage-form.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { SortableHeaderDirective } from './directives/sortable-header.directive';
import { CUSTOM_ERRORS } from "./shared/custom-errors";
import { FooterComponent } from './shared/footer/footer.component';
import { FormProductComponent } from './shared/form-product/form-product.component';
import { ListComponent } from './shared/list/list.component';
import { FormComponent } from './shared/form/form.component';
import { FormAuthComponent } from './shared/form-auth/form-auth.component';
import { HomeAdminComponent } from './components/secure/home-admin/home-admin.component';
import { NavAdminComponent } from './components/secure/nav-admin/nav-admin.component';
import { SecureComponent } from './components/secure/secure.component';
import { PublicModule } from './public/public.module';




@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		LenguageFormComponent,
		ListUsersComponent,
		SortableHeaderDirective,
		ListProductsComponent,
		ListComponent,
		FormProductComponent,
		FormAuthComponent,
		HomeAdminComponent,
		NavAdminComponent,
		SecureComponent,
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
		PublicModule
	],
	providers: [{
		provide: CUSTOM_ERROR_MESSAGES,
		useValue: CUSTOM_ERRORS,
		multi: true
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
