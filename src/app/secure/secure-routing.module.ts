import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../core/auth/app/login/login.component';
import { SignUpComponent } from '../core/auth/app/signup/signup.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { SecureComponent } from './secure.component';
console.log('SecureRoutingModule');

const routes: Routes = [
	{
		path: 'dashboard', loadChildren: () =>
			import('./dashboard/dashboard-routing.module').then(
				m => m.DashboardRoutingModule
			)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SecureRoutingModule { }
