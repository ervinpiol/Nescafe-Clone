import React from "react";
import { OCHistoryItems } from "../../data/OCItems";
import Card2 from "../CardItems/Card2";

const OrginsCoffeeHistory = () => {
  return (
    <div className="mx-auto w-full py-16 xl:w-4/5 xl:px-6">
      <Card2 items={OCHistoryItems} />
    </div>
  );
};

export default OrginsCoffeeHistory;
