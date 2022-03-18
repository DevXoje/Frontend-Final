import { LayoutAuthComponent } from './layout-auth/layout-auth.component';
import { LayoutDashboardComponent } from './layout-dashboard/layout-dashboard.component';
import { LayoutErrorComponent } from './layout-error/layout-error.component';
import { LayoutStoreComponent } from './layout-store/layout-store.component';

export const layouts = [LayoutDashboardComponent, LayoutAuthComponent, LayoutErrorComponent, LayoutStoreComponent];

export * from './layout-dashboard/layout-dashboard.component';
export * from './layout-auth/layout-auth.component';
export * from './layout-error/layout-error.component';
export * from './layout-store/layout-store.component';
