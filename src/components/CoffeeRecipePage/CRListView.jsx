import React from "react";
import LoadMore from "../../components/CoffeeRecipePage/LoadMore";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CRListView = ({
  filteredItems,
  displayCount,
  handleChosenRecipe,
  setDisplayCount,
}) => {
  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-6 pt-8 lg:grid-cols-2">
        {filteredItems.slice(0, displayCount).map((item, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
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
              className="flex items-center rounded-[18px] bg-white"
              onClick={() => handleChosenRecipe(item.name)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-28 rounded-l-[18px] md:w-[200px]"
              />
              <h2 className="mx-auto text-center text-3xl leading-[3rem] md:text-[38px]">
                {item.name}
              </h2>
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

export default CRListView;
