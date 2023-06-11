import React from "react";
import CheckboxSVG from "../UI/CheckboxSVG";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NescafeGold from "../../assets/AllCoffees/Coffees/NESCAFE-GOLD.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const WhatYouNeed = ({ currentRecipe }) => {
  return (
    <div className="mx-auto w-full px-5 md:px-8 lg:w-5/6 lg:px-0 lg:py-20 xl:w-4/6">
      <motion.h2
        className="text-[32px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        What you Need
      </motion.h2>
      <div className="flex flex-col pt-10 lg:flex-row lg:gap-20">
        <div className="flex-1 border-b-2 border-gray-400 text-lg opacity-80 lg:border-r-2 lg:border-b-transparent ">
          <motion.p
            className="pb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            NESCAFÉ GOLD
          </motion.p>
          {currentRecipe.ingredients.map((ingredient, index) => (
            <motion.p
              key={index}
              className="pb-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {ingredient}
            </motion.p>
          ))}
        </div>
        <div className="flex w-full flex-col pt-6 text-lg opacity-80 lg:w-1/4 lg:pt-0">
          <motion.h4
            className="font-GothamRoundedMedium"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Equipment
          </motion.h4>
          {currentRecipe.equipments.map((equipment, index) => (
            <motion.p
              key={index}
              className="pt-5 tracking-wide"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {equipment}
            </motion.p>
          ))}
        </div>
        <div className="w-full pt-32 lg:w-1/3 lg:pt-0">
          <motion.h2
            className="pb-10 text-[32px] lg:text-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 80 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Recommended
          </motion.h2>
          <Link to="/all-coffees/NESCAFÉ-GOLD">
            <motion.div
              className="flex flex-col gap-8 rounded-xl bg-white p-8 shadow-2xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              variants={{
                hidden: { opacity: 0, y: 80 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={NescafeGold}
                alt="NescafeGold"
                className="mx-auto xxs:w-40 lg:w-48"
              />
              <div className="">
                <h3 className="xxs:text-xl xl:text-2xl">NESCAFÉ GOLD</h3>
                <div className="flex gap-2 pb-6 pt-4 text-sm text-gray-300">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} />
                    ))}
                </div>
                <p>
                  NESCAFÉ GOLD is expertly crafted with premium choice Arabica
                  beans and...
                </p>
                <div className="flex items-center gap-4 pt-2.5 lg:pt-8">
                  <CheckboxSVG />
                  <span className="text-[13px] font-bold">
                    Compare products
                  </span>
                </div>
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatYouNeed;
