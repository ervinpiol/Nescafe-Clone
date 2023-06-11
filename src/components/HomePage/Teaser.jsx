import React from "react";
import { TeaserItems } from "../../data/TeaserItems";
import { useMediaQuery } from "react-responsive";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Scrollbar } from "swiper";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

SwiperCore.use([Pagination, Scrollbar]);

const Teaser = () => {
  const isDesktop = useMediaQuery({ minWidth: 1028 });

  return (
    <div className="flex justify-center px-5 pt-10 lg:px-10">
      {isDesktop ? (
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2 lg:gap-5 xl:gap-10">
          {TeaserItems.map((teaser, i) => (
            <motion.div key={i}>
              <Parallax
                strength={500}
                bgImage={teaser.image}
                className="rounded-br-[150px] rounded-tl-[50px]"
                bgImageStyle={{ objectPosition: "center" }}
                loading="lazy"
              >
                <div className="h-[500px] w-[700px] cursor-pointer bg-black bg-opacity-50 text-white lg:h-[400px] lg:w-full  xl:h-[500px] xl:w-[700px]">
                  <div className="mx-auto flex h-full w-5/6 flex-col items-center justify-center">
                    <h2 className="text-center text-[40px]">{teaser.h1Text}</h2>
                    <p className="text-center">{teaser.pText}</p>
                  </div>
                </div>
              </Parallax>
            </motion.div>
          ))}
        </div>
      ) : (
        <Swiper
          id="teaser-slider"
          slidesPerView={1}
          pagination={{ clickable: true }}
          spaceBetween={20}
          className="pb-12"
        >
          {TeaserItems.map((teaser, i) => (
            <SwiperSlide key={i}>
              <div
                className="flex h-[480px] items-center justify-center rounded-br-[80px] rounded-tl-[50px]"
                style={{
                  background: `url(${teaser.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                loading="lazy"
              >
                <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-br-[80px] rounded-tl-[50px] bg-black bg-opacity-60 px-5 text-white">
                  <div className="text-center">
                    <h2 className="font-Nescafe text-3xl">{teaser.h1Text}</h2>
                    <p className="pt-5">{teaser.pText}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default Teaser;
