import React from "react";
import "./testimonials.css";
import Avatar, { genConfig } from "react-nice-avatar";
import { testimonials } from "./data";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Testimonials() {
  return (
    <section className="section testimonial container">
      <motion.h2
        className="section__title"
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        My client say
      </motion.h2>
      <span className="section__subtitle">Testimonial</span>
      <motion.div
        initial={{
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        <Swiper
          className="testimonial__container"
          loop
          grabCursor
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Autoplay]}
        >
          {testimonials?.map((testimonial) => {
            const config = genConfig(testimonial?.image);
            return (
              <SwiperSlide className="testimonial__card" key={testimonial?.id}>
                <Avatar
                  className="testimonial__img"
                  style={{ width: "3.75rem", height: "3.75rem" }}
                  {...config}
                />
                <h3 className="testimonial__name">{testimonial?.title}</h3>
                <p className="testimonial__description">
                  {testimonial?.description}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </section>
  );
}
