import React from "react";
import CRTop from "../components/CoffeeRecipePage/CRTop";
import CRViewType from "../components/CoffeeRecipePage/CRViewType";

const CoffeeRecipes = ({ handleChosenRecipe, currentRecipe }) => {
  return (
    <div className="">
      <CRTop />
      <CRViewType
        handleChosenRecipe={handleChosenRecipe}
        currentRecipe={currentRecipe}
      />
    </div>
  );
};

export default CoffeeRecipes;
