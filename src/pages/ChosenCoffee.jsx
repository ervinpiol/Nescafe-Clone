import React from "react";
import ChosenCoffeeTop from "../components/ChosenCoffee/ChosenCoffeeTop";
import Reviews from "../components/Reviews/Reviews";
import ReviewModal from "../components/Reviews/ReviewModal";
import { AnimatePresence } from "framer-motion";

const ChosenCoffee = ({
  currentCoffee,
  setOpenReviewModal,
  openReviewModal,
}) => {
  const handleOpenReviewModal = () => {
    setOpenReviewModal(true);
  };

  return (
    <div>
      <ChosenCoffeeTop
        setOpenReviewModal={handleOpenReviewModal}
        currentCoffee={currentCoffee}
      />
      <Reviews setOpenReviewModal={handleOpenReviewModal} />
      <AnimatePresence>
        {openReviewModal && (
          <ReviewModal
            setOpenReviewModal={setOpenReviewModal}
            currentItem={currentCoffee}
            fromChosenCoffee={true}
            fromChosenRecipe={false}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChosenCoffee;
