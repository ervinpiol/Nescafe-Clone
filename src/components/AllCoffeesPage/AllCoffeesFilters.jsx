import React, { useEffect, useState } from "react";
import CheckboxSVG from "../UI/CheckboxSVG";
import SmallLeafRed from "../../assets/Brand/small-leaf.svg";
import SmallLeafWhite from "../../assets/Brand/small-leaf-white.svg";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faXmark,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const AllCoffeesFilters = ({
  handleCoffeeType2Click,
  handlePackSize,
  handleClearFilters,
  intensityLevel,
  setIntensityLevel,
  clearFilters,
}) => {
  const [showFilters, setShowFilters] = useState([true, true, true]);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleShowFilter = (index) => {
    setShowFilters((showFilters) => {
      const updatedFilters = [...showFilters];
      updatedFilters[index] = !updatedFilters[index];
      return updatedFilters;
    });
  };

  useEffect(() => {
    if (showFilterModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    if (showFilterModal) {
      window.scrollTo(0, 0);
    }
  }, [showFilterModal]);

  return (
    <div className="w-full lg:w-[30%]">
      <div
        className="mx-auto flex w-4/5 items-center justify-between border-b border-black pb-3 lg:hidden"
        onClick={() => setShowFilterModal(true)}
      >
        <p>Filter By:</p>
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <div
        className={` lg:block ${
          showFilterModal
            ? "fixed top-0 z-[9999] flex h-full w-full flex-col bg-LightBeige px-8 pt-10 md:pt-20 lg:static lg:p-0"
            : "hidden"
        }`}
      >
        <div className="md:pb- pb-3">
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute right-8 top-5 block text-2xl lg:hidden"
            onClick={() => setShowFilterModal(false)}
          />
          <p>Filter By:</p>
        </div>
        <div className="flex flex-col gap-4 border-y border-black py-6 text-sm md:py-8">
          <div className="flex items-center justify-between text-sm">
            <h4 className="font-GothamRoundedMedium">Coffee type</h4>
            <button>
              <FontAwesomeIcon
                icon={showFilters[0] ? faMinus : faPlus}
                onClick={() => handleShowFilter(0)}
                className="hidden lg:flex"
              />
            </button>
          </div>
          <AnimatePresence>
            {showFilters[0] && (
              <motion.div
                className="flex flex-col gap-4 pl-5 lg:pl-0"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "120px" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                {["Black", "Decaf", "White"].map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center"
                    onClick={() => handleCoffeeType2Click(item)}
                  >
                    <CheckboxSVG clearFilters={clearFilters} />
                    {item}
                  </span>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="border-b border-black py-6 md:py-8">
          <div className="flex items-center justify-between font-GothamRoundedMedium text-sm">
            <h4 className="">Intensity</h4>
            <button>
              <FontAwesomeIcon
                icon={showFilters[1] ? faMinus : faPlus}
                onClick={() => handleShowFilter(1)}
                className="hidden lg:flex"
              />
            </button>
          </div>
          <AnimatePresence>
            {showFilters[1] && (
              <motion.div
                className="mx-auto w-10/12 pt-8 lg:w-auto"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "110px" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex justify-around rounded-br-lg bg-Beige px-5 py-2.5 lg:px-2">
                  {Array(10)
                    .fill()
                    .map((_, i) => (
                      <img
                        key={i}
                        src={i < intensityLevel ? SmallLeafRed : SmallLeafWhite}
                        alt="SmallLeaf"
                        className="w-5 lg:w-20 xl:w-5"
                      />
                    ))}
                </div>
                <div className="relative pb-6">
                  <input
                    type="range"
                    step="1"
                    min="0"
                    max="10"
                    value={intensityLevel}
                    onChange={(e) => setIntensityLevel(e.target.value)}
                  />
                  <div className="absolute flex w-11/12  justify-between pl-8 text-[10px] opacity-70 md:pl-12 lg:pl-5">
                    <span>1</span>
                    <span>5</span>
                    <span className="pl-4 sm:pl-8 xl:pl-6">10</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex flex-col gap-4 border-b border-black py-6 text-sm md:py-8">
          <div className="flex items-center justify-between font-GothamRoundedMedium text-sm">
            <h4 className="">Pack Size</h4>
            <button>
              <FontAwesomeIcon
                icon={showFilters[2] ? faMinus : faPlus}
                onClick={() => handleShowFilter(2)}
                className="hidden lg:flex"
              />
            </button>
          </div>
          <AnimatePresence>
            {showFilters[2] && (
              <motion.div
                className="flex flex-col gap-4 xxs:pl-5 lg:pl-0"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "120px" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
              >
                {["jar", "multi-pack", "single serve & multi-pack"].map(
                  (pack, i) => (
                    <span
                      key={i}
                      className="flex items-center"
                      onClick={() => handlePackSize(pack)}
                    >
                      <CheckboxSVG clearFilters={clearFilters} />
                      {pack}
                    </span>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="flex items-center justify-between pt-8">
          <button
            className="flex items-center gap-5 text-xs font-bold lg:hidden"
            onClick={() => setShowFilterModal(false)}
          >
            <FontAwesomeIcon
              icon={faArrowRightLong}
              className="text-LightRed"
            />{" "}
            Apply Filters
          </button>
          <button
            className="cursor-pointer text-xs underline"
            onClick={handleClearFilters}
          >
            Clear all
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCoffeesFilters;
