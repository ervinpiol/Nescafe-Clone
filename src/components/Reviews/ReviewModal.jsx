import React from "react";
import Button from "../../components/UI/Button";
import CheckboxSVG from "../../components/UI/CheckboxSVG";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faXmark, faCamera } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ReviewModal = ({
  setOpenReviewModal,
  currentItem,
  fromChosenCoffee,
  fromChosenRecipe,
}) => {
  return (
    <div className="absolute top-0 z-[9999] flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="relative flex h-full w-full flex-col items-start overflow-y-scroll bg-white py-32 xl:h-[95vh] xl:w-3/4 xl:flex-row"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button className="absolute right-8 top-14 z-[99999999] text-3xl xl:text-5xl">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => setOpenReviewModal(false)}
          />
        </button>
        <div className="flex w-full flex-col items-center gap-6 pt-20 lg:px-5 xl:w-[30%] xl:pt-0">
          {fromChosenCoffee && (
            <img
              src={currentItem.image}
              alt={currentItem.name}
              className="w-48"
            />
          )}
          {fromChosenRecipe && (
            <img
              src={currentItem.image}
              alt={currentItem.name}
              className="w-48"
            />
          )}
          {fromChosenCoffee && (
            <h5 className="text-center font-Nescafe xl:text-lg">
              {currentItem.name}
            </h5>
          )}
          {fromChosenRecipe && (
            <h5 className="text-center font-Nescafe xl:text-lg">
              {currentItem.name}
            </h5>
          )}
        </div>
        <div className="w-full px-5 sm:px-10 xl:w-3/5 xl:px-0">
          <h3 className="absolute left-1/2  top-28 -translate-x-1/2 text-2xl xl:static xl:w-3/6 xl:translate-x-0 xl:text-4xl">
            Write a review
          </h3>
          <div className="flex flex-col gap-9 pt-14 opacity-90">
            <div className="flex flex-col gap-1.5">
              <label>
                Name <span className="text-LightRed">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="border-b border-black border-opacity-50 pb-0.5 placeholder:opacity-60"
              />
            </div>
            <div className="flex flex-col items-start gap-1.5">
              <span>
                Ratings <span className="text-LightRed">*</span>
              </span>
              <div className="flex gap-2 pt-3">
                {Array(5)
                  .fill()
                  .map((_, index) => (
                    <FontAwesomeIcon
                      key={`empty-star-${index}`}
                      icon={faStar}
                      className="text-xl text-Gold opacity-50"
                    />
                  ))}
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label>
                Review Title <span className="text-LightRed">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter review title"
                className="border-b border-black border-opacity-50 pb-0.5 placeholder:opacity-60"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label>
                Comment <span className="text-LightRed">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter review comment"
                className="border-b border-black border-opacity-50 pt-8 placeholder:opacity-60"
              />
            </div>
            <div className="flex flex-col gap-8 border-b border-black border-opacity-50 pb-10">
              <div className="flex items-center gap-16">
                <p className="text-sm lg:text-lg">
                  Attach a photo (Max 6 images)
                </p>
                <FontAwesomeIcon icon={faCamera} className="text-3xl" />
              </div>
              <p className="">Would you recommend this item?</p>
              <div className="flex flex-col gap-5 lg:flex-row">
                <div className="flex items-center">
                  <CheckboxSVG />{" "}
                  <p className="text-sm">Yes, I recommend it.</p>
                </div>
                <div className="flex items-center">
                  <CheckboxSVG />{" "}
                  <p className="text-sm">No, I do not recommend it.</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3.5 pb-8">
              <span>Captcha</span>
              <p className="text-sm">
                This question is for testing whether or not you are a human
                visitor and to prevent automated spam submissions.
              </p>
              <div className="flex w-52 border border-black bg-SemiDarkGray">
                <span className="w-1/2 px-3 py-2 text-center text-lg text-white">
                  1 + 0 =
                </span>
                <input type="text" className="w-1/2 px-3 text-center" />
              </div>
              <p className="text-sm opacity-60">
                Solve this simple math problem and enter the result. E.g. for
                1+3, enter 4.
              </p>
            </div>
            <Button className="red-button-animation w-40">Submit</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ReviewModal;
