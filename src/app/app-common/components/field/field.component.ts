import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '../../domain/field';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html'
})
export class FieldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() field!: Field<string>;
  @Input() form!: FormGroup;
  get isValid() { return this.form.controls[this.field.key].valid; }

}
