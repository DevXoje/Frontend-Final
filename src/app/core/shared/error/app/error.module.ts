/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Modules
import { AppCommonModule } from '@shared/app-common/app/app-common.module';
import { NavigationModule } from '@shared/navigation/app/navigation.module';

//Components
import * as errorComponents from './views/components';

//Containers
import * as errorContainers from './views/containers';

//Guards
import * as errorGuards from './routing/guards';

//Services
import * as errorServices from '../infrastructure/services';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		FormsModule,
		AppCommonModule,
		NavigationModule,
	],
	providers: [...errorServices.services, ...errorGuards.guards],
	declarations: [...errorContainers.containers, ...errorComponents.components],
	exports: [...errorContainers.containers, ...errorComponents.components],
})
export class ErrorModule { }
