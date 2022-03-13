import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicComponent } from '@public/public.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PublicRoutingModule } from '@public/public-routing.module';
import { SideNavItemComponent } from '@shared/side-nav-item/side-nav-item.component';



@NgModule({
	declarations: [
		PublicComponent,
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
