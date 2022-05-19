export type Card = {
	title?: string;
	name?: string;
	id: number;
	content?: string;
	btn_content?: string;
	imagePath?: string;
	image?: {
		path: string;
		alt?: string;
	};
	footer?: string;
	disabled?: boolean;
};
