import { LoginData } from "@shared/app-common/app/components/form/login-data";
import { Auth, AuthStateModel } from "@shared/auth/domain/auth.model";

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public payload: Auth) { }
}

export class Logout {
  static readonly type = '[Auth] Logout';
}
/* export class GetAuth {
  static readonly type = '[Auth] Get';
} */
