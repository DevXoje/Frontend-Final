import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecureComponent } from './secure.component';
import { RouterModule } from '@angular/router';
import { SecureRoutingModule } from './secure-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ListProductsModule } from '../shared/product/app/view/components/list-products/list-products.module';



@NgModule({
	declarations: [
		SecureComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		SecureRoutingModule,
		ReactiveFormsModule,
		NgbModule,
		FontAwesomeModule,
	]
})
export class SecureModule {
	constructor() { }
}
