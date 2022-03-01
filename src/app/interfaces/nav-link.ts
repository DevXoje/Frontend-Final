import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";


export interface NavLink {
	name: string;
	path: string;
	icon: IconProp;
	isActive: boolean
}
