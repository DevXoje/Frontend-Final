import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { SortableHeaderDirective } from './sortable-header.directive';



@NgModule({
	declarations: [
		ListComponent,
		SortableHeaderDirective
	],
	imports: [
		CommonModule
	],
	exports: [ListComponent],
	//providers: [SortableHeaderDirective],
})
export class ListModule { }
