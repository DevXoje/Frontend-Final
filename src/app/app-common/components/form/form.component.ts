import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../domain/field';
import { FieldControlService } from '../../services/field-control.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  @Input() fields: Field<string>[] | null = [];
  @Output() sendPayload = new EventEmitter<any>();
  form!: FormGroup;
  payLoad = '';

  constructor(private fcs: FieldControlService) { }

  ngOnInit() {
    this.form = this.fcs.toFormGroup(this.fields as Field<string>[]);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.sendPayload.emit(this.form.value);
  }
}

