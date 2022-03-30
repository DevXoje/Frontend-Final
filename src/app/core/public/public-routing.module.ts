import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, SignUpComponent } from '@shared/auth/app/views/containers';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('@shared/auth/app/routing/auth-routing.module')
				.then(m => m.AuthRoutingModule)
	},
	{
		path: 'tienda',
		loadChildren: () =>
			import('@public/store/app/routing/store-routing.module')
				.then(m => m.StoreRoutingModule)

	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublicRoutingModule { }
