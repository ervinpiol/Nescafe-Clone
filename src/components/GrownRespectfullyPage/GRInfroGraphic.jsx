import React from "react";
import GRInfographicDesktop from "../../assets/grown-respectfully/gr-infographic-desktop.webp";
import GRInfographicMobile from "../../assets/grown-respectfully/gr-infographic-mobile.webp";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

const GRInfroGraphic = () => {
  const isDesktop = useMediaQuery({ minWidth: 769 });

  return (
    <motion.div
      className="mx-auto w-full px-5 py-14 md:px-8 lg:w-11/12 xl:w-3/4 xl:px-28"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
      <img
        src={isDesktop ? GRInfographicDesktop : GRInfographicMobile}
        alt="GRInfographic"
        className="mx-auto"
        loading="lazy"
      />
    </motion.div>
  );
};

export default GRInfroGraphic;
