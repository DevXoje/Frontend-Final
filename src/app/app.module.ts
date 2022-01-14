import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LenguageFormComponent } from './components/lenguage-form/lenguage-form.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		AppComponent,
		NavComponent,
		FooterComponent,
		LenguageFormComponent,
	],
	imports: [
		BrowserModule,
		FormsModule, ReactiveFormsModule,
		FontAwesomeModule,RouterModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
