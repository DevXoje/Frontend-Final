import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../core/auth/app/login/login.component';
import { SignUpComponent } from '../core/auth/app/signup/signup.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
	{
		path: '', component: PublicComponent,
		children: [
			{ path: 'login', component: LoginComponent },
			{ path: 'signup', component: SignUpComponent },
		]}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PublicRoutingModule { }
