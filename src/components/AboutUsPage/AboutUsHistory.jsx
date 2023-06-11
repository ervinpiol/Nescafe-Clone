import React from "react";
import Card2 from "../CardItems/Card2";
import { AUHistoryItems } from "../../data/AUItems";
import GRLogo from "../../assets/About-Us/grown-respectfully-logo-desktop.webp";
import { motion } from "framer-motion";

const AboutUsHistory = () => {
  return (
    <div className="mx-auto xxs:w-full xl:w-3/4">
      <div className="py-16">
        <Card2 items={AUHistoryItems} />
      </div>
      <div className="flex w-full items-center justify-between xxs:flex-col-reverse xxs:pb-20 lg:flex-row lg:px-20 lg:pb-10 xl:px-0">
        <motion.div
          className="flex flex-col items-start gap-5 xxs:w-full xxs:px-5 md:px-16 lg:px-12 xl:w-[47%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 150 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h4 className="font-GothamRoundedMedium text-[21px] md:text-2xl xl:text-[21px]">
            Coffee Grown Respectfully
          </h4>
          <p>
            We’re here to help coffee lovers everywhere. So we created the
            NESCAFÉ Plan. It’s a way to help coffee farmers make a better
            living; support local communities; inspire the next generation of
            farmers; and do so without damaging our planet. It’s a long journey,
            but we’ve got the roadmap and we’re already on the way.
          </p>
        </motion.div>
        <motion.img
          src={GRLogo}
          alt="GRLogo"
          className="xxs:w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 80 },
            visible: { opacity: 1, y: 0 },
          }}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AboutUsHistory;
