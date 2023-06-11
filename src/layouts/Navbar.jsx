import React from "react";
import Menu from "../components/Menu/Menu";
import Logo from "../assets/Brand/Logo.svg";
import WhiteLogo from "../assets/Brand/white-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Navbar = ({ openMenu, setOpenMenu }) => {
  const location = useLocation();
  const whitePaths = [
    "/coffee-recipes",
    "/grown-respectfully",
    "/origins-coffee",
    "/about-us",
    "/result",
  ];

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const isWhiteNavbar = whitePaths.some((path) => location.pathname === path);

  const handleMenuOpen = () => {
    setOpenMenu((openMenu) => !openMenu);
  };

  return (
    <div className={`w-full ${isWhiteNavbar && "absolute z-[99999]"}  `}>
      <motion.nav
        id="navbar"
        className={`mx-auto flex h-full w-full items-center justify-between p-6 font-GothamRoundedMedium lg:p-8 xl:w-[1460px] xl:items-start xl:px-0 xl:py-5 ${
          isWhiteNavbar ? "text-white" : "text-black"
        } `}
      >
        <Link
          to="/search"
          className="z-[9999] flex pl-2 pt-2 text-lg lg:hidden"
          onClick={() => setOpenMenu(false)}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className={`${openMenu && "text-black"}`}
          />
        </Link>

        <div className="hidden gap-3 lg:flex">
          <Link
            to="/register"
            className={`cursor-pointer border-r pr-3 ${
              isWhiteNavbar ? "border-white" : "border-black"
            }`}
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
        <Link
          to="/"
          className={`${openMenu && "xxs:z-[9999] lg:z-[99]"}`}
          onClick={() => setOpenMenu(false)}
        >
          <img
            src={
              openMenu && !isDesktop ? Logo : isWhiteNavbar ? WhiteLogo : Logo
            }
            alt="Logo"
            className={`w-24 cursor-pointer lg:w-auto`}
          />
        </Link>
        <div className="relative flex items-center xxs:p-0 lg:pl-12">
          <form
            className={`absolute right-36 hidden  items-center lg:flex  ${
              isWhiteNavbar ? "hover:text-black" : ""
            } `}
          >
            <input
              type="text"
              id="SearchInput"
              name="SearchInput"
              placeholder="Search"
              className={`w-32 rounded-lg py-2 pl-6 pr-10 font-GothamRoundedMedium transition-all delay-0 duration-700 ease-in-out placeholder:font-GothamRoundedMedium  hover:w-72 focus:w-72 ${
                isWhiteNavbar
                  ? "bg-transparent placeholder:text-white  hover:bg-white  hover:placeholder:text-black"
                  : "placeholder:text-black hover:bg-Gray focus:bg-Gray"
              }`}
            />
            <Link to="/search" className="absolute right-2.5 text-lg">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Link>
          </form>

          <div
            className={`flex cursor-pointer items-center gap-6 ${
              openMenu && "static z-[9999] text-black"
            } "}`}
          >
            <span className="hidden font-GothamRoundedMedium lg:flex">
              {openMenu ? "Close" : "Menu"}
            </span>
            <FontAwesomeIcon
              icon={openMenu ? faXmark : faBars}
              className="w-8 text-3xl"
              onClick={handleMenuOpen}
            />
          </div>
        </div>
      </motion.nav>
      <AnimatePresence>
        {openMenu && (
          <Menu setOpenMenu={setOpenMenu} isWhiteNavbar={isWhiteNavbar} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
