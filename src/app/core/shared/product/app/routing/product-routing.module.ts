/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@shared/navigation/domain/models';

//Module
import { ProductModule } from '../product.module';

//Containers
import * as authContainers from '../view/containers';

//Guards
import * as authGuards from './guards';

//Routes
export const ROUTES: Routes = [
	
];

@NgModule({
	imports: [ProductModule, RouterModule.forChild(ROUTES)],
	exports: [RouterModule],
})
export class ProductRoutingModule { }
