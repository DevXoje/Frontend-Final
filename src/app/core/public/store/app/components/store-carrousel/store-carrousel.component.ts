import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Category } from '@shared/category/domain/category.model';
import { Observable, of } from 'rxjs';

@Component({
	selector: 'app-store-carrousel',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<div class="row">
		<div class="col-md-1 d-flex align-items-center">
			<button class="cta" (click)="leftClick()">
				<svg width="13px" height="10px" viewBox="0 0 13 10">
					<path d="M0.5 9.35772H20.9956L14.2001 2.29941L16.4134 0L27 11L16.4134 22L14.2001 19.7006L20.9956 12.6423H0.5V9.35772Z"></path>
				</svg>
			</button>
		</div>
		<div class="col ">
			<div class="row">
				<div class="col d-flex flex-column text-center p-2" *ngFor="let item of mediator;" style="background-color: grey;">
					<img class="img-thumbnail" [src]="item.image">
					<h5 style="background-color: white;">{{item.name}}</h5>
				</div>
			</div>
		</div>
		<div class="col-md-1 d-flex align-items-center">
			<button class="cta" (click)="rightClick()">
				<svg width="13px" height="10px" viewBox="0 0 13 10">
					<path d="M1,5 L11,5"></path>
					<polyline points="8 1 12 5 8 9"></polyline>
				</svg>
			</button>
		</div>
	</div>
	`,
	styleUrls: ['./store-carrousel.component.scss']
})
export class StoreCarrouselComponent implements OnInit, AfterViewInit, OnChanges {

	@Input() categories!: Category[] | null;
	total!: number;
	iterator: number;
	startIndex: number;
	lastIndex: number;
	size: number;
	mediator!: Category[];
	constructor() {
		this.categories = [] as Category[];
		this.size = 3;
		this.iterator = 0;
		this.startIndex = 0
		this.lastIndex = 2
	}
	ngOnInit() {
	}
	ngAfterViewInit(): void {
	}
	ngOnChanges(changes: SimpleChanges): void {
		if (this.categories && this.categories.length > 0) {
			this.mediator = this.categories.slice(0, this.size);
			this.total = this.categories.length;
		}
	}
	leftClick() {
		const cat = this.categories as Category[];
		if (this.startIndex === 0) {
			this.startIndex = this.total - 1
			this.lastIndex--;
			this.mediator.unshift(cat[this.total - 1]);
			this.mediator.pop();
		}
		else if (this.lastIndex === 0) {
			this.lastIndex = this.total - 1
			this.startIndex--
			this.mediator.unshift(cat[this.startIndex])
			this.mediator.pop()
		}
		else {
			this.startIndex--
			this.lastIndex--
			this.mediator.unshift(cat[this.startIndex])
			this.mediator.pop()
		}
		console.log('start ', this.startIndex, 'last ', this.lastIndex)
		return
	}
	rightClick() {
		const cat = this.categories as Category[];
		if (this.lastIndex === this.total - 1) {
			this.lastIndex = 0
			this.startIndex++
			this.mediator.shift()
			this.mediator.push(cat[0])
		}
		else if (this.startIndex === this.total - 1) {
			this.startIndex = 0
			this.lastIndex++
			this.mediator.shift()
			this.mediator.push(cat[this.lastIndex])
		}
		else {
			this.startIndex++
			this.lastIndex++
			this.mediator.shift()
			this.mediator.push(cat[this.lastIndex])
		}
		console.log('start ', this.startIndex, 'last ', this.lastIndex)
		return
	}
}
