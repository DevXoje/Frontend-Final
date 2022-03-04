import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './list-products.component';
import { ProductsResolver } from './products.resolver';

const routes: Routes = [{ path: '', component: ListProductsComponent, resolve: { products:ProductsResolver}}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProductsRoutingModule { }
