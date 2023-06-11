import React, { useState, useEffect } from "react";
import CRListView from "./CRListView";
import CRGridView from "./CRGridView";
import Button from "../../components/UI/Button";
import RecipeTypeFilters from "../../components/CoffeeRecipePage/RecipeTypeFilters";
import { ChosenRecipeItems } from "../../data/ChosenRecipeItems";

import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faList,
  faXmark,
  faPlus,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";

const CRViewType = ({ handleChosenRecipe, currentRecipe }) => {
  const [listView, setListView] = useState(false);
  const [showRecipeType, setShowRecipeType] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const defaultDisplayCount = 12;
  const [displayCount, setDisplayCount] = useState(defaultDisplayCount);
  const [updateItemClicked, setUpdateItemClicked] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const isDesktop = useMediaQuery({ minWidth: 769 });

  const handleshowRecipeType = () => {
    setShowRecipeType((showRecipeType) => !showRecipeType);
  };

  const handleShowFilter = () => {
    setShowFilter((showFilter) => !showFilter);
  };

  const handleUpdateItem = () => {
    if (!selectedItem) {
      setShowFilter(false);
    } else {
      setUpdateItemClicked(true);
      setShowFilter(false);
    }
  };

  const handleSelectedItem = (item) => {
    setSelectedItem(item);
    setShowRecipeType(false);
  };

  const removeFilter = () => {
    setSelectedItem("");
    setShowRecipeType(false);
    setUpdateItemClicked(false);
  };

  const filteredItems = isDesktop
    ? selectedItem === ""
      ? ChosenRecipeItems
      : ChosenRecipeItems.filter((item) => item.filterType === selectedItem)
    : updateItemClicked
    ? ChosenRecipeItems.filter((item) => item.filterType === selectedItem)
    : ChosenRecipeItems;

  useEffect(() => {
    setDisplayCount(
      selectedItem || updateItemClicked ? 6 : defaultDisplayCount
    );
  }, [selectedItem, defaultDisplayCount, updateItemClicked]);

  useEffect(() => {
    if (showFilter) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);
      const targetElement = document.getElementById("navbar");
      if (targetElement) {
        targetElement.style.display = "none";
      }
    } else {
      document.body.style.overflow = "auto";
      const targetElement = document.getElementById("navbar");
      if (targetElement) {
        targetElement.style.display = "flex";
      }
    }

    // Clean up: Restore the display property when the component unmounts
    return () => {
      const targetElement = document.getElementById("navbar");
      if (targetElement) {
        targetElement.style.display = "";
      }
    };
  }, [showFilter]);

  return (
    <div className="mx-auto flex w-full flex-col overflow-hidden bg-GrayBG2 p-5 md:px-8 md:pt-20 xl:w-5/6 xl:p-16">
      {isDesktop ? (
        <RecipeTypeFilters
          showRecipeType={showRecipeType}
          handleshowRecipeType={handleshowRecipeType}
          handleSelectedItem={handleSelectedItem}
        />
      ) : (
        <div
          className={`fixed left-0 z-[900] w-full rounded-tl-3xl bg-white ${
            showFilter ? "top-0 flex h-screen flex-col" : " bottom-0"
          }`}
        >
          <button
            className="flex w-full items-center justify-between p-8 text-lg"
            onClick={handleShowFilter}
          >
            Filter by:{" "}
            <FontAwesomeIcon
              icon={showFilter ? faMinus : faPlus}
              className="text-xl text-black"
            />
          </button>
          {showFilter && (
            <RecipeTypeFilters
              showRecipeType={showRecipeType}
              handleshowRecipeType={handleshowRecipeType}
              handleSelectedItem={handleSelectedItem}
              removeFilter={removeFilter}
              selectedItem={selectedItem}
              handleUpdateItem={handleUpdateItem}
            />
          )}
        </div>
      )}
      <AnimatePresence>
        {selectedItem && isDesktop && (
          <motion.div
            className="flex w-full justify-center pt-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <span className="flex items-center gap-5 rounded-lg bg-LightRed px-4 py-2.5 text-lg text-white">
              {selectedItem}{" "}
              <FontAwesomeIcon
                icon={faXmark}
                className="cursor-pointer text-2xl"
                onClick={removeFilter}
              />
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center justify-between md:pt-24">
        <div className="flex w-full justify-between gap-8 p-5 font-GothamRoundedMedium md:justify-start xl:p-0">
          <button
            className={`flex items-center gap-4 text-xl font-bold xl:text-[17px] ${
              !listView && "text-LightRed"
            }`}
            onClick={() => setListView(false)}
          >
            <FontAwesomeIcon icon={faTh} className="text-3xl" />
            Grid view
          </button>
          <button
            className={`flex items-center gap-4 text-xl font-bold xl:text-[17px] ${
              listView && "text-LightRed"
            }`}
            onClick={() => setListView(true)}
          >
            <FontAwesomeIcon icon={faList} className="text-3xl" />
            List view
          </button>
        </div>
        <Button
          className="black-button-animation hidden w-40  md:flex md:w-44 xl:w-40"
          onClick={removeFilter}
        >
          Clear Filters
        </Button>
      </div>
      {listView ? (
        <CRListView
          filteredItems={filteredItems}
          displayCount={displayCount}
          handleChosenRecipe={handleChosenRecipe}
          currentRecipe={currentRecipe}
          setDisplayCount={setDisplayCount}
        />
      ) : (
        <CRGridView
          filteredItems={filteredItems}
          displayCount={displayCount}
          handleChosenRecipe={handleChosenRecipe}
          currentRecipe={currentRecipe}
          setDisplayCount={setDisplayCount}
        />
      )}
    </div>
  );
};

export default CRViewType;
