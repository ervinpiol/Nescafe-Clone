import React, { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AllCoffeeItems } from "../../data/AllCoffeeItems";
import { ChosenRecipeItems } from "../../data/ChosenRecipeItems";
import { getCoffeeBasedOnSelection } from "../../utils/CoffeeFinderLogic";
import Loading from "../../layouts/Loading";
import Search from "../../pages/Search";
import { AnimatePresence } from "framer-motion";

const HomePage = lazy(() => import("../../pages/HomePage"));
const Register = lazy(() => import("../../pages/Register"));
const SignIn = lazy(() => import("../../pages/SignIn"));
const AllCoffees = lazy(() => import("../../pages/AllCoffees"));
const ChosenCoffee = lazy(() => import("../../pages/ChosenCoffee"));
const GrownRespectfully = lazy(() => import("../../pages/GrownRespectfully"));
const OriginsCoffee = lazy(() => import("../../pages/OriginsCoffee"));
const CoffeeRecipes = lazy(() => import("../../pages/CoffeeRecipes"));
const ChosenRecipe = lazy(() => import("../../pages/ChosenRecipe"));
const AboutUs = lazy(() => import("../../pages/AboutUs"));
const SiteMap = lazy(() => import("../../pages/SiteMap"));
const CoffeeFinder = lazy(() => import("../../pages/CoffeeFinder"));
const Result = lazy(() => import("../../pages/Result"));

const AnimatedRoutes = () => {
  const location = useLocation();
  const [currentCoffee, setCurrentCoffee] = useState(AllCoffeeItems[0]);
  const [currentRecipe, setCurrentRecipe] = useState(ChosenRecipeItems[0]);
  const [step, setStep] = useState(1);
  const [coffeeType, setCoffeeType] = useState(null);
  const [strength, setStrength] = useState(null);
  const [openReviewModal, setOpenReviewModal] = useState(false);

  const handleChosenCoffee = (name) => {
    const chosenCoffee = AllCoffeeItems.find((item) => item.name === name);
    setCurrentCoffee(chosenCoffee);
  };

  const handleChosenRecipe = (name) => {
    const chosenRecipe = ChosenRecipeItems.find((item) => item.name === name);
    setCurrentRecipe(chosenRecipe);
  };

  const handleStart = () => {
    setStep(2);
  };

  const handleCoffeeTypeChange = (type) => {
    setCoffeeType(type);
    setStep(3);
  };

  const handleStrengthChange = (strength) => {
    setStrength(strength);
    setStep(1);
  };

  const selectedCoffee = getCoffeeBasedOnSelection(coffeeType, strength);

  useEffect(() => {
    if (openReviewModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    if (openReviewModal) {
      window.scrollTo(0, 0);
    }
  }, [openReviewModal]);

  useEffect(() => {
    const recipeName = location.pathname.replace("/coffee-recipes/", "");
    const chosenRecipe = ChosenRecipeItems.find(
      (item) => item.name.toLowerCase().replace(/\s+/g, "-") === recipeName
    );
    if (chosenRecipe) {
      setCurrentRecipe(chosenRecipe);
    }

    const coffeeName = decodeURIComponent(
      location.pathname.replace("/all-coffees/", "")
    )
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
    const chosenCoffee = AllCoffeeItems.find(
      (item) => item.name.toLowerCase() === coffeeName.toLowerCase()
    );
    if (chosenCoffee) {
      setCurrentCoffee(chosenCoffee);
    }
  }, [location]);

  return (
    <Suspense fallback={<Loading />}>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<SignIn />} />
          <Route
            path="/all-coffees/*"
            element={
              <AllCoffees
                handleChosenCoffee={handleChosenCoffee}
                currentCoffee={currentCoffee}
              />
            }
          />
          <Route
            path={`/all-coffees/:name`}
            element={
              <ChosenCoffee
                currentCoffee={currentCoffee}
                openReviewModal={openReviewModal}
                setOpenReviewModal={setOpenReviewModal}
              />
            }
          />
          <Route path="/grown-respectfully" element={<GrownRespectfully />} />
          <Route path="/origins-coffee" element={<OriginsCoffee />} />
          <Route
            path="/coffee-recipes/*"
            element={
              <CoffeeRecipes
                handleChosenRecipe={handleChosenRecipe}
                currentRecipe={currentRecipe}
              />
            }
          />
          <Route
            path={`/coffee-recipes/:name`}
            element={
              <ChosenRecipe
                currentRecipe={currentRecipe}
                setOpenReviewModal={setOpenReviewModal}
                openReviewModal={openReviewModal}
              />
            }
          />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/sitemap" element={<SiteMap />} />
          <Route
            path="/coffee-finder"
            element={
              <CoffeeFinder
                step={step}
                handleStart={handleStart}
                handleCoffeeTypeChange={handleCoffeeTypeChange}
                handleStrengthChange={handleStrengthChange}
              />
            }
          />
          <Route
            path="/result"
            element={<Result coffee={selectedCoffee} setStep={setStep} />}
          />
          <Route
            path="/search"
            element={
              <Search
                handleChosenCoffee={handleChosenCoffee}
                handleChosenRecipe={handleChosenRecipe}
              />
            }
          />
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default AnimatedRoutes;
