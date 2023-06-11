import React from "react";
import LoadMore from "../../components/CoffeeRecipePage/LoadMore";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const CRGridView = ({
  filteredItems,
  displayCount,
  setDisplayCount,
  handleChosenRecipe,
}) => {
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <div>
      <div className="grid-auto-flow-dense grid w-full gap-6 py-8 xxs:grid-cols-1 md:grid-cols-2  lg:grid-cols-3">
        {filteredItems.slice(0, displayCount).map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 * (i + 1), duration: 1 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <Link
              to={`/coffee-recipes/${item.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className={`group relative flex w-full cursor-pointer flex-col-reverse items-center rounded-[18px] bg-white md:flex-col ${
                i % 3 === 1 && "lg:flex-col-reverse"
              } ${!isDesktop && i % 2 === 1 && "md:flex-col-reverse"}`}
              onClick={() => handleChosenRecipe(item.name)}
            >
              <div
                className={`absolute h-0 w-full bg-LightRed transition-all duration-500 ease-in-out xl:group-hover:h-2/3 ${
                  i % 3 === 1
                    ? "rounded-b-[18px] rounded-tl-[150px]"
                    : "rounded-t-[18px] rounded-br-[160px]"
                }`}
              />
              <div className="absolute bottom-20 left-1/2 z-[25] h-24 w-1 -translate-x-1/2 -translate-y-1/2  bg-LightRed  md:top-1/2">
                <div
                  className={`h-0 bg-white transition-all duration-1000 ease-in-out xl:group-hover:h-full ${
                    i % 3 === 1 && "absolute bottom-0 left-0 right-0"
                  }`}
                />
              </div>
              <h2 className="z-20 flex h-44 items-center px-7 text-center text-3xl leading-[3rem] transition-all duration-700 ease-in-out md:h-96 md:text-[38px] xl:group-hover:text-white">
                {item.name}
              </h2>
              <img
                src={item.image}
                alt={item.name}
                className={`h-96 w-full rounded-t-[18px] md:rounded-none ${
                  i % 3 === 1 ? "md:rounded-t-[18px]" : "md:rounded-b-[18px]"
                }`}
              />
            </Link>
          </motion.div>
        ))}
      </div>
      <LoadMore
        filteredItems={filteredItems}
        displayCount={displayCount}
        setDisplayCount={setDisplayCount}
      />
    </div>
  );
};

export default CRGridView;
