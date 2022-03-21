import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { Icon, Link, SideNavItems, SideNavSection } from "@shared/navigation/domain/models";

export const sideNavSections: SideNavSection[] = [
	{
		text: 'General',
		items: ['dashboard'],
	},
	{
		text: 'Clientes',
		items: ['layouts'],
	},
	{
		text: 'Productos',
		items: ['tables'],
	},
	{
		text: 'Facturacion',
		items: ['charts'],
	},
];
export const storeSideNavSections: SideNavSection[] = [
	{
		text: 'General',
		items: ['dashboard'],
	},
	{
		text: 'Clientes',
		items: ['layouts'],
	},
	{
		text: 'Productos',
		items: ['tables'],
	},
	{
		text: 'Facturacion',
		items: ['charts'],
	},
];

export const sideNavItems: SideNavItems = {
	dashboard: {
		icon: 'tachometer-alt',
		text: 'Dashboard',
		link: '/dashboard',
	},
	layouts: {
		icon: 'columns',
		text: 'Layouts',
		submenu: [
			{
				text: 'Static Navigation',
				link: '/dashboard/static',
			},
			{
				text: 'Light Sidenav',
				link: '/dashboard/light',
			},
		],
	},
	charts: {
		icon: 'chart-area',
		text: 'Charts',
		link: '/charts',
	},
	tables: {
		icon: 'table',
		text: 'Tables',
		link: '/tables',
	},
};

export const socialLinks: Icon[] = [
	{ path: "https://www.facebook.com/", icon: faFacebookF },
	{ path: "https://twitter.com/", icon: faTwitter },
	{ path: "https://www.google.com/", icon: faMailBulk },
	{ path: "https://twitter.com/", icon: faTwitter },
];
