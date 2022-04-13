import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from '../product/components';
import { DashboardComponent } from './containers/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'product/edit/:id', component: EditProductComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
