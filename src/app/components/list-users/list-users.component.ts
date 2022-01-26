import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/users/app/user.service';
import { User } from 'src/app/core/users/domain/User';

@Component({
	selector: 'app-list-users',
	templateUrl: './list-users.component.html',
	styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
	users: User[] = [
		{
			id: 1,
			name: 'Juan',
			email: '',
			password: ''
		}
	];
	constructor(private userService: UserService) {
	}

	ngOnInit(): void {

		this.userService.getEventos().subscribe(
			(users) => {
				this.users = users
			},
			(error) => console.log(error),
			() => console.log('completed')
		);
	}

}
