import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup, ValidatorFn} from '@angular/forms';
import {Field} from '../../domain/field';
import {FieldControlService} from '../../services/field-control.service';

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html',
})
export class FormComponent implements OnInit, AfterViewInit {
	@Input() fields?: Field<string>[] | null;
	@Output() sendPayload = new EventEmitter<any>();
	form!: FormGroup;
	payLoad = '';

	constructor(private fcs: FieldControlService) {
	}

	@Input() extraValidators: ValidatorFn = () => null;

	ngOnInit() {
		console.log('FormComponent.ngOnInit', this.fields);
		this.form = this.fcs.toFormGroup(this.fields as Field<string>[]);
		this.form.valueChanges.subscribe(() => {
			this.form.addValidators(this.extraValidators);
		});

	}

	onSubmit() {
		this.payLoad = JSON.stringify(this.form.getRawValue());
		this.sendPayload.emit(this.form.value);
	}

	ngAfterViewInit(): void {

	}
}
