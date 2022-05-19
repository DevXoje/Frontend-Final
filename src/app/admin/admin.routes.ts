import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./containers";
import {RoleGuard} from "../auth/routing/guards";
import {EditProductComponent} from "../product/containers";

const adminRoutes: Routes = [
	{
		path: 'main', component: DashboardComponent,
		canLoad: [],
		canActivate: [RoleGuard]
	},
	{path: 'product/edit/:id', component: EditProductComponent},

];

export const ADMIN_ROUTES = RouterModule.forChild(adminRoutes);
