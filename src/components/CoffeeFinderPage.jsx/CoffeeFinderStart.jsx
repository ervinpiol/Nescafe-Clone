import React from "react";
import Button from "../../components/UI/Button";
import { motion } from "framer-motion";
import CoffeeProfilerBanner from "../../assets/CoffeeFinder/Coffee-Profiler-Banner.gif";

const CoffeeFinderStart = ({ handleStart }) => {
  return (
    <div className="relative h-full bg-LightBeige">
      <motion.div
        className="absolute left-1/2 top-40 flex w-full -translate-x-1/2 flex-col items-center px-5 md:top-72 lg:top-40 xl:top-52"
        initial={{ opacity: 0, y: "-70%", x: "-50%" }}
        animate={{ opacity: 1, y: 0, x: "-50%" }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="custom-h1">Find your NESCAFÉ</h1>
        <p className="w-full pb-8 pt-5 text-center xl:w-3/6">
          Whatever you’re in the mood for, we’ve got a coffee for that. Let us
          know what makes you tick and we’ll find the perfect coffee for you.
          Let’s find your NESCAFÉ.
        </p>
        <Button
          className="red-button-animation w-full border-none md:w-40"
          onClick={handleStart}
        >
          Start Now
        </Button>
      </motion.div>
      <motion.picture
        className="absolute bottom-0 w-full"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={CoffeeProfilerBanner}
          alt="CoffeeProfilerBanner"
          className="h-[130px] w-full rounded-tl-[100px] md:h-[200px] xl:h-[258px] xl:rounded-tl-[200px]"
        />
      </motion.picture>
    </div>
  );
};

export default CoffeeFinderStart;
