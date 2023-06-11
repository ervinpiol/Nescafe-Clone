import React from "react";
import GRBannerImg from "../../assets/grown-respectfully/GRBanner.webp";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const GRBottomBanner = () => {
  return (
    <div className="relative">
      <Parallax
        strength={400}
        bgImage={GRBannerImg}
        className="h-full bg-fixed"
        bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
        loading="lazy"
      >
        <div className="h-[740px]" />
      </Parallax>
      <div className="absolute right-0 top-0 z-10 h-full w-full bg-black bg-opacity-50 text-white">
        <motion.div
          className="mx-auto flex h-full flex-col items-center justify-center gap-5 px-5 lg:w-4/6 xl:gap-0 xl:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className="custom-h1">The NESCAFÉ Plan in action</h1>
          <p className="mb-10 w-full text-center xl:w-[1150px]">
            Already nearly 70% of our coffee is independently checked and
            responsibly sourced, allowing us to know where it came from and how
            it was grown. There’s still lots to do, but we’re on track to
            reaching our target of 100% Responsibly Grown coffee by 2020. We’re
            leading the way in building a brighter future for coffee.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default GRBottomBanner;
