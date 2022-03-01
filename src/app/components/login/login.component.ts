import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {


	formGroup: FormGroup = new FormGroup({});
	constructor() { }

	ngOnInit() {
		this.formGroup = new FormGroup({
			Email: new FormControl('', [
				Validators.required,
				Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
			]),
			Password: new FormControl('', [
				Validators.required,
				Validators.minLength(8),
				Validators.maxLength(20)
			])
		});
	}

	onSubmit() {
		console.log(this.formGroup);
	}

	onReset() {
		this.formGroup?.reset();
	}

}
