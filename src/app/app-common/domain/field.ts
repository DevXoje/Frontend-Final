import { ValidatorFn } from "@angular/forms";

type FieldType = 'text' | 'select' | 'number' | 'password' | 'email' | 'date' | 'file';
export class Field<T> {
	value: T | undefined;
	key: string;
	label: string;
	required: boolean;
	order: number;
	controlType: string;
	placeholder: string;
	type: FieldType;
	options: { key: string, value: string }[];
	validators: ValidatorFn[];


	constructor(options: {
		value?: T;
		key?: string;
		label?: string;
		required?: boolean;
		order?: number;
		controlType?: string;
		placeholder?: string;
		type?: FieldType;
		options?: { key: string, value: string }[];
		validators?: ValidatorFn[];
	} = {}) {
		this.value = options.value;
		this.key = options.key || '';
		this.label = options.label || '';
		this.required = !!options.required;
		this.order = options.order === undefined ? 1 : options.order;
		this.controlType = options.controlType || '';
		this.placeholder = options.placeholder || '';
		this.type = options.type || 'text';
		this.options = options.options || [];
		this.validators = options.validators || [];
	}
}