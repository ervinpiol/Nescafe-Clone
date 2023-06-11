import React from "react";
import HomeTopBanner from "../components/HomePage/HomeTopBanner";
import DiscoverCoffee from "../components/HomePage/DiscoverCoffee";
import HomeCoffee from "../components/HomePage/HomeCoffee";
import HomeBottomBanner from "../components/HomePage/HomeBottomBanner";
import Teaser from "../components/HomePage/Teaser";

const HomePage = ({ handleChosenCoffee }) => {
  return (
    <div>
      <HomeTopBanner />
      <DiscoverCoffee />
      <Teaser />
      <HomeCoffee handleChosenCoffee={handleChosenCoffee} />
      <HomeBottomBanner />
    </div>
  );
};

export default HomePage;
