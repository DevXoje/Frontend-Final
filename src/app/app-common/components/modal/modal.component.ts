import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {ModalDismissReasons, NgbActiveModal, NgbModal, NgbModalRef,} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';

@Component({
	selector: 'app-modal',
	templateUrl: './modal.component.html',
	styleUrls: ['./modal.component.scss'],
	providers: [NgbActiveModal, NgbModal],
})
export class ModalComponent {
	@ViewChild('modal') modal?: ElementRef<HTMLDivElement>;
	@Input() title: string = 'title';
	@Input() name: string = 'title';
	@Input() content?: HTMLElement;
	@Input() data: any = {
		title: 'title',
		content: 'content',
		name: 'name',
	};

	closeReasonObservable: Observable<string> = new Observable();
	closeResult: string = '';

	constructor(
		public activeModal: NgbActiveModal,
		private modalService: NgbModal
	) {
	}

	complete = ($event: any) => console.log($event);
	cancel = ($event: any) => console.log($event);

	/*open() {
		this.modal?.nativeElement.classList.add('show');
		//const modalRef = this.modalService.open(ModalComponent);
	}*/

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
