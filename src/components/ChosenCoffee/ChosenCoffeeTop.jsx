import React from "react";
import NavLocation from "../../layouts/NavLocation";

import { motion } from "framer-motion";
import ChosenCoffeeDetails from "./ChosenCoffeeDetails";

const ChosenCoffeeTop = ({ setOpenReviewModal, currentCoffee }) => {
  return (
    <div className="mx-auto w-full pt-5 lg:mb-20 xl:mb-40 xl:w-[1460px]">
      <NavLocation navLocation={currentCoffee.name} />
      <div className="flex flex-col gap-20 pt-5 lg:flex-row lg:gap-16">
        <div
          className="flex-1 rounded-tr-[90px]"
          style={{
            background: currentCoffee.color,
          }}
        >
          <motion.div
            className="flex translate-y-1/4 flex-col items-center gap-4 lg:translate-y-2/4 xl:translate-y-1/4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img
              src={currentCoffee.image}
              alt="BigNescafeClassic"
              className="w-64 md:w-[400px] lg:w-72 xl:w-[400px]"
            />
            <img
              src={currentCoffee.image}
              alt="BigNescafeClassic"
              className="w-16 opacity-50"
            />
          </motion.div>
        </div>
        <ChosenCoffeeDetails
          currentCoffee={currentCoffee}
          setOpenReviewModal={setOpenReviewModal}
        />
      </div>
    </div>
  );
};

export default ChosenCoffeeTop;
