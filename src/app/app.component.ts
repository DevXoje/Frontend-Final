import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
	selector: 'app-root',
	template:`<router-outlet></router-outlet>`
})
export class AppComponent {

	constructor(private titleService: Title) {
		this.setTitle('Home');
	}
	public setTitle(newTitle: string) {
		this.titleService.setTitle(newTitle);
	}
}
