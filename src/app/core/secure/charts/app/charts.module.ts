/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Modules
import { AppCommonModule } from '@shared/app-common/app/app-common.module';
import { NavigationModule } from '@shared/navigation/app/navigation.module';

//Components
import * as chartsComponents from './views/components';

//Containers
import * as chartsContainers from './views/containers';

//Guards
import * as chartsGuards from './routing/guards';

//Services
import * as chartsServices from '../infrastructure/services';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		FormsModule,
		AppCommonModule,
		NavigationModule,
	],
	providers: [...chartsServices.services, ...chartsGuards.guards],
	declarations: [...chartsContainers.containers, ...chartsComponents.components],
	exports: [...chartsContainers.containers, ...chartsComponents.components],
})
export class ChartsModule { }
