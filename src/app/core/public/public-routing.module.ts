import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, SignUpComponent } from '@shared/auth/app/containers';
import { PublicComponent } from './public.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'signup', component: SignUpComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublicRoutingModule { }
