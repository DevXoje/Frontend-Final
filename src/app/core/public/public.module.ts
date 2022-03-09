import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from '@public/public.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from '@shared/form/form.component';
import { PublicRoutingModule } from '@public/public-routing.module';
import { SideNavItemComponent } from '@shared/side-nav-item/side-nav-item.component';
import { SignUpComponent } from '@shared/auth/app/containers';



@NgModule({
	declarations: [
		PublicComponent,
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
