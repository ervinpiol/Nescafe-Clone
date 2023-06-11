import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";

import Navbar from "../../layouts/Navbar";
import Socials from "../../layouts/Socials";
import ScrollToTop from "../../components/UI/ScrollToTop";
import Footer from "../../layouts/Footer";
import Mungkahi from "../../components/UI/Mungkahi";

const Nescafe = () => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);

  const isCoffeeFinderRoute = location.pathname === "/coffee-finder";

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    if (openMenu) {
      window.scrollTo(0, 0);
    }
  }, [openMenu]);

  const whitePaths = [
    "/coffee-recipes",
    "/grown-respectfully",
    "/origins-coffee",
    "/about-us",
    "/result",
  ];

  const isWhiteNavbar = whitePaths.some((path) => location.pathname === path);

  return (
    <div className="relative w-full ">
      <Navbar
        openMenu={openMenu}
        setOpenMenu={setOpenMenu}
        isWhiteNavbar={isWhiteNavbar}
      />
      <ScrollToTop />
      <Mungkahi />
      <AnimatedRoutes />
      {isCoffeeFinderRoute ? null : (
        <>
          <Socials />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Nescafe;
