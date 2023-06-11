import { ResultItems } from "../data/ResultItems";

export const getCoffeeBasedOnSelection = (coffeeType, strength) => {
  if (coffeeType === "BlackCoffee") {
    if (strength === "Mild") {
      return ResultItems.find((item) => item.name === "NESCAFÉ GOLD");
    } else if (strength === "Medium") {
      return ResultItems.find((item) => item.name === "NESCAFÉ Classic");
    } else if (strength === "Strong") {
      return ResultItems.find((item) => item.name === "NESCAFÉ GOLD Intense");
    }
  } else if (coffeeType === "CreamyCoffee") {
    if (strength === "Mild") {
      return ResultItems.find((item) => item.name === "NESCAFÉ Creamy White");
    } else if (strength === "Medium") {
      return ResultItems.find((item) => item.name === "NESCAFÉ Brown");
    } else if (strength === "Strong") {
      return ResultItems.find((item) => item.name === "NESCAFÉ Original");
    }
  }

  return null;
};
