import { IconProp } from "@fortawesome/fontawesome-svg-core";
export interface Link{
	text: string;
	path: string;
	icon?: IconProp;
}
export interface Icon{
	text?: string;
	path: string;
	icon: IconProp;
}

export interface SBRouteData {
	title?: string;
	activeTopNav?: string;
	breadcrumbs: Breadcrumb[];
}

export interface Breadcrumb {
	text: string;
	link?: string;
	active?: boolean;
}

export interface SideNavItems {
	[index: string]: SideNavItem;
}

export interface SideNavItem {//TODO: Introducir interface para el Link
	icon?: IconProp;
	text: string;
	link?: string;
	submenu?: SideNavItem[];
}

export interface SideNavSection {
	text?: string;
	items: string[];
}
