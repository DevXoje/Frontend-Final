import { SideNavComponent } from './side-nav.component';
import { SideNavStoreComponent } from './side-nav-store.component';
import { TopNavComponent } from './top-nav.component';
import { TopNavStoreComponent } from './top-nav-store/top-nav-store.component';

export const containers = [
	TopNavComponent,
	SideNavComponent,
	TopNavStoreComponent,
	SideNavStoreComponent
];

export * from './top-nav.component';
export * from './top-nav-store/top-nav-store.component';
export * from './side-nav.component';
export * from './side-nav-store.component';
