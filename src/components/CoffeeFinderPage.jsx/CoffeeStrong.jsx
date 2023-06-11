import React from "react";
import Mild from "../../assets/CoffeeFinder/mild.webp";
import Medium from "../../assets/CoffeeFinder/medium.webp";
import Strong from "../../assets/CoffeeFinder/strong.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const CoffeeStrong = ({ onStrengthChange }) => {
  const howStrong = [
    {
      image: Mild,
      howStrong: "Mild",
    },
    {
      image: Medium,
      howStrong: "Medium",
    },
    {
      image: Strong,
      howStrong: "Strong",
    },
  ];

  const handleStrengthClick = (strength) => {
    onStrengthChange(strength);
  };

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <motion.div
      className="h-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.4 }}
      variants={{
        hidden: { opacity: 0, x: isDesktop ? 500 : 100 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <h2 className="pb-10 pt-5 text-center text-3xl xl:text-[38px]">
        How strong do you want your coffee?
      </h2>
      <div className="flex h-full flex-col gap-0.5 lg:flex-row">
        {howStrong.map((strength, i) => (
          <Link
            to="/result"
            key={strength.howStrong}
            className={`group relative h-full overflow-hidden ${
              i === 0 && "rounded-tl-[100px] lg:rounded-tl-[200px]"
            }`}
            onClick={() => handleStrengthClick(strength.howStrong)}
          >
            <img
              src={strength.image}
              alt={strength.howStrong}
              className="h-full w-full object-cover object-center transition-all duration-500 ease-in group-hover:scale-125"
            />
            <div className="absolute top-0 h-full w-full bg-black bg-opacity-50" />
            <h3 className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-5 text-2xl text-white lg:text-4xl">
              {strength.howStrong}
              <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
            </h3>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default CoffeeStrong;
