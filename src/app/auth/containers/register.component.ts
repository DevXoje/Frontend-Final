import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Field} from 'src/app/app-common/domain/field';
import {FieldControlService} from 'src/app/app-common/services/field-control.service';
import {RegisterData} from '../domain/auth.model';
import {Signup} from '../state';

@Component({
	selector: 'app-register',
	template: `
		<app-form-user [title]="'Create User'" (sendPayload)="registerHandler($event)"
		               [only]="['name','email','password','password_confirmation']"></app-form-user>
		<a [routerLink]="['../login']">¡ Ya estoy registrado !</a>
	`,
})
export class RegisterComponent implements OnInit {
	fields$?: Observable<Field<any>[]>;

	constructor(
		private fieldService: FieldControlService,
		private store: Store,
		private router: Router
	) {

	}

	ngOnInit(): void {
	}

	registerHandler(event: RegisterData) {
		this.store.dispatch(new Signup(event)).subscribe({
			next: (response) => this.router.navigateByUrl('/login'),
			error: (error) => console.error(error),
		});
		//this.authService.mockAuth('customer');//MOCK
		//const savedToken = this.authService.checkToken();
		//this.authService.checkRole(savedToken);
	}


}
