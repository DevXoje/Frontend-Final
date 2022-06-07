import {Field, FieldType} from "../field";
import {FormControl, Validators} from "@angular/forms";

export class ImageInput extends Field<string> {
	override controlType = 'image';
	override type = 'file' as FieldType;
	override validators = [Validators.pattern(/\.(gif|jpg|jpeg|tiff|png)$/i)];


	constructor(options: {} = {}) {
		super(options);
	}
}

export function requiredFileType(type: string) {
	return function (control: FormControl) {
		const file = control.value;
		if (file) {
			//const extension = file.name.split('.')[1].toLowerCase();
			const extension = file.split('.')[1].toLowerCase();
			if (type.toLowerCase() !== extension.toLowerCase()) {
				return {
					requiredFileType: true
				};
			}

			return null;
		}

		return null;
	};
}
