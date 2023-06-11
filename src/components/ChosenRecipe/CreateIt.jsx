import React, { useState } from "react";
import ReactPlayer from "react-player";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const CreateIt = ({ currentRecipe }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const handleClick = () => {
    setShowPlayer(true);
  };

  const isDesktop = useMediaQuery({ minWidth: 769 });

  return (
    <div className="mx-auto w-full px-5 lg:w-4/5 xl:w-4/6 xl:px-0">
      <motion.div
        className="flex items-center gap-10 pb-8 pt-32 xl:gap-20 xl:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="h-[1.5px] w-full bg-gray-300" />
        <h3 className="whitespace-nowrap text-3xl xl:text-4xl">Create It!</h3>
        <div className="h-[1.5px] w-full bg-gray-300" />
      </motion.div>
      <div className=" pb-32">
        {showPlayer ? (
          <div>
            <ReactPlayer
              url={currentRecipe.url}
              controls={true}
              playing={true}
              width="100%"
              height={isDesktop ? "680px" : "250px"}
            />
          </div>
        ) : (
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.5, delay: 0.4 }}
            variants={{
              hidden: { opacity: 0, scale: 0 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <img
              src={currentRecipe.thumbnail}
              alt={currentRecipe.name}
              className="w-full"
            />
            <button
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg py-5 pl-8 pr-7 hover:bg-gray-50 hover:bg-opacity-20"
              onClick={handleClick}
            >
              <FontAwesomeIcon
                icon={faPlay}
                className="text-5xl text-gray-100 opacity-50"
              />
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CreateIt;
