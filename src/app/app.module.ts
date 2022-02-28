import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LenguageFormComponent } from './components/lenguage-form/lenguage-form.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SortableHeaderDirective } from './directives/sortable-header.directive';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListComponent } from './shared/list/list.component';

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
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		FontAwesomeModule,
		RouterModule,
		NgbModule,
		HttpClientModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
