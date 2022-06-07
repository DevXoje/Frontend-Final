export type CarouselItem = {
	image: string;
	caption: string;
	description: string;
};
export type CarouselConfig = {
	interval: number;
	wrap: boolean;
	keyboard: boolean;
	pauseOnHover: boolean;
	
};
export type Carousel = {
	items: CarouselItem[],
	config: CarouselConfig
};

