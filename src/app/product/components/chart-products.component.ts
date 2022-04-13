import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Select } from '@ngxs/store';
import { Store } from '@ngxs/store';
import { Observable, of } from 'rxjs';
import { ModalComponent } from 'src/app/app-common/components';
import { ChartOptions } from 'src/app/app-common/domain/chartOptions';
import { NotificationService } from 'src/app/app-common/services/notification.service';
import { Product } from 'src/app/product/domain/product.model';
import { GetAllProducts, SetSelectedProduct } from 'src/app/product/state/product.actions';
import { ProductState } from 'src/app/product/state/product.state';


@Component({
  selector: 'app-chart-products',
  template: `
  <app-chart [chartOptions]="chartOptions"></app-chart>
  `
})
export class ChartProductsComponent implements OnInit {//, TableCustom: edit,delete
  @Select(ProductState.getProductList) products$?: Observable<Product[]>;
  chartOptions: Observable<ChartOptions> = new Observable();
  constructor(
    private store: Store,

  ) {

  }
  ngOnInit(): void {
    this.store.dispatch(GetAllProducts)
    this.store.select(ProductState.getProductList)
      .subscribe({
        next: products => {
          this.chartOptions = of({
            series: [
              {
                name: "products",
                data: products.map(product => product.quantity)
              }
            ],
            chart: {
              height: 350,
              type: "bar"
            },
            title: {
              text: "stock"
            },
            xaxis: {
              categories: products.map(product => product.name)
            }
          });
        },
        error: e => console.error(e),
      });
  }


}
