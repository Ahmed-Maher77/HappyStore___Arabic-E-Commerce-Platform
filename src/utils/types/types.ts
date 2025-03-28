// ======================== Navbar Links ========================
export type navLinksTypes = {
	title: string;
	link: string;
	icon?: string;
	engTitle?: string;
}[];

// ======================== Swiper Slides ========================
export type SwiperPropTypes = {
	slides: { title: string; description: string; image: string; bgColor: string }[];
};
