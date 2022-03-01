import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../shared/form/form.component';



@NgModule({
	declarations: [
		PublicComponent,
		LoginComponent,
		HomeComponent,
		NavComponent,
		FormComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		FontAwesomeModule,
		NgbModule
	]
})
export class PublicModule { }
