/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//Modules
import { AppCommonModule } from '@shared/app-common/app/app-common.module';
import { NavigationModule } from '@shared/navigation/app/navigation.module';


//Components
import * as authComponents from './views/components';

//Containers
import * as authContainers from './views/containers';

//Guards
import * as authGuards from './routing/guards';

//Services
import * as authServices from '../infrastructure/services';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from '../infrastructure/ngxs/auth.state';


@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		ReactiveFormsModule,
		FormsModule,
		AppCommonModule,
		NavigationModule,
		NgxsModule.forFeature([AuthState])
	],
	providers: [...authServices.services, ...authGuards.guards],
	declarations: [...authContainers.containers, ...authComponents.components],
	exports: [...authContainers.containers, ...authComponents.components],
})
export class AuthModule { }
