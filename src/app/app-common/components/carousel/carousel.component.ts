import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {NgbCarouselConfig} from "@ng-bootstrap/ng-bootstrap";
import {Carousel} from "../../domain/carousel";

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnChanges {
	@Input() carousel?: Carousel;

	constructor(private config: NgbCarouselConfig) {
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes["carousel"] && this.carousel) {
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
			if (this.carousel?.config) {
				this.config.interval = this.carousel.config.interval;
				this.config.wrap = this.carousel.config.wrap;
				this.config.keyboard = this.carousel.config.keyboard;
				this.config.pauseOnHover = this.carousel.config.pauseOnHover;
			} else {
				// customize default values of carousels used by this component tree
				this.config.interval = 10000;
				this.config.wrap = false;
				this.config.keyboard = false;
				this.config.pauseOnHover = false;
			}
		}
	}

	ngOnInit(): void {
	}

}
