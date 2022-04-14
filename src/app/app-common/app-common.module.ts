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
import * as commonComponents from './components';
import { SortableHeaderDirective } from './components/table/directives/sortable.directive';
import { LoaderInterceptor } from './routing/loader.interceptor';

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

@NgModule({
	declarations: [...commonComponents.components, SortableHeaderDirective],
	imports: [...nativeModules, ...thirdsModules],
	exports: [...commonComponents.components],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: LoaderInterceptor,
			multi: true,
		},
	],
})
export class AppCommonModule {}
