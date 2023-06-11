import React from "react";
import Card1 from "../CardItems/Card1";
import { WhyRoastedTitle, WhyRoastedItems } from "../../data/OCItems";
import { motion } from "framer-motion";

const WhyRoasted = () => {
  return (
    <div>
      <Card1 title={WhyRoastedTitle} items={WhyRoastedItems} />
      <div className="mx-auto w-full xl:w-3/4">
        <motion.p
          className="px-5 pb-16 pt-20 md:px-16 xl:px-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Roasting is the process of heating coffee beans to bring out the rich
          and aromatic flavour that we know and love. Fresh off the plant,
          coffee beans are actually green in colour and possess a grassy smell,
          then when they’re roasted, chemical changes occur as a result of the
          beans being brought to a high temperature very quickly. This change
          also causes them to turn into a deep brown colour with a wonderfully
          earthy smell. Once they’re roasted, they’re ready to be ground and
          brewed into your favourite blends.
        </motion.p>
      </div>
    </div>
  );
};

export default WhyRoasted;
