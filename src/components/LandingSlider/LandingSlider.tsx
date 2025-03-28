import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./LandingSlider.css";
import { SwiperPropTypes } from "../../utils/types/types";
import { useState, useMemo } from "react";

const LandingSlider = ({ slides }: SwiperPropTypes) => {
    const [slideBgColor, setSlideBgColor] = useState(slides[0]?.bgColor || "#ffffff");

    // Memoize slides to prevent re-renders
    const memoizedSlides = useMemo(() => slides, [slides]);

    return (
        <section className="Landing-Slider transition-colors duration-500 ease-in-out" style={{ backgroundColor: slideBgColor }} aria-label="Image slider">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
                direction="horizontal"
                grabCursor={true}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{
                    clickable: true,
                    type: "bullets",
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                    stopOnLastSlide: false,
                }}
                onSlideChange={(swiper) => {
                    const activeIndex = swiper.realIndex;
                    setSlideBgColor(slides[activeIndex]?.bgColor || "#ffffff");
                }}
            >
                {/* ==================== Render slides ==================== */}
                {memoizedSlides.map((slide, i) => (
                    <SwiperSlide key={i} aria-roledescription="slide">
                        <div className="container mx-auto px-4 h-full">
                        <figure className="flex flex-col-reverse md:flex-row items-center justify-center text-center h-full gap-3 max-md:pt-5">
                            <img src={slide.image} alt={slide.title} className="block md:mt-[60px] max-w-[200px] md:max-w-[300px] lg:max-w-[400px] main-img" />
                            <figcaption className="mt-4">
                                <h3 className="text-lg lg:text-xl font-semibold main-c">{slide.title}</h3>
                                <p className="mt-2 text-xl lg:text-[1.7rem] font-bold pink-fixed-c">{slide.description}</p>
                            </figcaption>
                        </figure>
                </div>
                    </SwiperSlide>
                ))}

                {/* ==================== Navigation Controls ==================== */}
                <div className="swiper-button-next" aria-label="Next slide"></div>
                <div className="swiper-button-prev" aria-label="Previous slide"></div>
                <div className="swiper-pagination"></div>
            </Swiper>
        </section>
    );
};

export default LandingSlider;
