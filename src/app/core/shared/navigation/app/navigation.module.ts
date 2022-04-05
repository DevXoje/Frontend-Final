/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

//Modules
import { AppCommonModule } from '../../app-common/app/app-common.module';

//Components
import * as navigationComponents from './view/components';

//Containers
import * as navigationContainers from './view/containers';

//Layouts
import * as appCommonLayouts from './layouts';

//Guards
import * as navigationGuards from './routing/guards';

//Services
import * as navigationServices from '../infrastructure/services';

@NgModule({
	imports: [CommonModule, RouterModule, AppCommonModule, FormsModule],
	providers: [...navigationServices.services, ...navigationGuards.guards],
	declarations: [
		...navigationContainers.containers,
		...navigationComponents.components,
		...appCommonLayouts.layouts,
	],
	exports: [
		...navigationContainers.containers,
		...navigationComponents.components,
		...appCommonLayouts.layouts,
	],
})
export class NavigationModule { }
