import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
	CUSTOM_ERROR_MESSAGES, NgBootstrapFormValidationModule
} from "ng-bootstrap-form-validation";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LenguageFormComponent } from './components/lenguage-form/lenguage-form.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './components/login/login.component';
import { SortableHeaderDirective } from './directives/sortable-header.directive';
import { CUSTOM_ERRORS } from "./shared/custom-errors";
import { FooterComponent } from './shared/footer/footer.component';
import { FormProductComponent } from './shared/form-product/form-product.component';
import { ListComponent } from './shared/list/list.component';
import { NavComponent } from './shared/nav/nav.component';
import { FormComponent } from './shared/form/form.component';
import { FormAuthComponent } from './shared/form-auth/form-auth.component';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { NavAdminComponent } from './components/nav-admin/nav-admin.component';




@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		FooterComponent,
		LenguageFormComponent,
		ListUsersComponent,
		HomeComponent,
		LoginComponent,
		SortableHeaderDirective,
		ListProductsComponent,
		ListComponent,
		FormProductComponent,
  FormComponent,
  FormAuthComponent,
  HomeAdminComponent,
  NavAdminComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		FontAwesomeModule,
		RouterModule,
		NgbModule,
		HttpClientModule,
		AppRoutingModule,
		NgBootstrapFormValidationModule,
		NgBootstrapFormValidationModule.forRoot()
	],
	providers: [{
		provide: CUSTOM_ERROR_MESSAGES,
		useValue: CUSTOM_ERRORS,
		multi: true
	}],
	bootstrap: [AppComponent]
})
export class AppModule { }
