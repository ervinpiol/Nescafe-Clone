import React, { useState } from "react";
import { HomeCoffeeItems } from "../../data/HomeCoffeeItems";
import CoffeeBeansDesktop from "../../assets/HomePage/coffee-beans-desktop.webp";
import CoffeeBeansMobile from "../../assets/HomePage/coffee-beans-mobile.webp";
import LeafGray from "../../assets/Brand/leaf-gray.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const HomeCoffee = ({ handleChosenCoffee }) => {
  const [mainItem, setMainItem] = useState(HomeCoffeeItems[0]);
  const [childItems, setChildItems] = useState([
    HomeCoffeeItems[1],
    HomeCoffeeItems[2],
  ]);

  const swapItems = (index) => {
    const currentMainItem = mainItem;
    const currentChildItems = [...childItems];
    setMainItem(currentChildItems[index]);
    currentChildItems[index] = currentMainItem;
    setChildItems(currentChildItems);
  };

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <div className="py-20 pl-5 xl:pl-0">
      <div className="mx-auto flex h-full w-full flex-col lg:flex-row lg:gap-10 xl:w-[1600px] xl:gap-20">
        <div className="flex h-[500px] w-full flex-col gap-14 lg:h-[380px] lg:w-2/5 lg:flex-row lg:items-end">
          <Parallax
            bgImage={isDesktop ? CoffeeBeansDesktop : CoffeeBeansMobile}
            strength={500}
            className="relative h-full w-full border-l-2 border-black bg-contain lg:w-40 lg:border-none xl:w-44"
            bgImageStyle={{ objectFit: "contain", objectPosition: "center" }}
          >
            <div className="absolute top-48 hidden h-[2px] w-full bg-black lg:block" />
          </Parallax>
          <motion.div
            className="w-full lg:w-3/4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <h2 className="text-[40px] lg:text-[34px] lg:leading-10 xl:text-[40px] xl:leading-[50px]">
              {" "}
              {mainItem.h2Text}
            </h2>
            <p className="pt-3">{mainItem.pText}</p>
            <Link
              to={`/all-coffees/${mainItem.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              onClick={() => handleChosenCoffee(mainItem.name)}
            >
              <button className="flex items-center gap-7 pt-10 font-GothamRoundedMedium text-lg lg:gap-6 xl:gap-7">
                <FontAwesomeIcon icon={faArrowRightLong} className="text-2xl" />
                {mainItem.explore}
              </button>
            </Link>
          </motion.div>
        </div>
        <div className="relative flex flex-1 flex-col gap-20 pt-20 lg:pt-0">
          <div
            className={`relative flex h-80 w-full overflow-hidden rounded-bl-[200px] lg:h-[590px] ${mainItem.bgColor}`}
          >
            <img
              src={mainItem.bGStyle}
              alt=""
              className="absolute left-0 top-0"
              loading="lazy"
            />
          </div>
          <motion.img
            id="main-img"
            src={mainItem.image}
            alt={mainItem.h2Text}
            className="absolute bottom-52 left-1/2 z-20 w-80 -translate-x-1/2 md:bottom-48 md:w-[350px] lg:-bottom-14 lg:left-0 lg:w-[480px] lg:-translate-x-0 xl:w-auto"
            loading="lazy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 100, x: isDesktop ? 0 : "-50%" },
              visible: { opacity: 1, y: 0, x: isDesktop ? 0 : "-50%" },
            }}
          />
          <div className="static right-0 top-1/2 z-20 flex flex-col items-center lg:absolute lg:-translate-y-1/2 lg:items-start">
            <p className="pb-6 text-sm text-black lg:text-white">
              Similar Flavours
            </p>
            <div className="flex w-full flex-row justify-around rounded-l-[50px] bg-white lg:flex-col lg:justify-normal">
              {childItems.map((item, index) => (
                <div className="relative lg:px-6 lg:py-10 xl:px-16" key={index}>
                  <motion.img
                    src={item.image}
                    alt={item.h2Text}
                    className="absolute top-0 w-32 lg:top-10"
                    loading="lazy"
                    onClick={() => swapItems(index)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, [isDesktop ? "x" : "y"]: 50 },
                      visible: { opacity: 1, [isDesktop ? "x" : "y"]: 0 },
                    }}
                  />
                  <img src={LeafGray} alt="LeafGray" className="w-32" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCoffee;
