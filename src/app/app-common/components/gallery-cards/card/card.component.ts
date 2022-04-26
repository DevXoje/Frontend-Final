import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Card } from 'src/app/app-common/domain/card';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	providers: [NgbActiveModal, NgbModal],
})
export class CardComponent {
	@Input() card: Card = {
		title: 'title',
		name: 'name',
		id: 'id',
		image: {
			path: 'https://via.placeholder.com/240x500',
			alt: '',
		},
	};

	@Output() clicked: EventEmitter<any> = new EventEmitter<any>();

	constructor(
		public activeModal: NgbActiveModal,
		private modalService: NgbModal
	) {}

	handleClick = (_e: MouseEvent) => this.clicked.emit(this.card.id);
}
