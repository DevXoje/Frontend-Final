import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Field } from 'src/app/app-common/domain/field';
import { FieldControlService } from 'src/app/app-common/services/field-control.service';
import { RegisterData } from '../domain/auth.model';
import { Signup } from '../state/auth.actions';

@Component({
	selector: 'app-register',
	template: ` <div>
		<h2>Registrate</h2>
		<app-form
			[fields]="fields$ | async"
			(sendPayload)="registerHandler($event)"
		></app-form>
	</div>`,
})
export class RegisterComponent implements OnInit {
	fields$?: Observable<Field<any>[]>;

	constructor(
		fieldService: FieldControlService,
		private store: Store,
		private router: Router
	) {
		this.fields$ = fieldService.getRegisterFields();
	}

	ngOnInit(): void {}
	registerHandler(event: RegisterData) {
		this.store.dispatch(new Signup(event)).subscribe({
			next: (response) => this.router.navigate(['/login']),
			error: (error) => console.error(error),
		});
		//this.authService.mockAuth('customer');//MOCK
		//const savedToken = this.authService.checkToken();
		//this.authService.checkRole(savedToken);
	}
}
