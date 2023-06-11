import React from "react";
import NavLocation from "../../layouts/NavLocation";
import { motion } from "framer-motion";

const RecipeDetails = ({ currentRecipe }) => {
  return (
    <div>
      <NavLocation navLocation="Your Home Cafe" currentRecipe={currentRecipe} />
      <motion.img
        src={currentRecipe.banner}
        alt={currentRecipe.name}
        className="w-full"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        loading="lazy"
      />
      <div className="mx-auto flex w-full flex-col items-center gap-8 px-6 py-20 md:w-10/12 lg:w-3/5 xl:w-[42%] xl:px-0">
        <motion.h1
          className="text-center font-Nescafe text-4xl lg:text-5xl xl:text-6xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {currentRecipe.name}
        </motion.h1>
        <div className="flex flex-col gap-8">
          {currentRecipe.text.map((section, index) => (
            <motion.p
              key={index}
              className="text-center tracking-wide"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1 * (index + 1), duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {section}
            </motion.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
