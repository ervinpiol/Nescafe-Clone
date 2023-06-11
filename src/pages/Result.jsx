import React from "react";
import NavLocation from "../layouts/NavLocation";
import CoffeeResultDetails from "../components/Result/CoffeeResultDetails";
import JoinUs from "../components/Result/JoinUs";
import ResultBottom from "../components/Result/ResultBottom";

const Result = ({ coffee, setStep }) => {
  return (
    <div className="mx-auto w-full xl:w-[1460px]">
      <NavLocation
        navLocation="Coffee Profiler Form"
        customClass="text-white pt-20"
      />
      <div>
        <CoffeeResultDetails coffee={coffee} setStep={setStep} />
        <JoinUs />
        <ResultBottom />
      </div>
    </div>
  );
};

export default Result;
