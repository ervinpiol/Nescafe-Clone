import React from "react";
import NavLocation from "../layouts/NavLocation";
import ChooseCoffee from "../components/CoffeeFinderPage.jsx/ChooseCoffee";
import CoffeeStrong from "../components/CoffeeFinderPage.jsx/CoffeeStrong";
import CoffeeFinderStart from "../components/CoffeeFinderPage.jsx/CoffeeFinderStart";

const CoffeeFinder = ({
  step,
  handleCoffeeTypeChange,
  handleStrengthChange,
  handleStart,
}) => {
  return (
    <div className="coffee-finder overflow-x-hidden">
      <NavLocation navLocation="Coffee Profiler Form" />
      <div className="h-[85vh] bg-LightBeige xl:h-[90vh]">
        {step >= 2 && (
          <div className="flex flex-col items-center gap-5 pt-10">
            <div className="relative flex items-center gap-6 text-sm">
              <span className="rounded-full bg-LightRed px-3.5 py-1.5 text-white">
                1
              </span>
              <div className="absolute left-1/2 h-[2px] w-6 -translate-x-1/2 bg-LightRed" />
              <span
                className={` rounded-full px-3  py-1.5 ${
                  step === 3 ? "bg-LightRed text-white" : "bg-Gray"
                }`}
              >
                2
              </span>
            </div>
          </div>
        )}
        {step === 1 && <CoffeeFinderStart handleStart={handleStart} />}
        {step === 2 && (
          <ChooseCoffee onCoffeeTypeChange={handleCoffeeTypeChange} />
        )}
        {step === 3 && <CoffeeStrong onStrengthChange={handleStrengthChange} />}
      </div>
    </div>
  );
};

export default CoffeeFinder;
