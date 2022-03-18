import { AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { GaleryItem } from '@public/store/model';
import { Category } from '@shared/product/domain/product.model';
import { ProductService } from '@shared/product/infrastructure/services';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-store-details',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './store-details.component.html',
	styleUrls: ['./store-details.component.scss']
})
export class StoreDetailsComponent implements OnInit, AfterViewInit, OnChanges {
	details: any = {
		name: '',
		desciption: '',
		price: 0,
		images: [''],
		mainImage: '',
	};
	@ViewChild('mainImg') activeImage!: HTMLImageElement;
	//activeImage!: HTMLImageElement;
	productImages!: NodeListOf<HTMLImageElement>;
	constructor(
		private productService: ProductService
	) {
		this.details.images = ['https://source.unsplash.com/W1yjvf5idqA', 'https://source.unsplash.com/VgbUxvW3gS4', 'https://source.unsplash.com/5WbYFH0kf_8'];
		this.details.mainImage = this.details.images[0];
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(changes);
	}
	ngOnInit() {
	}
	ngAfterViewInit(): void {
		this.activeImage = document.querySelector(".product-image .active") as HTMLImageElement;
		this.productImages = document.querySelectorAll(".image-list img") as NodeListOf<HTMLImageElement>;
		this.productImages.forEach(
			image =>
				image.onclick = (e) => this.changeImage(e)
		);


	}
	changeImage(e: Event) {

		const image = e.target as HTMLImageElement;
	

		this.activeImage.src = image.src;
	}
	/* 
	const activeImage = document.querySelector(".product-image .active");
const productImages = document.querySelectorAll(".image-list img");
const navItem = document.querySelector('a.toggle-nav');

function changeImage(e) {
  activeImage.src = e.target.src;
}

function toggleNavigation(){
  this.nextElementSibling.classList.toggle('active');
}

productImages.forEach(image => image.addEventListener("click", changeImage));
navItem.addEventListener('click', toggleNavigation); */

}
