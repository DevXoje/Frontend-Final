import {EditProductComponent} from "./edit-product.component";
import {CreateProductComponent} from "./create-product.component";
import {ChartTotalProductsComponent} from "./chart-total-products.component";
import {ChartBestsellersProductsComponent} from "./chart-bestsellers-products.component";

const charts = [ChartBestsellersProductsComponent, ChartTotalProductsComponent];

export const containers = [EditProductComponent, CreateProductComponent, ...charts];

export * from "./edit-product.component";
export * from "./create-product.component";
export * from "./chart-total-products.component";
export * from "./chart-bestsellers-products.component";
