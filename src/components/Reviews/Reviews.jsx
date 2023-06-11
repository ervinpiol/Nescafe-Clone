import React, { useState } from "react";
import Button from "../../components/UI/Button";
import StarRating from "../../components/UI/StarRating";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Reviews = ({ setOpenReviewModal }) => {
  const [showHidden, setShowHidden] = useState(false);

  const handleShowHidden = () => {
    setShowHidden((showHidden) => !showHidden);
  };

  const isScreenSmall = useMediaQuery({ maxWidth: 769 });
  const isScreenMedium = useMediaQuery({ maxWidth: 1024 });

  return (
    <AnimatePresence>
      <motion.div
        className="md: mx-auto w-full px-5 py-10 md:px-10 md:py-20 xl:w-[1460px] xl:px-[70px]"
        initial={{ height: "100%" }}
        animate={{
          height: isScreenSmall
            ? showHidden
              ? "460px"
              : "120px"
            : isScreenMedium
            ? showHidden
              ? "530px"
              : "120px"
            : showHidden
            ? "400px"
            : "180px",
        }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-between gap-4 md:gap-10 lg:gap-8">
          <button>
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`0.8 cursor-pointer text-2xl transition ease-in ${
                showHidden ? "rotate-180" : ""
              }`}
              onClick={handleShowHidden}
            />
          </button>
          <div className="h-[1.5px] w-3/4 bg-gray-300 md:w-3/5 lg:w-10/12 xl:w-11/12" />
          <h3 className="text-2xl lg:text-3xl">Reviews</h3>
          <div className="h-[1.5px] w-full bg-gray-300 md:w-4/5 lg:w-full xl:w-full" />
        </div>
        {showHidden && (
          <div className="flex flex-col items-center justify-between gap-10 py-8 lg:flex-row lg:items-start lg:gap-0 lg:px-28 lg:py-10">
            <div className="flex flex-col gap-5 lg:flex-row lg:gap-20">
              <div className="flex flex-col items-center gap-2 lg:items-start lg:gap-0">
                <h3 className="text-2xl font-bold lg:text-5xl">0.0</h3>
                <p>Based out of 0 reviews</p>
              </div>
              <div className="z-[-1] flex flex-col gap-2.5 pl-4 xs:border-l">
                <StarRating stars={5} count={0} />
                <StarRating stars={4} count={0} />
                <StarRating stars={3} count={0} />
                <StarRating stars={2} count={0} />
                <StarRating stars={1} count={0} />
              </div>
            </div>
            <Button
              className="black-button-animation"
              onClick={() => setOpenReviewModal(true)}
            >
              Write a review
            </Button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default Reviews;
