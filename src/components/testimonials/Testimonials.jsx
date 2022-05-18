import React from "react";
import "./Testimonials.css";
import profile1 from "../../assets/profile.jpg";
import profile2 from "../../assets/profile5.jpg";
import profile3 from "../../assets/profile3.jpg";
import profile4 from "../../assets/profile4.jpg";

//swiper //
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "swiper/components/pagination/pagination.min.css";

import { Navigation, Pagination } from "swiper";

const data = [
  {
    id: 1,
    image: profile1,
    clientName: "women1",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas sunt unde, recusandae sapiente illum iure praesentium a perferendis doloribus laboriosam autem deserunt animi alias nisi neque minima, ex aut!",
  },
  {
    id: 2,
    image: profile2,
    clientName: "women2",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas sunt unde, recusandae sapiente illum iure praesentium a perferendis doloribus laboriosam autem deserunt animi alias nisi neque minima, ex aut!",
  },
  {
    id: 3,
    image: profile3,
    clientName: "women3",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas sunt unde, recusandae sapiente illum iure praesentium a perferendis doloribus laboriosam autem deserunt animi alias nisi neque minima, ex aut!",
  },
  {
    id: 4,
    image: profile4,
    clientName: "women4",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quas sunt unde, recusandae sapiente illum iure praesentium a perferendis doloribus laboriosam autem deserunt animi alias nisi neque minima, ex aut!",
  },
];

const testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container mySwiper"
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
      >
        {data.map(({ id, image, clientName, review }) => {
          return (
            <SwiperSlide key={id} className="testimonial">
              <div className="client__avatar">
                <img src={image} alt="" />
              </div>
              <h5 className="clients__name">{clientName}</h5>
              <small className="clients__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default testimonials;
