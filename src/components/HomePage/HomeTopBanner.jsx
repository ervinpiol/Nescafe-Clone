import React from "react";
import HeroImageDesktop from "../../assets/HomePage/Hero_FrontPage-Desktop.webp";
import HeroImageMobile from "../../assets/HomePage/Hero_FrontPage-Mobile.webp";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const HomeTopBanner = () => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  return (
    <div className="relative">
      <picture>
        <img
          src={isDesktop ? HeroImageDesktop : HeroImageMobile}
          alt="HeroImage"
          className="w-screen object-cover object-center xl:h-[830px]"
        />
      </picture>
      <div className="absolute top-0 h-full w-full bg-black bg-opacity-50 px-8 text-white">
        <motion.div
          className="flex h-full flex-col items-center justify-center"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="pb-4 text-sm">Kasangga ng Bawat Pilipino</p>
          <h1 className="custom-h1">Bangon na with NESCAFÉ®</h1>
          <p className=" max-w-[670px] pb-10 text-center md:pt-3">
            NESCAFÉ® helps you rise and thrive everyday. Enjoy our variety of
            coffees - from 100% pure and natural coffee to creamy and indulgent
            cups. Explore our range of coffees to find the one that suits your
            taste.
          </p>
          <Link to="/all-coffees" className="w-full md:w-auto">
            <Button className="white-button-animation w-full md:w-auto">
              Discover our Coffees
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeTopBanner;
