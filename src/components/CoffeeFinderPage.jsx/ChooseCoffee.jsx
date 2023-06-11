import React from "react";
import BlackCoffee from "../../assets/CoffeeFinder/black-coffee.webp";
import CreamyCoffee from "../../assets/CoffeeFinder/creamy-coffee.webp";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const ChooseCoffee = ({ onCoffeeTypeChange }) => {
  const coffeeTypes = [
    {
      image: BlackCoffee,
      type: "BlackCoffee",
      text: "I like it black",
    },
    {
      image: CreamyCoffee,
      type: "CreamyCoffee",
      text: "I like it creamy",
    },
  ];

  const handleCoffeeTypeClick = (type) => {
    onCoffeeTypeChange(type);
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
        How do you normally like your coffee?
      </h2>
      <div className="flex h-full flex-col gap-0.5 lg:flex-row ">
        {coffeeTypes.map((coffee, i) => (
          <div
            key={coffee.type}
            className={`group relative h-1/2 w-full overflow-hidden lg:h-full ${
              i === 0 && "rounded-tl-[100px] lg:rounded-tl-[200px]"
            }`}
            onClick={() => handleCoffeeTypeClick(coffee.type)}
          >
            <img
              src={coffee.image}
              alt={coffee.type}
              className="h-full w-full object-cover object-center transition-all duration-500 ease-in group-hover:scale-125"
            />
            <div className="absolute top-0 h-full w-full bg-black bg-opacity-50" />
            <h3 className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-5 text-2xl text-white lg:text-4xl">
              {coffee.text}
              <FontAwesomeIcon
                icon={faChevronRight}
                className="hidden text-xl xl:flex"
              />
            </h3>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ChooseCoffee;
