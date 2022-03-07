import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from './public.component';
import { LoginComponent } from '../core/auth/app/login/login.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '../core/shared/form/form.component';
import { SignUpComponent } from '../core/auth/app/signup/signup.component';
import { PublicRoutingModule } from './public-routing.module';
import { SideNavItemComponent } from '../core/shared/side-nav-item/side-nav-item.component';



@NgModule({
	declarations: [
		PublicComponent,
		LoginComponent,
		SignUpComponent,
		NavComponent,
		FormComponent,
		SideNavItemComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		FontAwesomeModule,
		NgbModule,
		PublicRoutingModule
	]
})
export class PublicModule { }
