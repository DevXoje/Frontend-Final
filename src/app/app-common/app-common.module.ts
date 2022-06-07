import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgApexchartsModule} from 'ng-apexcharts';
import {ToastrModule} from 'ngx-toastr';
import {SortableHeaderDirective} from './components/table/directives/sortable.directive';
import * as authInterceptors from '../auth/routing/interceptors';
import * as commonInterceptors from './routing/interceptors';

import * as commonContainers from './containers';
import * as commonComponents from './components';

const nativeModules = [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule,
	HttpClientModule,
];
const thirdsModules = [
	NgbModule,
	FontAwesomeModule,
	NgApexchartsModule,
	ToastrModule.forRoot({
		timeOut: 1500,
		positionClass: 'toast-top-right',
		preventDuplicates: true,
		maxOpened: 1,
	}),
];

@NgModule({
	declarations: [
		...commonComponents.components,
		...commonContainers.containers,
		SortableHeaderDirective,
	],
	imports: [...nativeModules, thirdsModules],
	exports: [
		...commonComponents.components,
		thirdsModules,
		...nativeModules
	],
	providers: [
		...commonInterceptors.interceptors,
		...authInterceptors.interceptors,
	],
})
export class AppCommonModule {
}
