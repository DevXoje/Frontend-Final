import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecureComponent } from '@secure/secure.component';

const routes: Routes = [
	{ path: '', component: SecureComponent },
	{
		path: 'dashboard',
		loadChildren: () =>
			import('@secure/dashboard/dashboard-routing.module')
				.then(m => m.DashboardRoutingModule)
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SecureRoutingModule { }
