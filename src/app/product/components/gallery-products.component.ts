import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Select, Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {Auth} from 'src/app/auth/domain/auth.model';
import {AuthState} from 'src/app/auth/state/auth.state';
import {Product} from 'src/app/product/domain/product.model';
import {Card} from 'src/app/app-common/domain/card';
import {GetAllProducts} from 'src/app/product/state/product.actions';
import {ProductState} from 'src/app/product/state/product.state';
import {AddProductToOrder} from 'src/app/shop/state/shop.actions';
import {ModalComponent} from "../../app-common/components";
import {faCodepen, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";

@Component({
	selector: 'app-gallery-products',
	template: `

		<app-gallery-cards
			[datos]="cards_product$"
			[btn_text]="'Add to cart'"
			(outClicked)="handleAddProduct($event)"
		>
		</app-gallery-cards>




	`,
	styleUrls: ['./gallery-products.component.scss']
})
export class GalleryProductsComponent implements OnChanges, OnInit {
	@Select(ProductState.getProductList)
	products$?: Observable<Product[]>;
	@Select(AuthState.getSelectedAuth)
	customer$?: Observable<Auth>;
	cards_product$?: Observable<Card[]>;
	iconInstagram = faInstagram;
	iconTwitter = faTwitter;
	iconLinkedin = faLinkedin;
	iconCodepen = faCodepen;


	modalData = {
		title: 'Usuario no atenticado',
		content: 'contenido',
		name: 'nombre',
	};

	constructor(private store: Store, private modalService: NgbModal) {
		this.store.dispatch(GetAllProducts);
		this.store.select(ProductState.getProductList);
	}

	ngOnInit(): void {

		this.products$?.subscribe({
			next: (products) => {
				this.cards_product$ = of(products.map(product => {
							const diffDate = new Date(product.updated_at).getTime() - new Date().getTime();
							return {
								id: product.id,
								title: product.name,
								name: product.name,
								price: product.price,
								image: {
									path: product.image,
									alt: product.name
								},
								content: product.description,
								disable: product.stock === 0 ? true : false,
								footer: diffDate + " seg"
							};
						}
					)
				);

			},
			error: (err) => {
				console.log(err);
			}
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		/*console.log("a")
		const datos = changes['datos'].currentValue as Observable<any[]>;
		datos.subscribe({
				next: (value: Product[]) => {
					if (value.length !== 0) {
						console.log(value);
						const values = value.filter(product => {
							product.stock = 0;
						});
						values.forEach((element) => {

							console.log("Last update", element.updated_at);
							console.log("Stock", element.stock);
						});
					} else {
						console.log('No hay datos');
					}
				},
				error: (err) => {
					console.log(err);
				},
			}
		);*/
	}

	handleAddProduct(product_id: number) {
		this.customer$?.subscribe((user) => {
				if (!user.id) this.popModal()
				else this.store.dispatch(new AddProductToOrder(user.id, product_id))
			}
		);
	}

	handleSocial(social: any) {
		alert(social);
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
