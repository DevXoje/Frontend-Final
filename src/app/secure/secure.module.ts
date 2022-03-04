import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { NavAdminComponent } from './nav-admin/nav-admin.component';
import { RouterModule } from '@angular/router';
import { SecureRoutingModule } from './secure-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
	declarations: [
		SecureComponent,
		HomeAdminComponent,
		NavAdminComponent
	],
	imports: [
		CommonModule,
		RouterModule,
		SecureRoutingModule,
		ReactiveFormsModule,
		NgbModule,
		FontAwesomeModule

	]
})
export class SecureModule { }
