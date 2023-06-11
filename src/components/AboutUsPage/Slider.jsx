import React from "react";
import { AUSliderItems } from "../../data/AUItems";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
SwiperCore.use([Navigation, Pagination, Scrollbar]);

const Slider = () => {
  return (
    <Swiper
      id="au-slider"
      spaceBetween={30}
      slidesPerView={1}
      navigation
      loop={3}
      pagination={{ clickable: true }}
    >
      {AUSliderItems.map((item, i) => (
        <SwiperSlide
          key={i}
          className="flex flex-col items-center gap-12 px-5 pt-10 xl:px-0"
        >
          <img
            src={item.image}
            alt={item.name}
            className="mx-auto"
            loading="lazy"
          />
          <div className="flex flex-col items-center pb-20 pt-10">
            <h3 className="text-3xl">{item.title}</h3>
            <p className="w-full pt-5 text-center text-[15px] opacity-75 lg:w-[600px] xl:w-[780px]">
              {item.details}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
