import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChildActivationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { Logout } from '@shared/auth/infrastructure/ngxs/auth.actions';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	template: `<router-outlet></router-outlet>
	<app-loader></app-loader>
	`,
})
export class AppComponent {
	private idiomas: string[];
	title = 'AppComponent';
	constructor(public router: Router, private titleService: Title, private store: Store, private actions: Actions, public translate: TranslateService) {
		//lenguajes
		this.idiomas = ['es-ES', 'en'];
		translate.addLangs(this.idiomas);
		translate.setDefaultLang('es-ES');
		//title
		this.router.events
			.pipe(
				filter(event => event instanceof ChildActivationEnd))
			.subscribe(event => {
				let snapshot = (event as ChildActivationEnd).snapshot;
				while (snapshot.firstChild !== null) {
					snapshot = snapshot.firstChild;
				}
				this.titleService.setTitle(snapshot.data.title || this.title);
			});
		//store
		this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
			this.router.navigate(['/login']);
		})
	}
}
