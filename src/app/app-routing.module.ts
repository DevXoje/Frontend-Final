import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
	{ path: '', component: HomeComponent, data: { title: 'Home' } },
	/* { path: 'eventos', component: EventShowComponent, data: { title: 'Listado de Eventos' } },
	{ path: 'eventos/add', component: EventoAddComponent, canDeactivate: [SaveChangesGuard], data: { title: 'Creator' } },
	{ path: 'eventos/:id', resolve: { evento: EventDetailResolver }, component: EventoItemDetailsComponent },
	{ path: 'payment/:id', resolve: { evento: EventDetailResolver }, canDeactivate: [SaveChangesGuard], component: PaymentComponent },
	{ path: 'checkout/success/:session_id', component: CheckoutSuccessComponent },
	{ path: 'checkout/cancel', component: CheckoutCancelComponent }, */
	//{ path: 'eventos/edit/:id', resolve: { evento: EventDetailResolver }, component: EventoEditComponent },
	/* { path: '', redirectTo: '', pathMatch: 'full' },
	{ path: '**', redirectTo: '', pathMatch: 'full' } */
	/* 	{ path: 'buy/:id', component: EventoItemBuyComponent }, */
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
