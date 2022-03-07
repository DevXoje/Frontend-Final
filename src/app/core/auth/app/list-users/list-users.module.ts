import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUsersRoutingModule } from './list-users-routing.module';
import { ListUsersComponent } from './list-users.component';
import { ListModule } from '../../../shared/list/list.module';


@NgModule({
	declarations: [
		ListUsersComponent,
	],
	imports: [
		CommonModule,
		ListUsersRoutingModule,
		ListModule
	],
	exports:[ListUsersComponent]
})
export class ListUsersModule { }
