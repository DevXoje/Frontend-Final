import { ValidatorFn } from "@angular/forms";

export interface Input {
	//[key: string]: {
	id: string,
	name: string;
	placeholder?: string,
	type: string;
	validators: ValidatorFn[];
	//}
}
