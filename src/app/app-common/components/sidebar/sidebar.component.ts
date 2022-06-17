import {Component, Input, OnInit} from '@angular/core';
import {NgbOffcanvas, NgbOffcanvasConfig} from '@ng-bootstrap/ng-bootstrap';
import {Sidebar} from "../../domain/sidebar";

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	// add NgbOffcanvasConfig and NgbOffcanvas to the component providers
	providers: [NgbOffcanvasConfig, NgbOffcanvas]
})
export class SidebarComponent implements OnInit {
	@Input() sidebar: Sidebar = {
		title: 'Sidebar',
		btn_content: 'btn_content',
	};

	constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas) {
		// customize default values of offcanvas used by this component tree
		config.position = 'end';
		config.backdropClass = 'bg-info';
		config.keyboard = false;
	}

	open(content: any) {
		this.offcanvasService.open(content);
	}

	ngOnInit(): void {
	}

}
