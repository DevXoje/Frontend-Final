import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Auth} from 'src/app/auth/domain/auth.model';
import {AuthState, DeleteUser, GetAllUsers} from 'src/app/auth/state';
import {Router} from "@angular/router";
import {NotificationService} from "../../app-common/services/notification.service";

@Component({
	selector: 'app-table-users',
	template: `
		<!--<h2>Users</h2>-->

		<app-table
			[datos]="customers$"
			[title]="'Users'"
			(onDelete)="deleteHandler($event)"
			(onEdit)="editHandler($event)"
			(onAdd)="addHandler()"
		></app-table>`
})
export class TableUsersComponent implements OnInit {
	@Select(AuthState.getAuthList) customers$?: Observable<Auth[]>;

	constructor(private store: Store, private router: Router, private notification: NotificationService) {
	}

	ngOnInit(): void {
		this.store.dispatch(GetAllUsers);
		this.store.select(AuthState.getAuthList);
	}

	editHandler(id: number) {
		console.log("editHandler", id);
		//this.router.navigate(['/auth/edit', id]);
	}

	deleteHandler(id: any) {
		this.store.dispatch(new DeleteUser(id)).subscribe((state) => {
				this.notification.showSuccess("User deleted", "User deleted");
				this.store.dispatch(GetAllUsers);

			}
		)
	}

	addHandler() {
		this.router.navigate(['/auth/register']);
	}
}
