import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAdminComponent } from './components/secure/home-admin/home-admin.component';

import { HomeComponent } from './public/home/home.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginComponent } from './public/login/login.component';
import { PublicComponent } from './public/public.component';
import { SecureComponent } from './components/secure/secure.component';
import { FormAuthComponent } from './shared/form-auth/form-auth.component';
import { FormProductComponent } from './shared/form-product/form-product.component';
import { SignUpComponent } from './public/signup/signup.component';


export const routes: Routes = [
	{
		path: '',
		component: PublicComponent,
		children: [
			{ path: 'home', component: HomeComponent },
			{ path: 'login', component: LoginComponent },
			{ path: 'signup', component: SignUpComponent },
		]
	},
	{
		path: 'secure',
		component: SecureComponent,
		children: [{
			path: 'home',
			component: HomeAdminComponent,
			children: [
				{ path: 'auth', component: ListUsersComponent },
				{ path: 'products', component: ListProductsComponent },
			]
		}]
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
