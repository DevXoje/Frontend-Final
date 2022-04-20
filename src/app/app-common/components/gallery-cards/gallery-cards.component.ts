import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
	ModalDismissReasons,
	NgbActiveModal,
	NgbModal,
	NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-gallery-cards',
	templateUrl: './gallery-cards.component.html',
	styleUrls: ['./gallery-cards.component.scss'],
	providers: [NgbActiveModal, NgbModal],
})
export class GalleryCardsComponent implements OnInit {
	@Input() datos: Observable<any[]> | undefined = new Observable<any[]>();
	@Output() outClicked: EventEmitter<any> = new EventEmitter<any>();

	handleClick(e: any) {
		this.outClicked.emit(e);
	}
	constructor() {}

	ngOnInit(): void {}
}
