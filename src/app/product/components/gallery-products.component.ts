import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
	ModalDismissReasons,
	NgbActiveModal,
	NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { Select } from '@ngxs/store';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ModalComponent } from 'src/app/app-common/components';
import { NotificationService } from 'src/app/app-common/services/notification.service';
import { Auth } from 'src/app/auth/domain/auth.model';
import { AuthState } from 'src/app/auth/state/auth.state';
import { Product } from 'src/app/product/domain/product.model';
import {
	GetAllProducts,
	SetSelectedProduct,
} from 'src/app/product/state/product.actions';
import { ProductState } from 'src/app/product/state/product.state';
import { AddProductToOrder } from 'src/app/shop/state/shop.actions';
/* import { Auth } from 'src/app/auth/model/auth.model';
import { GetAllUsers } from 'src/app/auth/state/auth.actions';
import { AuthState } from 'src/app/auth/state/auth.state'; */

@Component({
	selector: 'app-gallery-products',
	template: `<app-gallery-cards
		[datos]="products$"
		(outClicked)="handleClick($event)"
	></app-gallery-cards>`,
})
export class GalleryProductsComponent implements OnInit {
	//, TableCustom: edit,delete
	@Select(ProductState.getProductList)
	products$?: Observable<Product[]>;
	@Select(AuthState.getSelectedAuth)
	customer$?: Observable<Auth>;
	constructor(
		private store: Store,
		private router: Router,
		private notificationService: NotificationService,
		private modalService: NgbModal
	) {}
	ngOnInit(): void {
		this.store.dispatch(GetAllProducts);
		this.store.select(ProductState.getProductList);
	}

	handleClick(product_id: number) {
		//this.store.dispatch(new SetSelectedProduct(id));
		this.customer$?.subscribe((user) =>
			this.store.dispatch(new AddProductToOrder(user.id, product_id))
		);
	}

	openDeleteModal(id: number) {
		/*  const modalRef = this.modalService.open(ModalComponent).result.then((componetModal: ModalComponent) => {
       componetModal.title = 'Borrando producto';
       componetModal.content = `¿Esta seguro que quiere borrar el producto con el id ${id}?`;
     }, (reason) => { }); */
		const modalRef = this.modalService.open(ModalComponent);
		const modalComponent = modalRef.componentInstance as ModalComponent;
		modalComponent.title = 'Borrando producto';
		modalComponent.content = `¿Esta seguro que quiere borrar el producto con el id ${id}?`;
		modalComponent.complete = ($event) => {
			//modalComponent.result="";
			modalRef.close();
		};
		modalComponent.cancel = ($event) => modalRef.close();
		modalRef.result.then(
			(result) => (modalComponent.closeResult = `Closed with: ${result}`),
			(reason) =>
				(modalComponent.closeResult = `Dismissed ${modalComponent.getDismissReason(
					reason
				)}`)
		);
		modalComponent.open(modalRef);
	}
}
