import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {Observable, of} from 'rxjs';
import {Field} from 'src/app/app-common/domain/field';
import {FieldControlService} from 'src/app/app-common/services/field-control.service';
import {RegisterData} from '../domain/auth.model';
import {Signup} from '../state/auth.actions';
import {PasswordInput, TextInput} from "../../app-common/domain";
import {FormControl, Validators} from "@angular/forms";

@Component({
	selector: 'app-register',
	template: `
		<app-form-user [title]="'Create User'" (sendPayload)="registerHandler($event)"></app-form-user>
		<a routerLink="/auth/login">¡ Ya estoy registrado !</a>


	`,
})
export class RegisterComponent implements OnInit {
	fields$?: Observable<Field<any>[]>;

	constructor(
		fieldService: FieldControlService,
		private store: Store,
		private router: Router
	) {
		this.fields$ = of([
			new TextInput({
				key: 'name',
				label: 'nombre',
				type: 'text',
				validators: [Validators.required],
				order: 1,
			}),
			new TextInput({
				key: 'email',
				label: 'Email',
				type: 'email',
				validators: [Validators.required, Validators.email],
				order: 2,
			}),
			new TextInput({
				key: 'address',
				label: 'address',
				type: 'text',
				validators: [Validators.required],
				order: 3,
			}),
			new TextInput({
				key: 'official_doc',
				label: 'dni',
				type: 'text',
				validators: [Validators.required, Validators.pattern('[0-9]{8}')],
				order: 3,
			}),
			new PasswordInput({
				key: 'password',
				label: 'Password',
				type: 'password',
				validators: [Validators.required, Validators.minLength(6)],
				order: 3,
			}),
			new PasswordInput({
				key: 'password-confirm',
				label: 'Password confirm',
				type: 'password',
				validators: [Validators.required, Validators.minLength(6), this.matchOtherValidator('password')],
				order: 3,
			}),
		]);
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

	matchOtherValidator(otherControlName: string) {
		return (control: FormControl) => {
			const otherControl: FormControl = control.root.get(otherControlName) as FormControl;
			if (otherControl) {
				const subscription: any = otherControl.valueChanges.subscribe(() => {
					control.updateValueAndValidity();
					subscription.unsubscribe();
				});
			}
			return otherControl && control.value !== otherControl.value ? {match: true} : null;
		};
	}
}
