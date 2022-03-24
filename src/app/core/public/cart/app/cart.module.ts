/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Modules
import { AppCommonModule } from '@shared/app-common/app/app-common.module';
import { NavigationModule } from '@shared/navigation/app/navigation.module';
import { TablesModule } from '@shared/tables/app/tables.module';


//Components
import * as cartComponents from './views/components/';

//Containers
import * as cartContainers from './views/containers';

//Guards
//import * as dashboardGuards from './guards';

//Services
import * as cartServices from '../infrastructure/services';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		FormsModule,
		AppCommonModule,
		NavigationModule,
		TablesModule,
	],
	providers: [...cartServices.services, /* ...dashboardGuards.guards */],
	declarations: [...cartContainers.containers, ...cartComponents.components],
	exports: [...cartContainers.containers, ...cartComponents.components],
})
export class CartModule {

	constructor() { }
}
