import { Component, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

type typeMocked = {
	name: string;
	population: number;
};
@Component({
	selector: 'app-error',
	template: ` <p>error works!</p> `,
})
export class ErrorComponent {}
