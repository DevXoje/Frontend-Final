import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ErrorMessage } from 'ng-bootstrap-form-validation';
import { Input as InputModel } from '@shared/app-common/app/components/form/input';
//type authData = LoginData | SignUpData;

@Component({
	selector: 'app-form',
	template:  `
			<div [formGroup]="formGroup">
				<div class="form-group" *ngFor="let input of inputs">
				<label class="control-label">{{input.name}}</label>
				<input [type]="input.tipo" class="form-control" [formControlName]="input.name" *ngIf="input.tipo!=='textarea'"  autocomplete="on">
				<textarea name="input.name" class="form-control" id="input.name" cols="30" rows="10" [formControlName]="input.name" *ngIf="input.tipo=='textarea'"></textarea>
			</div>
			<button class="btn btn-default" type="button" (click)="onReset()">Reset</button>
			<button class="btn btn-primary pull-right" type="submit" (click)="onSubmit($event)">Submit</button>
			</div>`
})
export class FormComponent implements OnInit {
	formGroup: FormGroup = new FormGroup({});
	valor: string = "";
	@Input() inputs: InputModel[] = [];
	@Output() validSubmit = new EventEmitter<any>();
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
		//this.formGroup = this.fb.group({email: '',password: ''});
		const controls = Object.assign({});
		this.inputs.forEach(input => {
			controls[input.name] = new FormControl('', input.validators)
		});
		this.formGroup = this.fb.group(controls);
		//this.formGroup = new FormGroup(controls);
		this.formGroup.valueChanges.subscribe(
			(value) => console.log(value),
			(error) => console.error(error),
		);
	}

	onSubmit(event: Event) {
		this.validSubmit.emit(this.formGroup.value);
		event.preventDefault();
	}

	onReset() {
		this.formGroup.reset();
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
