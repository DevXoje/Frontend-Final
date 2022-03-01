import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';

import { HomeComponent } from './components/home/home.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { FormAuthComponent } from './shared/form-auth/form-auth.component';
import { FormProductComponent } from './shared/form-product/form-product.component';


export const routes: Routes = [
	{ path: '', component: HomeComponent, data: { title: 'Home' } },
	{
		path: 'admin', component: HomeAdminComponent, children: [
			{ path: 'auth', component: ListUsersComponent },
			{ path: 'products', component: ListProductsComponent },
		]
	},
	{ path: '/product/crear', component: FormProductComponent, data: { title: 'Producto Cliente' } },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
