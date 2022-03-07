import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	Input,
	OnInit,
	QueryList,
	ViewChildren,
} from '@angular/core';
import { SBSortableHeaderDirective, SortEvent } from '../../../tables/directives';
import { Country } from '../../../tables/models';
import { CountryService } from '../../../tables/services';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-ng-bootstrap-table',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<form>
		<div class="form-group form-inline">Full text search: <input class="form-control ml-2" type="text" name="searchTerm" [(ngModel)]="countryService.searchTerm" /><span class="ml-3"
				*ngIf="countryService.loading$ | async">Loading...</span></div>
		<table class="table table-striped">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col" sbSortable="name" (sort)="onSort($event)"><span>Country</span>
						<app-sort-icon *ngIf='sortedColumn === "name"' [direction]="sortedDirection"></app-sort-icon>
					</th>
					<th scope="col" sbSortable="area" (sort)="onSort($event)"><span>Area</span>
						<app-sort-icon *ngIf='sortedColumn === "area"' [direction]="sortedDirection"></app-sort-icon>
					</th>
					<th scope="col" sbSortable="population" (sort)="onSort($event)"><span>Population</span>
						<app-sort-icon *ngIf='sortedColumn === "population"' [direction]="sortedDirection"></app-sort-icon>
					</th>
				</tr>
			</thead>
			<tbody>
				<tr *ngFor="let country of countries$ | async">
					<th scope="row">{{ country.id }}</th>
					<td><img class="mr-2" [src]="'https://upload.wikimedia.org/wikipedia/commons/' + country.flag"
							style="width: 20px" />
						<ngb-highlight [result]="country.name" [term]="countryService.searchTerm"></ngb-highlight>
					</td>
					<td>
						<ngb-highlight [result]="country.area | number" [term]="countryService.searchTerm"></ngb-highlight>
					</td>
					<td>
						<ngb-highlight [result]="country.population | number" [term]="countryService.searchTerm">
						</ngb-highlight>
					</td>
				</tr>
			</tbody>
		</table>
		<div class="d-flex justify-content-between p-2">
		<!-- 	<ngb-pagination
			[collectionSize]="total$ | async" -->
			<ngb-pagination
			[(page)]="countryService.page"
			[pageSize]="countryService.pageSize"></ngb-pagination>
			<select class="custom-select" style="width: auto"
				name="pageSize" [(ngModel)]="countryService.pageSize">
				<option [ngValue]="2">2 items per page</option>
				<option [ngValue]="4">4 items per page</option>
				<option [ngValue]="6">6 items per page</option>
			</select>
		</div>
	</form>`,
	styles: ['thead > tr > th {    cursor: pointer;}']
})
export class NgBootstrapTableComponent implements OnInit {
	@Input() pageSize = 4;

	countries$!: Observable<Country[]>;
	total$!: Observable<number>;
	sortedColumn!: string;
	sortedDirection!: string;

	@ViewChildren(SBSortableHeaderDirective) headers!: QueryList<SBSortableHeaderDirective>;

	constructor(
		public countryService: CountryService,
		private changeDetectorRef: ChangeDetectorRef
	) { }

	ngOnInit() {
		this.countryService.pageSize = this.pageSize;
		this.countries$ = this.countryService.countries$;
		this.total$ = this.countryService.total$;
	}

	onSort({ column, direction }: SortEvent) {
		this.sortedColumn = column;
		this.sortedDirection = direction;
		this.countryService.sortColumn = column;
		this.countryService.sortDirection = direction;
		this.changeDetectorRef.detectChanges();
	}
}
