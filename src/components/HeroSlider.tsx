import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";

interface Slide {
  image: string;
  heading: string;
  ctaLabel: string;
  ctaTo: string;
}

const slides: Slide[] = [
  {
    image: "assets/img/hero-crop-field.jpg",
    heading: "Sustainable Solutions, Tailored to Every Crop",
    ctaLabel: "Our Sustainable Approach",
    ctaTo: "/about-us",
  },
  {
    image: "assets/img/hero-precision-ag.jpg",
    heading: "Crop-Specific Formulas. Partnerships That Grow.",
    ctaLabel: "Partner With Us",
    ctaTo: "/contact-us",
  },
];

export default function HeroSlider() {
  return (
    <div className="banner-area navigation-circle text-light text-center banner-style-three-area zoom-effect overflow-hidden">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{ prevEl: ".swiper-button-prev", nextEl: ".swiper-button-next" }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        className="banner-fade"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.heading} className="banner-style-three">
            <div
              className="banner-thumb bg-cover shadow dark"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="container">
              <div className="row align-center">
                <div className="col-lg-10 offset-lg-1">
                  <div className="content">
                    <h2>{slide.heading}</h2>
                    <div className="button">
                      <Link className="btn btn-theme secondary btn-md radius animation" to={slide.ctaTo}>
                        {slide.ctaLabel}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev" />
        <div className="swiper-button-next" />
      </Swiper>
    </div>
  );
}
