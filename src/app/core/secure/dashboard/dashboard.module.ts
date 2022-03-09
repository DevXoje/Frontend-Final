/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Modules
import { AppCommonModule } from '@shared/app-common/app/app-common.module';
import { NavigationModule } from '@shared/navigation/app/navigation.module';
import { TablesModule } from '@shared/tables/app/tables.module';
import { ChartsModule } from '@secure/charts/charts.module';

//Components
import * as dashboardComponents from './components';

//Containers
import * as dashboardContainers from './containers';

//Guards
import * as dashboardGuards from './guards';

//Services
import * as dashboardServices from './services';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		FormsModule,
		AppCommonModule,
		NavigationModule,
		ChartsModule,
		TablesModule,
	],
	providers: [...dashboardServices.services, ...dashboardGuards.guards],
	declarations: [...dashboardContainers.containers, ...dashboardComponents.components],
	exports: [...dashboardContainers.containers, ...dashboardComponents.components],
})
export class DashboardModule {

	constructor() { }
}
