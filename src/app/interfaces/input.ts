import { ValidatorFn } from "@angular/forms";

export interface Input {
	name: string;
	tipo: string;
	validators: ValidatorFn[];
}
