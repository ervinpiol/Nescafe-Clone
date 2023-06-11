import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faXmark } from "@fortawesome/free-solid-svg-icons";
import Button from "../../components/UI/Button";
import { AnimatePresence, motion } from "framer-motion";

const RecipeTypeFilters = ({
  showRecipeType,
  handleshowRecipeType,
  handleSelectedItem,
  handleUpdateItem,
  selectedItem,
  removeFilter,
}) => {
  return (
    <div className="px-6 transition duration-300 ease-in lg:px-0">
      <div className="relative w-full flex-col lg:w-[400px]">
        <button
          className={`flex w-full items-center justify-between  border-2 bg-white px-5 py-5 text-lg lg:border-none lg:py-3 lg:text-[17px] ${
            showRecipeType ? "rounded-t-lg" : "rounded-lg"
          }`}
          onClick={handleshowRecipeType}
        >
          <span className="opacity-70">Recipe Type</span>{" "}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`0.5 text-sm transition-all ease-in ${
              showRecipeType ? "rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence>
          {" "}
          {showRecipeType && (
            <motion.ul
              className="static left-0 z-20 flex w-full flex-col rounded-b-xl border-t border-black bg-white text-sm shadow-md md:absolute"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              {[
                "Around The World",
                "Cafe Favorites",
                "Christmas Drinks",
                "Summer Café Favorites",
              ].map((item, i) => (
                <li
                  key={i}
                  className="cursor-pointer px-5 py-3.5 hover:bg-GrayBG2"
                  onClick={() => handleSelectedItem(item)}
                >
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      {selectedItem && (
        <div className="flex w-full justify-center pt-10">
          <span className="flex items-center gap-5 rounded-lg bg-LightRed px-4 py-2.5 text-lg text-white">
            {selectedItem}{" "}
            <FontAwesomeIcon
              icon={faXmark}
              className="cursor-pointer text-2xl"
              onClick={removeFilter}
            />
          </span>
        </div>
      )}

      <div className="mt-32 flex justify-between md:hidden">
        <Button className="black-button-animation w-40">Clear Filters</Button>
        <Button
          className="red-button-animation flex w-40 justify-center"
          onClick={handleUpdateItem}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default RecipeTypeFilters;
