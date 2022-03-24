import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ChildActivationEnd, Router } from '@angular/router';
import { Actions, ofActionDispatched, Store } from '@ngxs/store';
import { Logout } from '@shared/auth/infrastructure/ngxs/auth.actions';
import { filter } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	template: `<router-outlet></router-outlet>`
})
export class AppComponent {

	title = 'AppComponent';
	static store: Store;
	constructor(public router: Router, private titleService: Title, private stor: Store, private actions: Actions) {
		AppComponent.store = stor;
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
