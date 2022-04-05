import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { Input as InputModel } from '@shared/app-common/app/views/components/form/input';
import { faEye } from '@fortawesome/free-solid-svg-icons';
//type authData = LoginData | SignUpData;

@Component({
	selector: 'app-form',
	templateUrl: 'form.component.html',
	/* `
   <div [formGroup]="formGroup">
   	
	   <div class="form-group" *ngFor="let input of inputs">
	   <label class="control-label">{{input.name}}</label>
	   <input [type]="input.type" class="form-control" [formControlName]="input.name" *ngIf="input.type!=='textarea'"  autocomplete="on">
	   <textarea name="input.name" class="form-control" id="input.name" cols="30" rows="10" [formControlName]="input.name" *ngIf="input.type=='textarea'"></textarea>
   </div>
   <button class="btn btn-default" type="button" (click)="onReset()">Reset</button>
   <button class="btn btn-primary pull-right" type="submit" (click)="onSubmit($event)">Submit</button>
   </div>` */
})
export class FormComponent implements OnInit {
	formGroup: FormGroup = new FormGroup({});
	valor: string = "";
	@Input() inputs: InputModel[] = [];
	@Output() validSubmit = new EventEmitter<any>();
	errors: any[] = [];
	@Input() formControls = {
		submit: { text: 'Login', },
		reset: { text: 'Reset', action: () => { } }
	}
	eyeIcon = faEye;
	customErrorMessages: ErrorMessage[] = [
		{
			error: 'required',
			format: (label, error) => `${label?.toUpperCase()} IS DEFINITELY REQUIRED!`
		},
		{
			error: 'pattern',
			format: (label, error) => `${label?.toUpperCase()} DOESN'T LOOK RIGHT...`
		}
	];
	constructor(private fb: FormBuilder) { }

	ngOnInit() {
		this.inputs.reduce((form, input) => {
			form.addControl(input.id, new FormControl(null, input.validators));
			return form;
		}, this.formGroup);
	}

	onSubmit(event: Event) {
		event.preventDefault();
		this.validSubmit.emit(this.formGroup.value);
	}

	onReset() {
		this.formGroup.reset();
	}
	setErrors(arg: any) {

		if (arg) {
			this.errors = Object.keys(arg);

		} else {
			this.errors = [];
		}

	}
	togglePassword(e: Event) {// TODO: BUG - Solo funciona si el click es en un contenedor en concreto
		const target = e.target as HTMLDivElement;
		console.log("🚀 ~ file: form.component.ts ~ line 87 ~ FormComponent ~ togglePassword ~ target", target)
		e.preventDefault();

		let input = target.parentElement?.parentElement?.parentElement?.querySelector('input') as HTMLInputElement;
		console.log("🚀 ~ file: form.component.ts ~ line 90 ~ FormComponent ~ togglePassword ~ input", input)


		input.type = input.type === 'password' ? 'text' : 'password';

	}

}



















/*
{
			Email: new FormControl('', [
				Validators.required,
				Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
			]),
			Password: new FormControl('', [
				Validators.required,
				Validators.minLength(8),
				Validators.maxLength(20)
			]),
			Phone: new FormControl('', [
				Validators.required,
				Validators.pattern(/^[0-9]{10}$/)

			]),
			Name: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(20)

			]),
			Price: new FormControl('', [
				Validators.required,
				Validators.min(1),

			]),
			File: new FormControl('', [
				Validators.required,
				Validators.pattern(/^[0-9]{10}$/)

			]),
			Description: new FormControl('', [
				Validators.required,

			]),
		} */
