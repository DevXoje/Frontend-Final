import { Component, Input, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  providers: [NgbActiveModal, NgbModal]
})
export class ModalComponent implements OnInit {

  @Input() title: string = 'title';
  @Input() name: string = 'title';
  @Input() content: string = 'content';
  closeReasonObservable: Observable<string> = new Observable();

  complete = ($event: any) => { };
  cancel = ($event: any) => { };
  constructor(
    public activeModal: NgbActiveModal,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  closeResult: string = "";
  open(modalRef: NgbModalRef) {
    modalRef.result.then(
      result => {
        console.log(result);
        this.closeResult = `Closed with: ${result}`;
      },
      reason => this.closeResult = `Dismissed ${this.getDismissReason(reason)}`
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
