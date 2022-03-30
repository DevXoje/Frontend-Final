import { AuthRoleGuard } from './auth-role.guard';
import { AuthGuard } from './auth.guard';

export const guards = [AuthGuard, AuthRoleGuard];

export * from './auth.guard';
export * from './auth-role.guard';
