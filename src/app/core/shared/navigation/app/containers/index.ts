import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SideNavStoreComponent } from './side-nav-store/side-nav-store.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { TopNavStoreComponent } from './top-nav-store/top-nav-store.component';

export const containers = [TopNavComponent, SideNavComponent, FooterComponent, TopNavStoreComponent, SideNavStoreComponent];

export * from './top-nav/top-nav.component';
export * from './top-nav-store/top-nav-store.component';
export * from './side-nav/side-nav.component';
export * from './side-nav-store/side-nav-store.component';
export * from './footer/footer.component';
