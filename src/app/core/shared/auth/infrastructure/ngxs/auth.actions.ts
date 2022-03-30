import { Auth, AuthStateModel, LoginData, SignUpData } from "@shared/auth/domain/auth.model";

export class Login {
  static readonly type = '[Auth] Login';
  constructor(public userLogged: LoginData) { }
}

export class Logout {
  static readonly type = '[Auth] Logout';
}

export class SignUp {
  static readonly type = '[Auth] SignUp';
  constructor(public payload: SignUpData) { }

}
/* export class GetAuth {
  static readonly type = '[Auth] Get';
} */
