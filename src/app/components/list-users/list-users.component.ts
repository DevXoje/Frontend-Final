import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { AuthService } from 'src/app/core/auth/app/auth.service';
import { Auth } from 'src/app/core/auth/domain/Auth';
import { compare, SortableHeaderDirective, SortColumn, SortEvent } from 'src/app/directives/sortable-header.directive';

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
		created_at: '',
		updated_at: ''
	}
	users: Auth[] = [];
	titulos: SortColumn[] = [];
	USERS_DEFAULT: Auth[] = [];
	title: string = 'Lista de Usuarios';
	constructor(private userService: AuthService) {
		this.users = this.userService.getUsers();
	}

	ngOnInit(): void {
		this.titulos = Object.keys(this.userDefault) as SortColumn[];
	}

}
