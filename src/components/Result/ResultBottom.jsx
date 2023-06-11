import React, { useState } from "react";
import NESCAFECLASSIC from "../../assets/AllCoffees/Coffees/NESCAFE-CLASSIC.webp";
import NESCAFECLASSICDECAF from "../../assets/AllCoffees/Coffees/NESCAFE-CLASSIC-DECAF.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import { useMediaQuery } from "react-responsive";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const ProductItem = ({ imgSrc, title, description }) => {
  return (
    <Link to={`/all-coffees/${title}`}>
      <img src={imgSrc} alt="" className="mx-auto w-48" loading="lazy" />
      <div className="flex flex-col items-start gap-5 pt-6">
        <h4 className="h-14 font-Nescafe text-[22px]">{title}</h4>
        <div className="flex gap-2 text-sm text-gray-300">
          {Array(5)
            .fill()
            .map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} />
            ))}
        </div>
        <p>{description}</p>
      </div>
    </Link>
  );
};

const ResultBottom = () => {
  const products = [
    {
      imgSrc: NESCAFECLASSIC,
      title: "NESCAFÉ CLASSIC",
      description:
        "NESCAFÉ CLASSIC. 100% pure and natural coffee to give you the strength to",
    },
    {
      imgSrc: NESCAFECLASSICDECAF,
      title: "NESCAFÉ Classic Decaf Coffee",
      description:
        "Enjoy the taste of NESCAFÉ CLASSIC without the caffeine. Naturally",
    },
  ];

  const isDesktop = useMediaQuery({ minWidth: 769 });

  return (
    <div className="flex flex-col gap-12 px-5 pb-16 pt-36 lg:flex-row xl:gap-48 xl:pl-16 xl:pr-48">
      <motion.div
        className="w-full lg:w-1/3 xl:w-1/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h3 className="pb-4 text-3xl">Coffee for every experience</h3>
        <p>
          From NESCAFÉ CLASSIC to our NESCAFÉ GOLD to our range of NESCAFÉ 3in1
          Mixes, we've created coffees for all tastes and occasions.
        </p>
      </motion.div>
      {isDesktop ? (
        <div className="flex w-full flex-1 gap-7">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="w-1/2 rounded-xl p-8 pb-12 shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2 * (index + 1), duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 100 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <ProductItem
                imgSrc={product.imgSrc}
                title={product.title}
                description={product.description}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: 100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            speed={600}
            className="w-full rounded-xl shadow-2xl"
            id="result-slider"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="w-full p-8 pb-12">
                  <ProductItem
                    imgSrc={product.imgSrc}
                    title={product.title}
                    description={product.description}
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}
    </div>
  );
};

export default ResultBottom;
