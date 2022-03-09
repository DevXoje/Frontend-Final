/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const angularNative = [CommonModule, RouterModule, FormsModule, ReactiveFormsModule];

//Third Party
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '@shared/icons/icons.module';

const thirdParty = [IconsModule, NgbModule];

//Containers
import * as appCommonContainers from './containers';

//Components
import * as appCommonComponents from './components';

//Guards
import * as appCommonGuards from './guards';

//Services
import * as appCommonServices from '../infrastructure/services';
import * as authServices from '@shared/auth/infrastructure/services';

@NgModule({
	imports: [...angularNative, ...thirdParty],
	providers: [...appCommonServices.services, ...authServices.services, ...appCommonGuards.guards],
	declarations: [...appCommonContainers.containers, ...appCommonComponents.components],
	exports: [...appCommonContainers.containers, ...appCommonComponents.components, ...thirdParty],
})
export class AppCommonModule { }
