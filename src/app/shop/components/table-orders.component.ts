import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {NotificationService} from 'src/app/app-common/services/notification.service';
import {GetAllOrders, OrderState} from "../state";
import {Order} from "../domain/shop.model";

/* import { Auth } from 'src/app/auth/model/auth.model';
import { GetAllUsers } from 'src/app/auth/state/auth.actions';
import { AuthState } from 'src/app/auth/state/auth.state'; */

@Component({
	selector: 'app-table-orders',
	template: `
		<app-table
			[datos]="orders$"
			[title]="'Orders'"
			(onDelete)="deleteHandler($event)"
			(onEdit)="editHandler($event)"
			(onAdd)="addHandler()"
		></app-table>`
})
export class TableOrdersComponent implements OnInit {//, TableCustom: edit,delete
	@Select(OrderState.getOrderList)
	orders$?: Observable<Order[]>;

	constructor(
		private store: Store,
		private router: Router,
		private notificationService: NotificationService,
		private modalService: NgbModal,
	) {
	}

	ngOnInit(): void {
		this.store.dispatch(GetAllOrders);
	}

	editHandler(id: number) {
		//this.store.dispatch(new SetSelectedProduct(id))
		//this.store.select(ProductState.getSelectedProduct)
		this.router.navigateByUrl(`dashboard/orders/edit/${id}`);
	}


	deleteHandler(id: number) {
		this.openDeleteModal(id);
		//this.notificationService.showWarning('Producto eliminado', 'Producto eliminado');
	}

	addHandler() {
		this.router.navigateByUrl('dashboard/orders/create');
	}

	openDeleteModal(id: number) {
		/*  const modalRef = this.modalService.open(ModalComponent).result.then((componetModal: ModalComponent) => {
		   componetModal.title = 'Borrando producto';
		   componetModal.content = `¿Esta seguro que quiere borrar el producto con el id ${id}?`;
		 }, (reason) => { }); */
		/*const modalRef = this.modalService.open(ModalComponent);
		const modalComponent = modalRef.componentInstance as ModalComponent;
		modalComponent.title = 'Borrando producto';
		const content = new HTMLElement();
		content.innerHTML = `¿Esta seguro que quiere borrar el producto con el id ${id}?`;
		modalComponent.content = content;
		modalComponent.complete = $event => {
			//modalComponent.result="";
			modalRef.close();
		}
		modalComponent.cancel = $event => modalRef.close();
		modalRef.result.then(
			result => modalComponent.closeResult = `Closed with: ${result}`,
			reason => modalComponent.closeResult = `Dismissed ${modalComponent.getDismissReason(reason)}`
		);
		modalComponent.open(modalRef);*/

	}


}
