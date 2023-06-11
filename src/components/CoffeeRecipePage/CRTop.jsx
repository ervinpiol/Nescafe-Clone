import React from "react";
import CRBanner from "../../assets/Coffee-Recipe/CR-Banner.jpg";
import NavLocation from "../../layouts/NavLocation";

const CRTop = () => {
  return (
    <div className="z-[-2] h-full w-full">
      <NavLocation
        navLocation="Your Home Café Recipes
          "
        customClass="text-white absolute top-16 xl:top-20 xl:left-56"
      />
      <div className="relative w-full">
        <div className="absolute top-0 h-full w-full bg-black bg-opacity-50" />
        <img
          src={CRBanner}
          alt="CRBanner"
          className="h-[515px] object-cover object-center md:h-[650px] xl:h-auto xl:w-full"
        />
        <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2.5 px-5 text-white xl:w-auto xl:px-0">
          <h1 className="custom-h1">YOUR HOME CAFÉ</h1>
          <p className="text-center">
            Enjoy café favorites from the comfort of your home.
          </p>
          <p className="text-center">
            Easy and simple coffee recipes for your own home café experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CRTop;
