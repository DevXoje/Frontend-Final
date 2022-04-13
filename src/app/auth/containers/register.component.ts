import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Field } from 'src/app/app-common/domain/field';
import { FieldControlService } from 'src/app/app-common/services/field-control.service';
import { LoginData, RegisterData } from '../domain/auth.model';
import { AuthService } from '../services/auth.service';
import { Login, Signup } from '../state/auth.actions';

@Component({
  selector: 'app-register',
  template: `
<div>
	<h2>Registrate</h2>
	<app-form [fields]="fields$ | async" (sendPayload)="registerHandler($event)"></app-form>
</div>`,
})
export class RegisterComponent implements OnInit {

  fields$?: Observable<Field<any>[]>;

  constructor(
    fieldService: FieldControlService,
    private store: Store,
    private authService: AuthService
  ) { this.fields$ = fieldService.getRegisterFields(); }

  ngOnInit(): void { }
  registerHandler(event: RegisterData) {
    this.store.dispatch(new Signup(event));
    //this.authService.mockAuth('customer');//MOCK
    //const savedToken = this.authService.checkToken();
    //this.authService.checkRole(savedToken);

  }

}
