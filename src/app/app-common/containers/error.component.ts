import {Component} from '@angular/core';

type typeMocked = {
	name: string;
	population: number;
};

@Component({
	selector: 'app-error',
	template: ` <p>error works!</p> `,
})
export class ErrorComponent {
}
