import {Component, OnInit, ViewChild} from '@angular/core';
import {ModalComponent} from "../../app-common/components";

@Component({
	selector: 'app-modal-login',
	template: `
		<app-modal [title]="modalData.title">
			<app-login content></app-login>
		</app-modal>

	`,
})
export class ModalLoginComponent implements OnInit {
	modalData = {
		title: 'Usuario no atenticado',
		content: 'contenido',
		name: 'nombre',
	};
	title: string = 'Usuario no atenticado';
	@ViewChild(ModalComponent) modal?: ModalComponent;

	constructor() {
	}


	ngOnInit(): void {

	}

	open() {
		console.log('open');
		//this.modal?.open();
	}


}
