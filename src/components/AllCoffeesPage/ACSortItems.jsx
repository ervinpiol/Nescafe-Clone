import React, { useEffect, useState } from "react";
import CheckboxSVG from "../../components/UI/CheckboxSVG";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faArrowRightLong,
  faXmark,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const ACSortItems = ({ resultCount, setSortingOption, sortingOption }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [showSortOptions, setShowSortOptions] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter((openFilter) => !openFilter);
  };

  const sortingOptions = [
    { label: "Popular", value: "popular" },
    { label: "Highest Reviews", value: "highestReviews" },
    { label: "Most Recommended", value: "mostRecommended" },
  ];

  useEffect(() => {
    if (showSortOptions) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    if (showSortOptions) {
      window.scrollTo(0, 0);
    }
  }, [showSortOptions]);

  return (
    <div>
      <div>
        <div
          className="mx-auto flex w-4/5 flex-col gap-5 lg:hidden"
          onClick={() => setShowSortOptions(true)}
        >
          <div className="flex items-center justify-between border-b border-black pb-3">
            <p>Sort By:</p>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <span className="text-sm">{resultCount} Results</span>
        </div>
        {showSortOptions && (
          <div className="fixed left-0 top-0 z-[9999] flex h-screen w-full flex-col gap-5 bg-LightBeige px-8 pt-20">
            <p>Sort By:</p>
            <FontAwesomeIcon
              icon={faXmark}
              className="absolute right-8 top-5 text-2xl"
              onClick={() => setShowSortOptions(false)}
            />
            <div className="flex flex-col gap-3 border-y border-black py-5 pl-5">
              {["Popular", "Highest Reviews", " Most Recommended"].map(
                (sort, i) => (
                  <span key={i} className="flex items-center text-sm">
                    <CheckboxSVG />
                    {sort}
                  </span>
                )
              )}
            </div>
            <button
              className="flex items-center gap-5 text-sm font-bold"
              onClick={() => setShowSortOptions(false)}
            >
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="text-LightRed"
              />{" "}
              Sort Products
            </button>
          </div>
        )}
      </div>
      <div className="absolute -top-6 z-50 flex w-full items-center justify-between xxs:hidden lg:flex">
        <span className="text-sm">{resultCount} Results</span>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-400">Sort by:</span>{" "}
          <div className="relative text-sm">
            <button
              className={`flex w-[13.75rem] items-center justify-between bg-white p-4 shadow-md ${
                openFilter ? "rounded-t-lg" : "rounded-lg"
              }`}
              onClick={handleOpenFilter}
            >
              {sortingOptions.find((option) => option.value === sortingOption)
                ?.label || "Popular"}{" "}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`0.5 transition-all ease-in ${
                  openFilter ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openFilter && (
                <motion.ul
                  className="absolute z-20 flex w-full flex-col rounded-b-lg border-t border-black bg-white shadow-lg"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  {sortingOptions.map((option, i) => (
                    <li
                      key={i}
                      className="cursor-pointer p-4 hover:bg-GrayBG2"
                      onClick={() => {
                        setSortingOption(option.value);
                        setOpenFilter(false);
                      }}
                    >
                      {option.label}
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ACSortItems;
