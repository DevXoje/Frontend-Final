import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Product } from '@shared/product/domain/product.model';
import { ProductService } from '@shared/product/infrastructure/services';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-shop-details',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './store-details.component.html',
	styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit, AfterViewInit, OnChanges {
	details: Product = {
		name: '',
		description: "",
		price: 0,
		images: [],
		mainImage: '',
	};
	@ViewChild('mainImg') activeImage!: HTMLImageElement;
	@Output() addToCart: EventEmitter<Product> = new EventEmitter<Product>();
	@Output() buyNow: EventEmitter<Product> = new EventEmitter<Product>();
	//activeImage!: HTMLImageElement;
	productImages!: NodeListOf<HTMLImageElement>;
	constructor(
		private productService: ProductService
	) {

		this.details = {
			name: 'bonsai',
			description: "The purposes of bonsai are primarily contemplation for the viewer, and the pleasant exercise of effort	and ingenuity for the grower. By contrast with other plant cultivation practices, bonsai is not intended for production of food or formedicine.Instead, bonsai practice focuses on long- term cultivation and shaping of one or more small trees growing in a container.",
			price: 19.99,
			images: ['https://source.unsplash.com/W1yjvf5idqA', 'https://source.unsplash.com/VgbUxvW3gS4', 'https://source.unsplash.com/5WbYFH0kf_8'],
			mainImage: '',
		};

	}

	ngOnInit() {
		const images = this.details.images as string[];
		this.details.mainImage = images[0];
	}
	ngAfterViewInit(): void {
		this.activeImage = document.querySelector(".product-image .active") as HTMLImageElement;
		this.productImages = document.querySelectorAll(".image-list img") as NodeListOf<HTMLImageElement>;
		this.productImages.forEach(
			image =>
				image.onclick = (e) => this.changeImage(e)
		);
	}
	ngOnChanges(changes: SimpleChanges): void { }

	changeImage(e: Event) {
		const image = e.target as HTMLImageElement;
		this.activeImage.src = image.src;
	}

	addToCartHandler(product: Product) {
		this.addToCart.emit(product);
	}
	buyNowHandler(product: Product) {
		this.buyNow.emit(product);
	}

}
