export type Sidebar = {
	title: string,
	btn_content: string,
	items?: SidebarItem[]
};
export type SidebarItem = {
	title: string,
	url: string,
	icon: string,
	active?: boolean
};


