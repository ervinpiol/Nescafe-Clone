import { motion } from "framer-motion";
import Button from "../../components/UI/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

import SmallLeafRed from "../../assets/Brand/small-leaf.svg";
import SmallLeafWhite from "../../assets/Brand/small-leaf-white.svg";

import React from "react";
motion;

const ChosenCoffeeDetails = ({ currentCoffee, setOpenReviewModal }) => {
  return (
    <motion.div
      className="flex w-full flex-col items-center pt-10 md:pt-24 lg:w-[42%] lg:items-start lg:pr-12 lg:pt-10 xl:w-[36%] xl:pr-0 xl:pt-20"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h3 className="order-first px-5 text-center text-[26px] md:text-3xl lg:order-none lg:px-0 lg:text-left lg:text-4xl xl:text-[40px]">
        {currentCoffee.name}
      </h3>
      <p className="order-2 px-5 pb-6 pt-3 text-center text-sm lg:order-none lg:px-0 lg:pb-3 lg:pt-5 lg:text-left xl:pb-0 xl:pt-4 xl:text-base">
        {currentCoffee.text}
      </p>
      <div className="order-4 w-full bg-LightBeige px-5 py-6 md:w-[45%] lg:order-none lg:w-full lg:bg-transparent lg:px-0 lg:pb-10 xl:pb-6">
        <div className="flex items-center gap-16 xxs:bg-Beige xxs:px-4 xxs:py-1 md:justify-between md:gap-0 lg:justify-normal lg:gap-16 lg:bg-transparent lg:p-0">
          <span className="font-GothamRoundedMedium xxs:text-[10px] lg:text-xs xl:text-sm">
            INTENSITY: {currentCoffee.intensity}
          </span>
          <div className="flex rounded-br-lg rounded-tl-lg bg-Beige px-3 py-1.5 md:px-0 lg:px-3">
            {Array(10)
              .fill()
              .map((_, i) => (
                <img
                  key={i}
                  src={
                    i < currentCoffee.intensityLevel
                      ? SmallLeafRed
                      : SmallLeafWhite
                  }
                  alt="SmallLeaf"
                />
              ))}
          </div>
        </div>
      </div>

      <div className="order-1 flex w-auto gap-3 py-4 font-GothamRoundedMedium lg:order-none lg:w-full lg:border-t-2 lg:py-10">
        <div className="flex gap-2 text-sm text-gray-300">
          {Array(5)
            .fill()
            .map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} />
            ))}
        </div>

        <span className="font-GothamRoundedMedium text-[13px]">(0)</span>
        <span
          className="cursor-pointer font-GothamRoundedMedium text-[13px] underline"
          onClick={() => setOpenReviewModal(true)}
        >
          Write a review
        </span>
      </div>
      <div className="order-3 flex items-center justify-center gap-10 pb-16 md:pb-6 lg:order-none xl:justify-start xl:p-0">
        <Button className="red-button-animation w-56 lg:w-44 xl:w-36">
          Buy Now
        </Button>
        <FontAwesomeIcon
          icon={faHeart}
          className="cursor-pointer text-[22px]"
        />
      </div>
    </motion.div>
  );
};

export default ChosenCoffeeDetails;
