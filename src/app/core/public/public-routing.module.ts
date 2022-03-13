import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, SignUpComponent } from '@shared/auth/app/containers';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('@shared/auth/app/auth-routing.module')
				.then(m => m.AuthRoutingModule)
	},
	{
		path: 'tienda',
		/* loadChildren: () => */

	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublicRoutingModule { }
