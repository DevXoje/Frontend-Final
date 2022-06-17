import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Card} from 'src/app/app-common/domain/card';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	providers: [NgbActiveModal, NgbModal],
})
export class CardComponent implements OnChanges {
	@Input() card?: Card;
	@Output() clicked: EventEmitter<any> = new EventEmitter<any>();
	paragraph_length: number = 26;

	constructor(
		public activeModal: NgbActiveModal,
		private modalService: NgbModal
	) {
	}

	handleClick = (e: MouseEvent) => {
		const keyClass = "ng-reflect-ngb-tooltip";
		const target = e.target as HTMLElement;
		let isCorrectTarget = target.hasAttribute(keyClass);
		let correctTarget = target;
		let action: string;

		/*	if (!isCorrectTarget) {
				let parent: HTMLElement = target.parentElement as HTMLElement;
				for (let i = 0; !isCorrectTarget; i++) {
					parent = target.parentElement as HTMLElement;
					isCorrectTarget = parent.hasAttribute(keyClass);
				}
				correctTarget = parent;
			}*/
		console.log(correctTarget);
		console.log(correctTarget.attributes);
		action = correctTarget.getAttribute(keyClass) as string;
		const {id} = this.card as Card;
		const payload = {id, action};
		this.clicked.emit(payload);
	};


	ngOnChanges(changes: SimpleChanges): void {
		// ToDo: check card has a disabled property
	}
}
