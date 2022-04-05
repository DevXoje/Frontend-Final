/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

/* Modules */
import { AppCommonModule } from '@shared/app-common/app/app-common.module';
import { NavigationModule } from '@shared/navigation/app/navigation.module';


/* Components */
import * as tablesComponents from './views/components';

/* Containers */
import * as tablesContainers from './views/containers';

/* Directives */
import * as tablesDirectives from './directives';

/* Guards */
import * as tablesGuards from './routing/guards';

/* Services */
import * as tablesServices from '../infrastructure/services';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		FormsModule,
		AppCommonModule,
		NavigationModule,
	],
	providers: [
		DecimalPipe,
		...tablesServices.services,
		...tablesGuards.guards,
		...tablesDirectives.directives,
	],
	declarations: [
		...tablesContainers.containers,
		...tablesComponents.components,
		...tablesDirectives.directives,
	],
	exports: [...tablesContainers.containers, ...tablesComponents.components],
})
export class TablesModule { }
