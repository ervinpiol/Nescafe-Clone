import React, { useState } from "react";
import SelectLocation from "./SelectLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Menu = ({ setOpenMenu, isWhiteNavbar }) => {
  const [openSelectLocation, setOpenSelectLocation] = useState(false);

  const handleLinkClick = () => {
    setOpenMenu(false);
  };

  const location = useLocation();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/all-coffees", label: "All Coffees" },
    { to: "/coffee-recipes", label: "Your Home Café Recipes" },
    { to: "/grown-respectfully", label: "Grown Respectfully" },
    { to: "/origins-coffee", label: "The Origins of Coffee" },
    { to: "/about-us", label: "About Us" },
    { to: "https://www.nestle.com.ph/info/contactus", label: "Contact Us" },
  ];

  return (
    <div className="fixed top-0 z-[999] h-full w-full overflow-x-hidden bg-black bg-opacity-40">
      <motion.div
        className="absolute right-0 h-screen w-full overflow-y-scroll bg-white px-8 lg:w-1/2 lg:px-16 lg:pb-20"
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0, x: 500 }}
      >
        <div className="mt-28 flex cursor-pointer flex-col gap-6 pb-10 lg:mt-40 lg:flex-row lg:gap-12 lg:pb-16 ">
          <div className="flex gap-5 font-GothamRoundedMedium lg:hidden">
            <Link
              to="/register"
              className={`cursor-pointer border-r border-black pr-5`}
              onClick={() => setOpenMenu(false)}
            >
              Register
            </Link>
            <Link
              to="/login"
              className="cursor-pointer"
              onClick={() => setOpenMenu(false)}
            >
              Sign in
            </Link>
          </div>
          {openSelectLocation && (
            <div
              className="flex cursor-pointer items-center gap-1 text-[14px] font-bold"
              onClick={() => setOpenSelectLocation(false)}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
              <p>Back to Menu</p>
            </div>
          )}
          <div
            className="flex cursor-pointer items-center gap-4"
            onClick={() => setOpenSelectLocation(true)}
          >
            <FontAwesomeIcon icon={faLocationDot} className="text-LightRed" />
            <p className="text-[15px] hover:underline">
              GLOBAL / Select location
            </p>
          </div>
        </div>

        {openSelectLocation ? (
          <SelectLocation />
        ) : (
          <ul className="flex cursor-pointer flex-col gap-8">
            {navLinks.map((link) => (
              <React.Fragment key={link.to}>
                {link.to.startsWith("http") ? (
                  <a href={link.to} target="_blank" rel="noopener noreferrer">
                    <li
                      className="font-Nescafe text-2xl hover:text-LightRed hover:underline lg:text-3xl"
                      style={{
                        color: location.pathname === link.to && "red",
                      }}
                    >
                      {link.label}
                    </li>
                  </a>
                ) : (
                  <Link to={link.to} onClick={handleLinkClick}>
                    <li
                      className="font-Nescafe text-2xl hover:text-LightRed hover:underline lg:text-3xl"
                      style={{
                        color: location.pathname === link.to && "red",
                      }}
                    >
                      {link.label}
                    </li>
                  </Link>
                )}
              </React.Fragment>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default Menu;
