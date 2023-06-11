import React from "react";
import { Link } from "react-router-dom";

const NavLocation = ({ navLocation, customClass, currentRecipe }) => {
  return (
    <ul
      className={`z-[99] mx-auto flex w-full gap-2.5 py-4 pl-8 text-[11px] opacity-90 xl:w-[1460px] xl:px-0  ${customClass}`}
    >
      <Link to="/">
        <li className="cursor-pointer">Home</li>
      </Link>
      {navLocation === "Your Home Cafe" ? (
        <Link to="/coffee-recipes">
          <li className="before:pr-2.5 before:content-['>']">{navLocation}</li>
        </Link>
      ) : (
        <li className="before:pr-2.5 before:content-['>']">{navLocation}</li>
      )}
      {navLocation === "Your Home Cafe" && (
        <li className="before:pr-2.5 before:content-['>']">
          {currentRecipe.name}
        </li>
      )}
    </ul>
  );
};

export default NavLocation;
