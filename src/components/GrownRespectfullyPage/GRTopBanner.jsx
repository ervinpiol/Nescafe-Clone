import React from "react";
import NavLocation from "../../layouts/NavLocation";
import GRBanner1 from "../../assets/grown-respectfully/gr-banner1.webp";
import { motion } from "framer-motion";

const GRTopBanner = () => {
  return (
    <div className=" z-[-2] h-full w-full">
      <NavLocation
        navLocation="Your Home Café Recipes
        "
        customClass="text-white absolute top-16 xl:top-20 xl:left-56"
      />
      <div className="relative w-full">
        <div className="absolute top-0 h-full w-full bg-black bg-opacity-50" />
        <img
          src={GRBanner1}
          alt="CRBanner"
          className="h-[515px] object-cover object-center md:h-[650px] xl:h-auto xl:w-full"
        />
        <motion.div
          className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5 text-white md:w-4/5 lg:w-3/5 xl:w-auto"
          initial={{ opacity: 0, top: "30%" }}
          animate={{
            opacity: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="custom-h1">
            Grown Respectfully. Sustainable coffee farming
          </h1>
          <p className="px-5 text-center">
            NESCAFÉ is the most sustainable coffee brand in the world.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GRTopBanner;
