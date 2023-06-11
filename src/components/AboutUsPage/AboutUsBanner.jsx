import React from "react";
import NavLocation from "../../layouts/NavLocation";
import GRBanner1 from "../../assets/About-Us/ab-banner.webp";
import { motion } from "framer-motion";

const AboutUsBanner = () => {
  return (
    <div className=" z-[-2] h-full w-full">
      <NavLocation
        navLocation="About Us"
        customClass="text-white absolute xxs:top-16 xl:top-20 xl:left-56"
      />
      <div className="relative w-full">
        <div className="absolute top-0  h-full w-full bg-black bg-opacity-50" />
        <img
          src={GRBanner1}
          alt="CRBanner"
          className="object-cover object-center xxs:h-[515px] md:h-[650px] xl:h-auto xl:w-full"
        />
        <motion.div
          className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5 text-white xxs:w-full xl:w-auto"
          initial={{ opacity: 0, top: "30%" }}
          animate={{
            opacity: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs">Great coffee since 1938</p>
          <h1 className="custom-h1">The NESCAFÉ Story</h1>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsBanner;
