import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HeroSlider from "../components/HeroSlider";
import ContactForm from "../components/ContactForm";
import { testimonials, galleryItems } from "../data/content";
import { contactInfo } from "../data/nav";

export default function Home() {
  return (
    <>
      <HeroSlider />

      {/* Feature Strip */}
      <div className="feature-strip bg-dark">
        <div className="container-full">
          <div className="feature-strip-row">
            {[
              { label: "Fertilizers", icon: "fas fa-flask" },
              { label: "Biostimulants", icon: "fas fa-seedling" },
              { label: "Soil Conditioners", icon: "fas fa-tint" },
              { label: "Bio-Control", icon: "fas fa-shield-alt" },
            ].map((item) => (
              <Link to="/services" className="feature-strip-item" key={item.label}>
                <div className="icon-tile icon-tile-sm">
                  <i className={item.icon} />
                </div>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="default-padding text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h4 className="sub-title">Sustainability, Made for Your Crop</h4>
              <h2 className="title mb-25">Better Formulas Begin with Understanding Your Fields</h2>
              <p>
                Bionagro Export works with growers and distributors to deliver fertilizers, biostimulants, and soil
                solutions tailored to each crop, climate, and production goal. Together, we build practical,
                environmentally responsible programs that nurture healthier soil, use resources wisely, and help
                every harvest reach its potential.
              </p>
              <Link to="/about-us" className="mt-15">
                <span>
                  <i className="fas fa-arrow-right" /> DISCOVER OUR APPROACH
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="gallery-style-one-area default-padding bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h5 className="sub-title">Tailored by Crop</h5>
                <h2 className="title">Solutions Designed for Real Fields</h2>
                <div className="devider" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{ 768: { slidesPerView: 2 }, 1200: { slidesPerView: 3 } }}
                className="carousel-style-one"
              >
                {galleryItems.map((item) => (
                  <SwiperSlide key={item.title}>
                    <div className="gallery-style-one">
                      <img src={item.image} alt={item.title} />
                      <div className="overlay">
                        <span>{item.category}</span>
                        <h4>
                          <Link to="/services">{item.title}</Link>
                        </h4>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimonials-area default-padding" style={{ backgroundImage: "url(assets/img/shape/23.png)" }}>
        <div className="container">
          <div className="row align-center">
            <div className="col-lg-5">
              <div className="testimonial-info text-center">
                <h4>Growing Together</h4>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop
                className="testimonial-carousel testimonial-style-one"
              >
                {testimonials.map((t) => (
                  <SwiperSlide key={t.name}>
                    <div className="testimonial-style-two">
                      <div className="item">
                        <div className="content">
                          <p>&ldquo;{t.quote}&rdquo;</p>
                        </div>
                        <div className="provider">
                          <div className="info">
                            <h4>{t.name}</h4>
                            <span>{t.role}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="contact-area bg-gray default-padding" style={{ backgroundImage: "url(assets/img/shape/28.png)" }}>
        <div className="container">
          <div className="row align-center">
            <div className="col-tact-stye-one col-lg-7">
              <div className="contact-form-style-one mb-md-50">
                <h5 className="sub-title">Let's Grow Together</h5>
                <h2 className="heading">Tell Us About Your Crop or Partnership</h2>
                <ContactForm />
              </div>
            </div>

            <div className="col-tact-stye-one col-lg-5 pl-60 pl-md-15 pl-xs-15">
              <div className="contact-style-one-info">
                <h2>
                  Contact <span>Information</span>
                </h2>
                <p>
                  Looking for a solution tailored to your crop or interested in becoming a distribution partner?
                  Let's start the conversation.
                </p>
                <p>
                  <Link to="/track-request" className="btn btn-theme btn-sm radius">
                    Track Your Request
                  </Link>
                </p>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fas fa-phone-alt" />
                    </div>
                    <div className="content">
                      <h5 className="title">Hotline</h5>
                      <a href="#hotline">{contactInfo.phone}</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-map-marker-alt" />
                    </div>
                    <div className="info">
                      <h5 className="title">Our Location</h5>
                      <p>{contactInfo.address}</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fas fa-envelope-open-text" />
                    </div>
                    <div className="info">
                      <h5 className="title">Official Email</h5>
                      <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
