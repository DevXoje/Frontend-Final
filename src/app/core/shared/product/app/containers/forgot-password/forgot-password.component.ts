import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Input } from '@shared/app-common/app/components/form/input';

@Component({
	selector: 'app-forgot-password',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
	input!: Input;
	form = new FormGroup({});
	email_value: string = "";
	constructor() {
		this.input = {
			id: 'email',
			name: 'Email',
			type: 'email',
			validators: [
				//Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
				Validators.email
			]
		};
	}
	ngOnInit() {
		this.form = new FormGroup(
			{
				'email': new FormControl('', this.input.validators)
			}
		);
	}
	onSubmit(event: Event) {
		const val = this.form.value;
		console.info(this.form.value);

		if (val.email) {
			this.email_value = this.form.value;
			//this.authService.login(this.email);
		} else {
			console.error('error en datos introducidos');

		}
	}
	get email() { return this.form.get('email'); }
}
