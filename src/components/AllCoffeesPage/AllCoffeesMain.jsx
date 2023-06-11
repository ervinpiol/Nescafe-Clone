import React from "react";
import AllCoffeesFilters from "./AllCoffeesFilters";
import AllCoffeeItems from "./AllCoffeeItems";
import ACSortItems from "./ACSortItems";

const AllCoffeesMain = ({
  filteredCoffeeItems,
  resultCount,
  selectedCoffeeType,
  handleCoffeeType2Click,
  handlePackSize,
  handleClearFilters,
  setSortingOption,
  sortingOption,
  intensityLevel,
  setIntensityLevel,
  handleChosenCoffee,
  currentCoffee,
  clearFilters,
}) => {
  return (
    <div className="bg-LightBeige">
      <div className="mx-auto flex h-full w-full flex-col gap-5 pb-14 pt-10 lg:flex-row lg:px-8 lg:py-14 xl:w-[1460px] xl:gap-10 xl:px-0">
        <AllCoffeesFilters
          handleCoffeeType2Click={handleCoffeeType2Click}
          handlePackSize={handlePackSize}
          handleClearFilters={handleClearFilters}
          intensityLevel={intensityLevel}
          setIntensityLevel={setIntensityLevel}
          clearFilters={clearFilters}
        />
        <div className="relative w-full">
          <ACSortItems
            resultCount={resultCount}
            setSortingOption={setSortingOption}
            sortingOption={sortingOption}
          />
          <AllCoffeeItems
            filteredCoffeeItems={filteredCoffeeItems}
            resultCount={resultCount}
            selectedCoffeeType={selectedCoffeeType}
            setSortingOption={setSortingOption}
            sortingOption={sortingOption}
            intensityLevel={intensityLevel}
            handleChosenCoffee={handleChosenCoffee}
            currentCoffee={currentCoffee}
          />
        </div>
      </div>
    </div>
  );
};

export default AllCoffeesMain;
