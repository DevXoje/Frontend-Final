import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Select, Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {Auth} from 'src/app/auth/domain/auth.model';
import {AuthState} from 'src/app/auth/state/auth.state';
import {Product} from 'src/app/product/domain/product.model';
import {Card} from 'src/app/app-common/domain/card';
import {ProductState} from 'src/app/product/state/product.state';
import {ModalLoginComponent} from "../../auth/components";
import {ModalComponent} from "../../app-common/components";
import {NotificationService} from "../../app-common/services/notification.service";
import {faCartArrowDown, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {Router} from "@angular/router";

@Component({
	selector: 'app-gallery-products',
	template: `
		<app-gallery-cards
			[datos]="cards_product$"
			[btn_text]="'Add to cart'"
		>
		</app-gallery-cards>
		<app-modal-login></app-modal-login>
	`,
	styleUrls: ['./gallery-products.component.scss']
})
export class GalleryProductsComponent implements OnChanges, OnInit, AfterViewInit {
	@Select(ProductState.getProductList) products$?: Observable<Product[]>;
	@Select(AuthState.getSelectedAuth) customer$?: Observable<Auth>;
	cards_product$?: Observable<Card[]>;
	@ViewChild(ModalLoginComponent) modal?: ModalLoginComponent;


	constructor(
		private store: Store,
		private modalService: NgbModal,
		private notificationService: NotificationService,
		private router: Router
	) {
	}

	marshallToCard(product: Product): Card {
		return {
			id: product.id,
			title: product.name,
			//price: product.price,
			image: {
				path: product.image,
				alt: product.name
			},
			content: product.description,
			//disable: product.stock === 0,
			footer: product.updated_ago,
			card_controls: [
				{
					icon: faCartArrowDown,
					action: () => console.log("add to cart"),
					title: 'Add to cart',
				},
				{
					icon: faPlusCircle,
					action: () => console.log("view details"),
					title: 'View details',
				}
			]
		};
	}

	ngAfterViewInit(): void {
	}

	ngOnInit(): void {
		this.products$?.subscribe({
			next: (products) =>
				this.cards_product$ = of(products.map(product => this.marshallToCard(product))),
			error: (err) => console.log(err)
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
	}


	handleAddProduct(product_id: number): void {
		console.log(product_id);
		/*this.customer$?.subscribe((user) => {
				if (!user.id) this.popModal()
				else this.store.dispatch(new AddProductToOrder(user.id, product_id)).subscribe({
					next: (value) => {
						this.products$?.subscribe({
							next: (products) => {
								const product = products.find(product => product.id === product_id) as Product;
								this.notificationService.showSuccess("Product Added", product.name);
							}
							,
							error: (err) => console.log(err)
						});
					},
					error: (err) => console.log(err)
				});
			}
		);*/
	}

	handleDetailsProduct(product_id: number): void {
		console.log(product_id);
		//this.router.navigate(['/product', product_id]);
	}

	popModal() {
		const modalRef = this.modalService.open(ModalComponent);
		const modalComponent = modalRef.componentInstance as ModalComponent;
		modalComponent.title = 'Usuario no registrado';
		const content: HTMLElement = document.createElement('div');
		content.innerHTML = `
Modal fallando
	<!--	<div class="social-container">
			<ul class="social-icons">
				<li><a href="#"><i class="fa fa-linkedin"></i></a></li>
				<li><a href="#"><i class="fa fa-codepen"></i></a></li>
				<li><a href="#"><i class="fa fa-twitter"></i></a></li>
			</ul>
		</div>-->
				`;
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
		modalComponent.open(modalRef);
	}
}
