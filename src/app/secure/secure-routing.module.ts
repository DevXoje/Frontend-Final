import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../core/auth/app/login/login.component';
import { SignUpComponent } from '../core/auth/app/signup/signup.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SecureComponent } from './secure.component';

const routes: Routes = [
	{
		path: '', component: SecureComponent,
		children: [
			{ path: 'home', component: HomeAdminComponent, },
			{ path: 'auth', loadChildren: () => import('../core/auth/app/list-users/list-users.module').then(m => m.ListUsersModule) },
			{ path: 'products', loadChildren: () => import('../core/products/app/list-products/list-products.module').then(m => m.ListProductsModule) },
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SecureRoutingModule { }
