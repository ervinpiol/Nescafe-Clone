import React, { useState } from "react";
import GlobalLocations from "../../data/GlobalLocation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";

const SelectLocation = () => {
  const [showLocations, setShowLocations] = useState([]);

  const handleShowLocations = (index) => {
    setShowLocations((prevState) => {
      const newLocations = [...prevState];
      newLocations[index] = !newLocations[index];
      return newLocations;
    });
  };

  return (
    <div className="border-y">
      {GlobalLocations.map((continent, i) => (
        <div key={i} className="">
          <button
            className={`flex w-full cursor-pointer items-center gap-6 p-5 font-Nescafe text-3xl ${
              i === 0 ? " " : "border-t"
            }`}
            onClick={() => handleShowLocations(i)}
          >
            <FontAwesomeIcon
              icon={showLocations[i] ? faMinus : faPlus}
              className="pb-2 text-xl text-LightRed"
            />
            <span className="font-Nescafe hover:underline">
              {continent.continent}
            </span>
          </button>
          <AnimatePresence>
            {showLocations[i] && (
              <div className="pb-12 pl-16">
                <motion.ul className="grid grid-cols-1 items-center gap-1.5 lg:grid-cols-2">
                  {continent.locations.map((location, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-[15px] opacity-80"
                    >
                      <FontAwesomeIcon icon={faArrowRightLong} />
                      <span className="cursor-pointer hover:text-LightRed">
                        {location}
                      </span>
                    </li>
                  ))}
                </motion.ul>
              </div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default SelectLocation;
