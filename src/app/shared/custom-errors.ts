import { ErrorMessage, FormatErrorFunction } from "ng-bootstrap-form-validation";

export const CUSTOM_ERRORS: ErrorMessage[] = [
	{
		error: "required",
		format: requiredFormat as FormatErrorFunction
	}, {
		error: "email",
		format: emailFormat as FormatErrorFunction
	}
];

export function requiredFormat(label: string, error: any): string {
	return `${label} IS MOST DEFINITELY REQUIRED!`;
}

export function emailFormat(label: string, error: any): string {
	return `${label} doesn't look like a valid email address.`;
}
