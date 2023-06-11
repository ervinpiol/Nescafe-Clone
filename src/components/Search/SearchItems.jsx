import React, { useState } from "react";
import { AllCoffeeItems } from "../../data/AllCoffeeItems";
import { ChosenRecipeItems } from "../../data/ChosenRecipeItems";
import { Articles } from "../../data//Articles";
import { ItemCard, CoffeeCard } from "./SearchCardItems";
import { AnimatePresence } from "framer-motion";

const SearchItems = ({
  handleChosenCoffee,
  handleChosenRecipe,
  selectedType,
  searchInput,
}) => {
  const combinedItems = [...Articles, ...ChosenRecipeItems];

  const initialItemsToShow = 12;

  const [itemsToShow, setItemsToShow] = useState(initialItemsToShow);

  const handleLoadMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 12);
  };

  const allItems = [...AllCoffeeItems, ...combinedItems];

  const filteredItems =
    selectedType === "All Items"
      ? allItems.filter((item) =>
          item.name.toLowerCase().includes(searchInput.toLowerCase())
        )
      : allItems
          .filter((item) => item.type === selectedType)
          .filter((item) =>
            item.name.toLowerCase().includes(searchInput.toLowerCase())
          );

  const itemsToDisplay = filteredItems.slice(0, itemsToShow);

  return (
    <div className="mx-auto flex w-full flex-col items-center gap-10 xl:w-[1460px]">
      <div className="grid grid-cols-1 gap-x-7 gap-y-5 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
        {itemsToDisplay.map((item, i) => (
          <AnimatePresence key={i}>
            {item.type === "Product" ? (
              <CoffeeCard
                item={item}
                i={i}
                handleChosenCoffee={handleChosenCoffee}
              />
            ) : (
              <ItemCard
                item={item}
                i={i}
                handleChosenRecipe={handleChosenRecipe}
              />
            )}
          </AnimatePresence>
        ))}
      </div>
      {itemsToShow < filteredItems.length && (
        <button className="load-more-button" onClick={handleLoadMore}>
          <div className="load-more-icon" />
        </button>
      )}
    </div>
  );
};

export default SearchItems;
