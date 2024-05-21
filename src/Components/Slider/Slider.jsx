import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/effect/coverflow";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "../../assets/cows.png";
import slide_image_2 from "../../assets/farmer.png";

import "./slider.css";

const Slider = () => {
  return (
    <div className="slider">
      <h1>Slider</h1>
      <p>Slider will go here</p>
    </div>
  );
};

export default Slider;
