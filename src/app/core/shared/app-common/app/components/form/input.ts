import { ValidatorFn } from "@angular/forms";

export type Input = {
	//[key: string]: {
	id: string,
	name?: string;
	placeholder?: string,
	label?: string,
	type: string;
	validators: ValidatorFn[];
	autocomplete?: "username" | "current-password";
	//}
}
