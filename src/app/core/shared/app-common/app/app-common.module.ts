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

// Custom Modules
import { ListProductsModule } from '@shared/product/app/view/components/list-products/list-products.module';

const customModules: any[] = [];

//Containers
import * as appCommonContainers from './views/containers';

//Components
import * as appCommonComponents from './views/components';

//Guards
import * as appCommonGuards from './routing/guards';

//Interceptors
import * as appCommonInterceptors from './routing/interceptors';

//Services
import * as appCommonServices from '../infrastructure/services';
import * as authServices from '@shared/auth/infrastructure/services';

@NgModule({
	imports: [...angularNative, ...thirdParty, ...customModules],
	providers: [...appCommonServices.services, ...authServices.services, ...appCommonGuards.guards, ...appCommonInterceptors.interceptors],
	declarations: [...appCommonContainers.containers, ...appCommonComponents.components],
	exports: [...appCommonContainers.containers, ...appCommonComponents.components, ...thirdParty, ...customModules],
})
export class AppCommonModule { }
