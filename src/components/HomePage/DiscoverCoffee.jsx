import React from "react";
import RedLeaf from "../../assets/Brand/leaf-red.svg";
import CPImage from "../../assets/HomePage/CP.webp";
import DiscoverCoffeeBG from "../../assets/HomePage/curve-red.webp";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DiscoverCoffee = () => {
  return (
    <div className="bg_red relative overflow-hidden">
      <img src={DiscoverCoffeeBG} alt="" className="absolute" loading="lazy" />
      <motion.div
        className="relative flex w-full flex-col items-center justify-around lg:flex-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex w-full flex-col items-center px-5 pt-14 text-white lg:w-[45%] lg:items-start lg:p-0">
          <img
            src={RedLeaf}
            alt="Red Leaf"
            className="w-10 pb-6 lg:w-[50px] lg:pb-16"
            loading="lazy"
          />
          <p className="pb-2.5 text-sm">Match your moment</p>
          <h1 className="custom-h1 lg:text-left">
            Discover the NESCAFÉ® for you
          </h1>
          <p className="hidden pb-8 text-lg lg:block lg:pt-3 xl:pt-0">
            Find out which NESCAFÉ® is best for you from our wide range of
            coffees.
          </p>
          <Link
            to="/coffee-finder"
            className="w-full md:w-auto md:pt-3 lg:pt-0"
          >
            <Button className="white-button-animation w-full md:w-auto">
              Take the Test
            </Button>
          </Link>
        </div>
        <div className="relative -bottom-10 lg:bottom-0 lg:pt-10 xl:-bottom-10">
          <img
            src={CPImage}
            alt="CPImage"
            className="w-52 lg:w-[420px] xl:w-auto"
            loading="lazy"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default DiscoverCoffee;
