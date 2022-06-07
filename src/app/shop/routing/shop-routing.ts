import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {SHOP_ROUTES} from "./shop.routes";

@NgModule({
	imports: [CommonModule, RouterModule.forChild(SHOP_ROUTES)],
	exports: [RouterModule]
})
export class ShopRoutingModule {
}
