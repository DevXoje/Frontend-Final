import {Card} from "./card";
import {CarouselConfig} from "./carousel";

export type CarouselCardItem = {
	items: Card[];
	length: number;
};
export type CarouselCard = {
	items: CarouselCardItem[];
	config: CarouselConfig
};
