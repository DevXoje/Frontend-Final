import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home.component';





const shopRoutes: Routes = [
	{ path: '', component: HomeComponent },

];


export const SHOP_ROUTES = RouterModule.forChild(shopRoutes);
