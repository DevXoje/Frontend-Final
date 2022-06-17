import {IconProp} from "@fortawesome/fontawesome-svg-core";

export type Card = {
	id: number;
	title?: string;
	content?: string;
	footer?: string;
	image?: Image;
	disabled?: boolean;
	card_controls?: CardControl[];
};

export type CardControl = {
	icon?: IconProp;
	title?: string;
	action: (event: any) => void;
	disabled?: boolean
}
export type Image = {
	path: string;
	alt?: string;
}


