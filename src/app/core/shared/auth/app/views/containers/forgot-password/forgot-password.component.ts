import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Input } from '@shared/app-common/app/views/components/form/input';

@Component({
	selector: 'app-forgot-password',
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
	inputs: Input[] = [];
	form = new FormGroup({});
	formControls = {
		submit: { text: 'Recovery', },
		reset: {
			text: 'Return to login',
			action: () => {
				this.router.navigate(['login'])
			}
		},
	}
	constructor(private store: Store, private router: Router) {
		this.inputs.push({
			id: 'email',
			name: 'Email',
			type: 'email',
			validators: [

				Validators.required,
				Validators.email
			]
		});
	}
	ngOnInit() {
		this.form = new FormGroup(
			{
				'email': new FormControl('', this.inputs[0].validators)
			}
		);
	}
	onSubmit(event: Event) {
		const val = this.form.value;
		console.info("Forgot password ->", this.form.value);

	}
	get email() { return this.form.get('email'); }
}
