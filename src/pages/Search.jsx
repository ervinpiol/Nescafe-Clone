import React, { useState } from "react";
import SearchTop from "../components/Search/SearchTop";
import SearchItems from "../components/Search/SearchItems";
import NavLocation from "../layouts/NavLocation";

const Search = ({ handleChosenCoffee, handleChosenRecipe }) => {
  const [selectedType, setSelectedType] = useState("All Items");
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="">
      <NavLocation navLocation="Search" />
      <div className="flex flex-col gap-20 bg-GrayBG2 px-5 py-10 sm:px-8 xl:gap-12 xl:px-0 xl:py-24">
        <SearchTop
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <SearchItems
          handleChosenCoffee={handleChosenCoffee}
          handleChosenRecipe={handleChosenRecipe}
          selectedType={selectedType}
          searchInput={searchInput}
        />
      </div>
    </div>
  );
};

export default Search;
