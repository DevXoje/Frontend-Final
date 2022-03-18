/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Modules
import { AppCommonModule } from '@shared/app-common/app/app-common.module';
import { NavigationModule } from '@shared/navigation/app/navigation.module';


//Components
import * as authComponents from './components';

//Containers
import * as authContainers from './containers';

//Guards
import * as authGuards from './guards';

//Services
import * as authServices from '../infrastructure/services';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		FormsModule,
		AppCommonModule,
		NavigationModule
	],
	providers: [...authServices.services, ...authGuards.guards],
	declarations: [...authContainers.containers, ...authComponents.components],
	exports: [...authContainers.containers, ...authComponents.components],
})
export class ProductModule { }
