import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Auth } from 'src/app/auth/domain/auth.model';
import { GetAllUsers } from 'src/app/auth/state/auth.actions';
import { AuthState } from 'src/app/auth/state/auth.state';

@Component({
  selector: 'app-table-users',
  template: `
  <app-table 
    [datos]="customers$"
    [title]="'Productos'"
    (onDelete)="deleteHandler($event)"
    (onEdit)="editHandler($event)"
    ></app-table>`
})
export class TableUsersComponent implements OnInit {
  @Select(AuthState.getAuthList) customers$?: Observable<Auth[]>;
  constructor(private store: Store) { }
  ngOnInit(): void {
    this.store.dispatch(GetAllUsers)
    this.store.select(AuthState.getAuthList)
  }
  editHandler(id: number) {
    console.log(id);
  }
  deleteHandler(id: any) {
    console.log(id);
  }
}
