import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, ValidatorFn} from '@angular/forms';
import {Field} from '../../domain';
import {FieldControlService} from '../../services/field-control.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
})
export class FormComponent implements OnInit, AfterViewInit {
	@Input() only: string[] = [];
	@Input() exclude?: string[] = [];
	@Input() fields?: Field<string>[] | null;
	@Output() sendPayload = new EventEmitter<any>();
	form!: FormGroup;
	payLoad = '';

	constructor(private fcs: FieldControlService) {
	}

	isInOnly(name: string): boolean {
		return (this.only && this.only.length > 0) ? this.only.includes(name) : true;
	}

	isInExclude(name: string): boolean {
		return (this.exclude && this.exclude.length > 0) ? this.exclude.includes(name) : false;
	}

	isInForm(name: string): boolean {
		return this.isInOnly(name) && !this.isInExclude(name);
	}

	@Input() extraValidators: ValidatorFn = () => null;

	ngOnInit() {
		const fieldsToForm = this.fields?.filter(f => this.isInForm(f.key));
		this.form = this.fcs.toFormGroup(fieldsToForm as Field<string>[]);
		this.form.valueChanges.subscribe({
			next: (value) => this.form.addValidators(this.extraValidators),
			error: (err) => console.error('FormComponent.ngOnInit.valueChanges.error', err),
		});
	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.getRawValue());
		//this.form.setValue({"image": document.querySelector('.preview-image')?.getAttribute('src'),});
		console.log(this.form);
		this.sendPayload.emit(this.form.value);
	}

	ngAfterViewInit(): void {

	}

	isValid(): boolean {
		return (this.form) ? this.form.valid : false;
	}


}
