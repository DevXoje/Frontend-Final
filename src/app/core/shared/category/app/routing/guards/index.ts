import { AuthRoleGuard } from './auth-role.guard';
import { AuthGuard } from './auth.guard';
import {  ProductResolver} from "./product.resolver";
export const guards = [AuthGuard, AuthRoleGuard];
export const resolvers = [ProductResolver];

export * from './auth.guard';
export * from './auth-role.guard';
export * from './product.resolver';
