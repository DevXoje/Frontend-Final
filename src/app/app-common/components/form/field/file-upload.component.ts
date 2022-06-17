import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";


@Component({
		selector: 'app-file-upload',
		template: `

			<ng-content [select]="[content]" (change)="handleChange($event)"></ng-content>


			<img [src]="imageFile.link" [alt]="imageFile.name" class="preview-image" width="50%" *ngIf="imageFile">

			<!--<app-progress [progress]="progress"></app-progress>-->`,
		styles: [``],

	},
)
export class FileUploadComponent implements OnInit {

	imageFile?: { link: string, file: any, name: string };
	@Input() form!: FormGroup;
	@Input() progress!: number;
	@Input() field!: any;

	file: File | null = null;


	constructor() {

	}

	handleChange(event: any) {

		const file = event.target.files[0] as File;
		this.file = file;
		this.imageFile = {
			link: URL.createObjectURL(file),
			file: file,
			name: file.name
		};
		this.imagesPreview();
		if (file) {
			this.form.patchValue({
				image: file
			});
		}

	}

	imagesPreview() {

		const reader = new FileReader();
		reader.onload = (_event: any) => {
			this.imageFile = {
				link: _event.target.result,
				file: this.file,
				name: this.file?.name as string
			};
		};
		try {
			reader.readAsDataURL(this.file as File);
		} catch (e: any) {
			console.error("Error catched=> ", e);
		}
	}

	ngOnInit(): void {

	}

}
