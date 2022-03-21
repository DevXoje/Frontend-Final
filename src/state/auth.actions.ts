import { Auth } from "@shared/auth/domain/auth.model";

export class AddAuth {
  static readonly type = '[Auth] Add';
  constructor(public payload: Auth) { }
}
export class GetAuth {
  static readonly type = '[Auth] Get';
}
export class DeleteAuth {
  static readonly type = '[Auth] Delete';
  constructor(public id: number) { }
}

