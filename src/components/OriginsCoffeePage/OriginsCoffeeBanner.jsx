import React from "react";
import NavLocation from "../../layouts/NavLocation";
import OCBanner from "../../assets/Origins-Coffee/OC-banner-top.webp";
import { motion } from "framer-motion";

const OriginsCoffeeBanner = () => {
  return (
    <div className=" z-[-2] h-full w-full">
      <NavLocation
        navLocation="The Origins of Coffee"
        customClass="text-white absolute top-16 xl:top-20 xl:left-56"
      />
      <div className="relative w-full">
        <div className="absolute top-0 h-full w-full bg-black bg-opacity-50" />
        <img
          src={OCBanner}
          alt="CRBanner"
          className="h-[515px] object-cover object-center md:h-[650px]  xl:h-auto xl:w-full"
        />
        <motion.div
          className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 px-4 text-white xl:w-auto xl:px-0"
          initial={{ opacity: 0, top: "30%" }}
          animate={{
            opacity: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="custom-h1">The Origins of Coffee</h1>
          <p className="text-center">
            Where does coffee come from? And why do different coffees taste
            different?
          </p>
          <p className="pt-2.5 text-center">
            Read our expert guide to where coffee is grown, the types of bean
            and the all-important roasting process.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OriginsCoffeeBanner;
