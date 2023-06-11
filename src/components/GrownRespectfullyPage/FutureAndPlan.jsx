import React from "react";
import { firstGRItems } from "../../data/GRItems";
import { Parallax } from "react-parallax";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Scrollbar } from "swiper";
SwiperCore.use([Pagination, Scrollbar]);

const FutureAndPlan = () => {
  const isDesktop = useMediaQuery({ minWidth: 1028 });
  return (
    <div>
      <div className="mx-auto flex w-full flex-col items-center md:gap-20 lg:gap-40 xl:w-3/4">
        <div className="flex w-full flex-col justify-between px-5 py-14 md:px-8 lg:flex-row lg:p-28 lg:pr-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-[40px]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The future of coffee
          </motion.h2>
          <motion.div
            className="flex w-full flex-col gap-6 pt-8  lg:w-[49%] lg:p-0"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p>
              More than 23,000 cups of coffee are drunk every second, but with
              so many of us enjoying it, we need to be careful not to be left
              with empty cups.
            </p>
            <p>
              Climate change, crop diseases, water shortage and people leaving
              farms for cities, all threaten the future of coffee. If we want to
              keep drinking it, we need to plan. That's why in 2010 we setup the
              NESCAFÉ Plan.
            </p>
          </motion.div>
        </div>
        {isDesktop ? (
          <motion.div
            className="grid w-full grid-cols-2 place-items-center gap-1 lg:px-8 xl:px-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            {firstGRItems.map((item, i) => (
              <div key={i} className="flex w-full gap-5">
                <Parallax
                  bgImage={item.image}
                  strength={500}
                  className={`h-[500px] w-[850px] ${
                    i === 0 && "rounded-tl-[110px]"
                  } ${i === 3 && "rounded-bl-[180px]"}`}
                  loading="lazy"
                >
                  <div className="h-[500px] w-full" />
                </Parallax>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="w-full px-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <Swiper
              id="teaser-slider"
              slidesPerView={1}
              spaceBetween={40}
              pagination={{ clickable: true }}
              className="pb-12 "
            >
              {firstGRItems.map((item, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={item.image}
                    alt=""
                    className="w-full"
                    loading="lazy"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        )}
        <div className="flex w-full flex-col justify-between px-5 py-14 md:pb-28 lg:flex-row lg:p-28 lg:pb-40 lg:pr-16 lg:pt-0">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-[40px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            The NESCAFÉ Plan
          </motion.h2>
          <motion.div
            className=" flex w-full flex-col gap-6 pt-8  lg:w-[49%] lg:p-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <p>
              In 2010, we brought our 80 years of global coffee knowledge to the
              next level, with one aim: to make sure all our coffee is
              responsibly sourced.
            </p>
            <p>
              Read on to find our more about how the NESCAFÉ Plan is helping
              farmer, farming communities and our planet.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FutureAndPlan;
