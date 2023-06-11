import React from "react";
import FutureAndPlan from "../components/GrownRespectfullyPage/FutureAndPlan";
import GRTopBanner from "../components/GrownRespectfullyPage/GRTopBanner";
import GRInfroGraphic from "../components/GrownRespectfullyPage/GRInfroGraphic";
import GRBottomBanner from "../components/GrownRespectfullyPage/GRBottomBanner";
import Card1 from "../components/CardItems/Card1";
import {
  secondGRItems,
  secondGRTitle,
  thirdGRItems,
  thirdGRTitle,
} from "../data/GRItems";

const GrownRespectfully = () => {
  return (
    <div>
      <GRTopBanner />
      <FutureAndPlan />
      <Card1 title={secondGRTitle} items={secondGRItems} />
      <GRInfroGraphic />
      <Card1 title={thirdGRTitle} items={thirdGRItems} />
      <GRBottomBanner />
    </div>
  );
};

export default GrownRespectfully;
