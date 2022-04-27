import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Card } from '../../domain/card';

@Component({
	selector: 'app-gallery-cards',
	templateUrl: './gallery-cards.component.html',
	styleUrls: ['./gallery-cards.component.scss'],
	providers: [NgbActiveModal, NgbModal],
})
export class GalleryCardsComponent {
	@Input() datos: Observable<any[]> | undefined = new Observable<any[]>();
	@Input() btn_text: string = 'click me';
	@Output() outClicked: EventEmitter<any> = new EventEmitter<any>();

	handleClick(e: any) {
		this.outClicked.emit(e);
	}
}
