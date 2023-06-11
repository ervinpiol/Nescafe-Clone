import React from "react";
import RecipeDetails from "../components/ChosenRecipe/RecipeDetails";
import WhatYouNeed from "../components/ChosenRecipe/WhatYouNeed";
import CreateIt from "../components/ChosenRecipe/CreateIt";
import ChosenRecipeBanner from "../components/ChosenRecipe/RecipeBanner";
import Reviews from "../components/Reviews/Reviews";
import ReviewModal from "../components/Reviews/ReviewModal";
import { AnimatePresence } from "framer-motion";

const ChosenRecipe = ({
  currentRecipe,
  setOpenReviewModal,
  openReviewModal,
}) => {
  const handleOpenReviewModal = () => {
    setOpenReviewModal(true);
  };

  return (
    <div>
      <RecipeDetails currentRecipe={currentRecipe} />
      <WhatYouNeed currentRecipe={currentRecipe} />
      <CreateIt currentRecipe={currentRecipe} />
      <ChosenRecipeBanner />
      <Reviews setOpenReviewModal={handleOpenReviewModal} />
      <AnimatePresence>
        {openReviewModal && (
          <ReviewModal
            setOpenReviewModal={setOpenReviewModal}
            currentItem={currentRecipe}
            fromChosenCoffee={false}
            fromChosenRecipe={true}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChosenRecipe;
