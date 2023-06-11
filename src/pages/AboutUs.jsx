import React from "react";
import AboutUsBanner from "../components/AboutUsPage/AboutUsBanner";
import AboutUsSlider from "../components/AboutUsPage/AboutUsSlider";
import AboutUsHistory from "../components/AboutUsPage/AboutUsHistory";

const AboutUs = () => {
  return (
    <div className="w-full">
      <AboutUsBanner />
      <AboutUsSlider />
      <AboutUsHistory />
    </div>
  );
};

export default AboutUs;
