import React, { useState } from "react";
import {} from "../../data/AllCoffeeItems";
import Button from "../UI/Button";
import CheckboxSVG from "../UI/CheckboxSVG";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const AllCoffeeItems = ({
  filteredCoffeeItems,
  selectedCoffeeType,
  intensityLevel,
  handleChosenCoffee,
}) => {
  const [showAll, setShowAll] = useState(false);
  const initialItemsToShow = 9;

  const itemsToShow = showAll ? filteredCoffeeItems.length : initialItemsToShow;

  return (
    <div className="relative w-full">
      <div className="grid w-full grid-cols-1 gap-7 px-5 pb-16 pt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 lg:px-0 xl:gap-7">
        {filteredCoffeeItems.length === 0 ? (
          <h5 className="col-span-full grid place-items-center  font-GothamRoundedMedium text-lg font-bold">
            Sorry no results found for the filters selected. Please try to chose
            other filter options.
          </h5>
        ) : (
          filteredCoffeeItems.slice(0, itemsToShow).map((item, i) => (
            <AnimatePresence key={i}>
              <motion.div
                className="relative flex flex-col items-center rounded-xl bg-white px-7 pb-20 pt-8 shadow-xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (i + 1), duration: 1 }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
              >
                <Link
                  to={`/all-coffees/${item.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  onClick={() => handleChosenCoffee(item.name)}
                  className="flex flex-col items-center"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-48 lg:w-3/4"
                  />
                  <div className="flex flex-col items-start gap-5 pt-6">
                    <h4
                      className={`font-Nescafe text-lg lg:text-[22px] ${
                        i <= 2 ? "lg:h-[100px]" : "lg:h-[65px]"
                      }`}
                    >
                      {item.name}{" "}
                    </h4>
                    <div className="flex gap-2 text-sm text-gray-300">
                      {Array(5)
                        .fill()
                        .map((_, i) => (
                          <FontAwesomeIcon key={i} icon={faStar} />
                        ))}
                    </div>
                    <p className="lg:text-base">
                      {item.text.length > 75
                        ? `${item.text.slice(0, 75)}...`
                        : item.text}
                    </p>
                    <Button className="red-button-animation w-[90%] text-[15px]">
                      Buy Now
                    </Button>
                  </div>
                </Link>
                <div className="absolute bottom-8 left-7 flex items-center gap-4">
                  <CheckboxSVG />
                  <span className="text-[13px] font-bold">
                    Compare products
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          ))
        )}
      </div>
      {selectedCoffeeType === "" && !showAll && intensityLevel <= 0 && (
        <button
          className="load-more-button mx-auto flex items-center text-[15px] font-semibold hover:text-LightRed"
          onClick={() => setShowAll(true)}
        >
          <div className="load-more-icon" />
          Load more
        </button>
      )}
    </div>
  );
};

export default AllCoffeeItems;
