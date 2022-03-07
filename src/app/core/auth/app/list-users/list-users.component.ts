import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AuthService } from 'src/app/core/auth/infrastructure/auth.service';
import { Auth } from 'src/app/core/auth/domain/Auth';
import { compare, SortableHeaderDirective, SortColumn, SortEvent } from 'src/app/core/shared/list/sortable-header.directive';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-list-users',
	template: `<app-list [data]="users" [titulos]="titulos" [title]="title"></app-list>`,
})
export class ListUsersComponent implements OnInit {
	userDefault: Auth = {
		id: 0,
		email: '',
		name: '',
		password: '',
		email_verified_at: new Date(),
		remenber_token: '',
		role: 'Customer',
		created_at: '',
		updated_at: ''
	}
	users: Auth[] = [];
	titulos: SortColumn[] = [];
	USERS_DEFAULT: Auth[] = [];
	title: string = 'Lista de Usuarios';
	constructor(private _Activatedroute: ActivatedRoute,private userService: AuthService) {
		this.users = this.userService.getUsers();
	}

	ngOnInit(): void {
		if (this._Activatedroute.snapshot.data.users !== undefined) {
			this.users = this._Activatedroute.snapshot.data.users;
			console.log('from resolve');
		} else {
			this.users = this.userService.getUsers();
			console.log('from service');
		}
		this.titulos = Object.keys(this.userDefault) as SortColumn[];

	}


}
