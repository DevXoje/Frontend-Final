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
import * as storeComponents from './views/components';

//Containers
import * as storeContainers from './views/containers';
import { NgxsModule } from '@ngxs/store';
import { ProductState } from '@shared/product/infrastructure/ngxs/product.state';
import { CategoryState } from '@shared/category/infrastructure/ngxs/category.state';

//Guards
//import * as dashboardGuards from './guards';

//Services
//import * as dashboardServices from './services';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		FormsModule,
		AppCommonModule,
		NavigationModule,
		TablesModule,
		NgxsModule.forFeature([ProductState,CategoryState])

	],
	//providers: [...dashboardServices.services, ...dashboardGuards.guards],
	declarations: [...storeContainers.containers, ...storeComponents.components],
	exports: [...storeContainers.containers, ...storeComponents.components],
})
export class StoreModule {

	constructor() { }
}
