import { SideNavItems, SideNavSection } from "@shared/navigation/domain/models";

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
