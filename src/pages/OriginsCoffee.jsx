import React from "react";
import OriginsCoffeeBanner from "../components/OriginsCoffeePage/OriginsCoffeeBanner";
import WhyRoasted from "../components/OriginsCoffeePage/WhyRoasted";
import CoffeeOrigin from "../components/OriginsCoffeePage/CoffeeOrigin";
import OrginsCoffeeHistory from "../components/OriginsCoffeePage/OrginsCoffeeHistory";

const OriginsCoffee = () => {
  return (
    <div>
      <OriginsCoffeeBanner />
      <CoffeeOrigin />
      <OrginsCoffeeHistory />
      <WhyRoasted />
    </div>
  );
};

export default OriginsCoffee;
