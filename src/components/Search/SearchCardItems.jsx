import React from "react";
import { Articles } from "../../data/Articles";
import Button from "../../components/UI/Button";
import CheckboxSVG from "../../components/UI/CheckboxSVG";
import LeafImg from "../../assets/Brand/leaf-red.svg";

import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const CoffeeCard = ({ item, i, handleChosenCoffee }) => {
  return (
    <Link
      to={`/all-coffees/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
      onClick={() => handleChosenCoffee(item.name)}
    >
      <motion.div
        className="relative flex flex-col items-start rounded-xl bg-white px-7 pb-7 pt-8 shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ delay: 0.1 * (i + 1), duration: 1 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div className="flex flex-col items-center">
          <img
            src={item.image}
            alt={item.name}
            className="w-48 lg:w-3/4"
            loading="lazy"
          />
          <div className="flex flex-col items-start gap-6 pt-8">
            <h3 className="text-lg md:h-[45px] lg:h-[90px] lg:text-2xl">
              {item.name}{" "}
            </h3>
            <div className="flex gap-2 text-sm text-gray-300">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
            </div>
            <p className="text-[17px]">
              {item.text.length > 75
                ? `${item.text.slice(0, 75)}...`
                : item.text}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 pt-6">
          <CheckboxSVG />
          <span className="text-[13px] font-bold">Compare products</span>
        </div>
      </motion.div>
    </Link>
  );
};

export const ItemCard = ({ item, i, handleChosenRecipe }) => {
  const isArticle = Articles.includes(item);

  const handleClick = () => {
    if (!isArticle) {
      handleChosenRecipe(item.name);
    }
  };

  return (
    <motion.div
      className="relative h-[585px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: 0.1 * (i + 1), duration: 1 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="z-[-2] h-full rounded-br-[50px] rounded-tl-3xl object-cover object-center"
        loading="lazy"
      />
      <div className="absolute top-0 z-[99] flex h-full w-full flex-col justify-between rounded-br-[50px] rounded-tl-3xl bg-black bg-opacity-40 px-12 text-white">
        <div className="mt-32 flex flex-col gap-8">
          <img src={LeafImg} alt="" className="w-10" loading="lazy" />
          <h2 className="text-4xl leading-[45px]">{item.name}</h2>
        </div>
        <Link
          to={
            isArticle
              ? item.link
              : `/coffee-recipes/${item.name
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`
          }
          onClick={handleClick}
        >
          <Button className="white-button-animation mb-10 w-44">
            Find out more
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};
