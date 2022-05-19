import { Component, Input } from '@angular/core';
import {
	ModalDismissReasons,
	NgbActiveModal,
	NgbModal,
	NgbModalRef,
} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	providers: [NgbActiveModal, NgbModal],
})
export class ModalComponent {
	@Input() title: string = 'title';
	@Input() name: string = 'title';
	@Input() content?: HTMLElement;
	@Input() data: any = {
		title: 'title',
		content: 'content',
		name: 'name',
	};

	closeReasonObservable: Observable<string> = new Observable();

	complete = ($event: any) => {
		console.log($event);
	};
	cancel = ($event: any) => {
		console.log($event);
	};
	constructor(
		public activeModal: NgbActiveModal,
		private modalService: NgbModal
	) {}

	closeResult: string = '';
	open(modalRef: NgbModalRef) {
		modalRef.result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) =>
				(this.closeResult = `Dismissed ${this.getDismissReason(
					reason
				)}`)
		);
	}

	getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}
}
