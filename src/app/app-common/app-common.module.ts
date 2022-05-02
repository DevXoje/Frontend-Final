import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ToastrModule } from 'ngx-toastr';
import { SortableHeaderDirective } from './components/table/directives/sortable.directive';
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
		timeOut: 1000,
		positionClass: 'toast-top-right',
		preventDuplicates: true,
	}),
];

import * as authInterceptors from '../auth/routing/interceptors';
import * as commonInterceptors from './routing/interceptors';

import * as commonContainers from './containers';
import * as commonComponents from './components';
import * as commonLayouts from './layouts';

@NgModule({
	declarations: [
		...commonComponents.components,
		...commonContainers.containers,
		...commonLayouts.layouts,
		SortableHeaderDirective,
	],
	imports: [...nativeModules, thirdsModules],
	exports: [
		...commonComponents.components,
		...commonLayouts.layouts,
		thirdsModules,
	],
	providers: [
		...commonInterceptors.interceptors,
		...authInterceptors.interceptors,
	],
})
export class AppCommonModule {}
