import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './list-users.component';
import { UsersResolver } from './users.resolver';

const routes: Routes = [{ path: '', component: ListUsersComponent, resolve: { users: UsersResolver } }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ListUsersRoutingModule { }
