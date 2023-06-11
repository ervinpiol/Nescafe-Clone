import React, { useEffect, useState } from "react";
import AllCoffeesBanner from "../components/AllCoffeesPage/AllCoffeesBanner";
import AllCoffeesMain from "../components/AllCoffeesPage/AllCoffeesMain";
import AllCoffeeTypes from "../components/AllCoffeesPage/AllCoffeeTypes";
import { AllCoffeeItems } from "../data/AllCoffeeItems";

const AllCoffees = ({ handleChosenCoffee, currentCoffee }) => {
  const [selectedCoffeeType, setSelectedCoffeeType] = useState("");
  const [selectedCoffeeType2, setSelectedCoffeeType2] = useState("");
  const [packSize, setPackSize] = useState("");
  const [resultCount, setResultCount] = useState(AllCoffeeItems.length);
  const [sortingOption, setSortingOption] = useState("");
  const [intensityLevel, setIntensityLevel] = useState(0);
  const [clearFilters, setClearFilters] = useState(false);

  const handleCoffeeTypeClick = (coffeeType) => {
    setSelectedCoffeeType(coffeeType === "allCoffee" ? "" : coffeeType);
  };

  const handleCoffeeType2Click = (coffeeType) => {
    if (selectedCoffeeType2.includes(coffeeType)) {
      setSelectedCoffeeType2(
        selectedCoffeeType2.filter((type) => type !== coffeeType)
      );
    } else {
      setSelectedCoffeeType2([...selectedCoffeeType2, coffeeType]);
    }
  };

  const handlePackSize = (pack) => {
    if (packSize.includes(pack)) {
      setPackSize(packSize.filter((type) => type !== pack));
    } else {
      setPackSize([...packSize, pack]);
    }
  };

  const filteredCoffeeItems =
    selectedCoffeeType === "" &&
    selectedCoffeeType2.length === 0 &&
    packSize.length === 0 &&
    intensityLevel === "0"
      ? AllCoffeeItems
      : AllCoffeeItems.filter(
          (item) =>
            (selectedCoffeeType === "" ||
              item.coffeeType === selectedCoffeeType) &&
            (selectedCoffeeType2.length === 0 ||
              selectedCoffeeType2.includes(item.coffeeType2)) &&
            (packSize.length === 0 || packSize.includes(item.packSize)) &&
            (intensityLevel == 0 ||
              intensityLevel === "0" ||
              item.intensityLevel === parseInt(intensityLevel, 10))
        );

  if (sortingOption === "highestReviews") {
    filteredCoffeeItems.sort((a, b) => a.highestReviews - b.highestReviews);
  } else if (sortingOption === "mostRecommended") {
    filteredCoffeeItems.sort((a, b) => a.mostRecommended - b.mostRecommended);
  } else if (sortingOption === "popular") {
    filteredCoffeeItems.sort((a, b) => a.popular - b.popular);
  }

  useEffect(() => {
    setResultCount(filteredCoffeeItems.length);
  }, [filteredCoffeeItems]);

  const handleClearFilters = () => {
    setSelectedCoffeeType2("");
    setPackSize("");
    setIntensityLevel(0);
    setClearFilters(true);
  };

  return (
    <div>
      <div className="relative mx-auto w-full xl:w-[1460px]">
        <AllCoffeesBanner />
        <AllCoffeeTypes handleCoffeeTypeClick={handleCoffeeTypeClick} />
      </div>
      <AllCoffeesMain
        filteredCoffeeItems={filteredCoffeeItems}
        resultCount={resultCount}
        selectedCoffeeType={selectedCoffeeType}
        handleCoffeeType2Click={handleCoffeeType2Click}
        handlePackSize={handlePackSize}
        handleClearFilters={handleClearFilters}
        setSortingOption={setSortingOption}
        sortingOption={sortingOption}
        intensityLevel={intensityLevel}
        setIntensityLevel={setIntensityLevel}
        handleChosenCoffee={handleChosenCoffee}
        currentCoffee={currentCoffee}
        clearFilters={clearFilters}
      />
    </div>
  );
};

export default AllCoffees;
