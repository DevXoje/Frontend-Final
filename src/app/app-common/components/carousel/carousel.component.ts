import {Component, Input, OnInit} from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {Carousel} from "../../domain/carousel";

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
	@Input() carousel1?: Carousel;
	carousel: Carousel = {} as Carousel;
	images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(config: NgbCarouselConfig) {
		this.carousel.items = [
			{
				image: 'https://picsum.photos/id/700/900/500',
				caption: 'Image 1',
				description: 'Description 1'
			}, {
				image: 'https://picsum.photos/id/533/900/500',
				caption: 'Image 2',
				description: 'Description 3'
			}, {
				image: 'https://picsum.photos/id/807/900/500',
				caption: 'Image 3',
				description: 'Description 3'
			},
			{
				image: 'https://picsum.photos/id/124/900/500',
				caption: 'Image 4',
				description: 'Description 4'
			},
		];
		if (this.carousel1?.config) {
			config.interval = this.carousel1.config.interval;
			config.wrap = this.carousel1.config.wrap;
			config.keyboard = this.carousel1.config.keyboard;
			config.pauseOnHover = this.carousel1.config.pauseOnHover;
		} else {
			// customize default values of carousels used by this component tree
			config.interval = 10000;
			config.wrap = false;
			config.keyboard = false;
			config.pauseOnHover = false;
		}

	}

	ngOnInit(): void {
	}

}
