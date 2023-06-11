import React from "react";
import Button from "../UI/Button";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import RecipeBannerImg from "../../assets/Coffee-Recipe/chosen-recipe-banner.webp";

const RecipeBanner = () => {
  return (
    <div className="relative mt-10">
      <Parallax
        strength={400}
        bgImage={RecipeBannerImg}
        className="h-full bg-fixed"
        bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
      >
        <div className="h-[740px]" />
      </Parallax>
      <div className="absolute right-0 top-0 z-10 h-full w-full bg-black bg-opacity-50 px-5 text-white xl:px-0">
        <motion.div
          className="flex h-full flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="custom-h1">
            Turn Your Home into a Café with NESCAFÉ GOLD
          </h1>
          <p className="pb-14 text-center md:pt-4 xl:pt-0">
            Discover our other recipes and elevate Your Home Cafe Experience.
          </p>
          <Link to="/coffee-recipes" className="w-full md:w-auto">
            <Button className="white-button-animation w-full md:w-auto">
              See more recipes
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default RecipeBanner;
