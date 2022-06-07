import {Component, OnInit} from '@angular/core';
import {NgbOffcanvas, NgbOffcanvasConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	// add NgbOffcanvasConfig and NgbOffcanvas to the component providers
	//providers: [NgbOffcanvasConfig, NgbOffcanvas]
})
export class SidebarComponent implements OnInit {

	constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas) {
		// customize default values of offcanvas used by this component tree
		config.position = 'end';
		config.backdropClass = 'bg-info';
		config.keyboard = false;
	}

	open(content) {
		this.offcanvasService.open(content);
	}

	ngOnInit(): void {
	}

}
