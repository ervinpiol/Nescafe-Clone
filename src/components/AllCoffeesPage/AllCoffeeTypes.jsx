import React, { useState } from "react";
import { coffeeFilterType } from "../../data/AllCoffeeItems";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const AllCoffeeTypes = ({ handleCoffeeTypeClick }) => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  const [selectedFilter, setSelectedFilter] = useState(
    coffeeFilterType[0].coffeeType
  );

  return (
    <div>
      <div className="absolute bottom-0 z-[99] flex w-full items-start justify-center rounded-tl-[60px] bg-white py-2.5 md:py-6 lg:rounded-tl-[130px] xl:py-8">
        {isDesktop ? (
          <div className="flex gap-12 lg:gap-8 xl:gap-12">
            {coffeeFilterType.map((item, i) => (
              <motion.div
                key={i}
                className="group flex cursor-pointer flex-col items-center lg:w-40 lg:gap-4"
                onClick={() => {
                  handleCoffeeTypeClick(item.coffeeType);
                  setSelectedFilter(item.coffeeType);
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.3 * (i + 1), duration: 1 }}
                variants={{
                  hidden: { opacity: 0, y: 0 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 md:w-14 lg:w-16 xl:w-20"
                />
                <h5
                  className={`w-full rounded-[3px] px-2 py-0.5 text-center font-GothamRoundedMedium text-[10px] font-extrabold group-hover:bg-GrayBG2 lg:text-[13px] xl:px-0 ${
                    selectedFilter === item.coffeeType ? "bg-GrayBG2" : ""
                  }`}
                >
                  {item.name}
                </h5>
              </motion.div>
            ))}
          </div>
        ) : (
          <Swiper
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            id="coffee-type-slider"
          >
            {coffeeFilterType.map((item, i) => (
              <SwiperSlide key={i}>
                <div
                  className="flex cursor-pointer flex-col items-center lg:w-40 lg:gap-4"
                  onClick={() => {
                    handleCoffeeTypeClick(item.coffeeType);
                    setSelectedFilter(item.coffeeType);
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 lg:w-20"
                  />
                  <h5
                    className={`rounded-[3px] px-3 py-0.5 text-center font-GothamRoundedMedium text-[10px] font-extrabold lg:text-[13px] ${
                      selectedFilter === item.coffeeType ? "bg-GrayBG2" : ""
                    }`}
                  >
                    {item.name}
                  </h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default AllCoffeeTypes;
