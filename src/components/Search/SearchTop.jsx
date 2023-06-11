import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const SearchTop = ({
  selectedType,
  setSelectedType,
  searchInput,
  setSearchInput,
}) => {
  const [itemFilter, setItemFilter] = useState(false);
  const [sortFilter, setSortFilter] = useState(false);

  const handleOpenItemFilter = () => {
    setItemFilter((prevItemFilter) => {
      if (!prevItemFilter) {
        setSortFilter(false);
      }
      return !prevItemFilter;
    });
  };

  const handleOpenSortFilter = () => {
    setSortFilter((prevSortFilter) => {
      if (!prevSortFilter) {
        setItemFilter(false);
      }
      return !prevSortFilter;
    });
  };

  const handleCloseFilter = (type) => {
    setSelectedType(type);
    setItemFilter(false);
  };

  return (
    <div className="z-[990] mx-auto flex w-full flex-col gap-8 px-3 md:gap-10 md:px-0 xl:w-[1460px]">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="custom-h1">Search</h1>

        <form className="relative flex w-full items-center md:w-auto">
          <input
            type="text"
            id="SearchInput"
            name="SearchInput"
            placeholder="Search"
            className="w-full rounded-lg p-4 pr-12 font-bold shadow-md placeholder:text-black md:w-80"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
      </div>
      <div className=" mx-auto flex w-full flex-col items-center justify-between gap-4 md:flex-row">
        <div className="relative w-full md:w-auto">
          <button
            className={`flex w-full items-center justify-between rounded-lg bg-white px-5 py-4 shadow-md md:w-56 ${
              itemFilter && "rounded-b-none"
            }`}
            onClick={handleOpenItemFilter}
          >
            {selectedType} <FontAwesomeIcon icon={faChevronDown} />
          </button>
          <AnimatePresence>
            {itemFilter && (
              <motion.ul
                className="flex w-full flex-col gap-5 rounded-b-xl border-t border-black bg-white px-5 py-4 text-sm shadow-lg md:absolute"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
              >
                {["All Items", "Articles", "Recipe", "Product"].map(
                  (type, i) => (
                    <li
                      key={i}
                      className="cursor-pointer"
                      onClick={() => handleCloseFilter(type)}
                    >
                      {type}
                    </li>
                  )
                )}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
        <div className="relative flex w-full flex-col items-start gap-1.5 md:w-auto md:flex-row md:items-center md:gap-3">
          <span>Sort by</span>
          <div className="w-full md:w-auto">
            <button
              className={`flex w-full items-center justify-between rounded-lg bg-white px-5  py-4 shadow-md md:w-56 ${
                sortFilter && "rounded-b-none"
              }`}
              onClick={handleOpenSortFilter}
            >
              Relevance <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <AnimatePresence>
              {sortFilter && (
                <motion.ul
                  className="flex w-full flex-col gap-5 rounded-b-xl border-t border-black bg-white px-5 py-4 text-sm shadow-lg md:absolute md:w-56"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  {["Relevance", "Title", "Creation Date"].map((type, i) => (
                    <li key={i} className="cursor-pointer">
                      {type}
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

export default SearchTop;
