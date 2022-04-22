import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
	ModalDismissReasons,
	NgbActiveModal,
	NgbModal,
	NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	providers: [NgbActiveModal, NgbModal],
})
export class CardComponent implements OnInit {
	@Input() title: string = 'title';
	@Input() name: string = 'title';
	@Input() id: string = 'title';
	@Input() content: string = 'content';
	@Input() btn_content: string = 'content';
	@Input() imagePath: string = 'https://via.placeholder.com/240x500';
	@Output() clicked: EventEmitter<any> = new EventEmitter<any>();
	image = {
		path: 'https://via.placeholder.com/240x500',
		alt: '',
	};
	handleClick = (e: any) => this.clicked.emit(this.id);

	closeReasonObservable: Observable<string> = new Observable();

	complete = ($event: any) => {};
	cancel = ($event: any) => {};
	constructor(
		public activeModal: NgbActiveModal,
		private modalService: NgbModal
	) {}

	ngOnInit(): void {}

}
