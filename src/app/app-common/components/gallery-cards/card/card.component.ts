import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Card} from 'src/app/app-common/domain/card';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	providers: [NgbActiveModal, NgbModal],
})
export class CardComponent implements OnChanges {
	@Input() card: Card = {
		title: 'title',
		name: 'name',
		id: 1,
		image: {
			path: 'https://via.placeholder.com/240x500',
			alt: '',
		},
		footer: "footer",
		disabled: false,
	};
	@Output() clicked: EventEmitter<any> = new EventEmitter<any>();
	paragraph_length: number = 26;

	constructor(
		public activeModal: NgbActiveModal,
		private modalService: NgbModal
	) {
	}

	handleClick = (_e: MouseEvent) => this.clicked.emit(this.card.id);

	printData(data: any) {
		console.log(data);
	}

	ngOnChanges(changes: SimpleChanges): void {
		// ToDo: check card has a disabled property
		//console.log(changes);
	}
}
