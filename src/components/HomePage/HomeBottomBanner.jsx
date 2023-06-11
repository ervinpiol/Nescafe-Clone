import React from "react";
import Button from "../UI/Button";
import DesktopImage from "../../assets/HomePage/Hero4Image.webp";
import MobileImage from "../../assets/HomePage/Hero4-Mobile-Image.webp";

import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const HomeBottomBanner = () => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  return (
    <div className="relative m-0 lg:mt-10">
      <Parallax
        strength={400}
        bgImage={isDesktop ? DesktopImage : MobileImage}
        className="h-full bg-fixed "
        bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
        loading="lazy"
      >
        <div className="h-[740px]" />
      </Parallax>
      <div className="absolute right-0 top-0 z-10 h-full w-full bg-black bg-opacity-50 text-white">
        <motion.div
          className="flex h-full flex-col items-center justify-center px-5 lg:p-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="pb-3 text-sm">The NESCAFÉ PLAN</p>
          <h1 className="custom-h1 w-full lg:w-3/5">
            Helping thousands of Filipino coffee farmers since 2008
          </h1>
          <p className="mb-10 text-center md:pt-4 lg:w-4/6 xl:w-auto xl:pt-0">
            Training Filipino coffee farmers | Single biggest coffee buyer in
            the Philippines | Kapeng Pilipino para sa Pilipino
          </p>
          <Link to="/grown-respectfully" className="w-full md:w-auto ">
            <Button className="white-button-animation w-full md:mx-auto md:w-auto">
              Find out more
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeBottomBanner;
