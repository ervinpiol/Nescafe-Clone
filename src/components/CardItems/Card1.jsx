import React from "react";
import { motion } from "framer-motion";

const Card1 = ({ title, items }) => {
  return (
    <div className="bg-GrayBG2">
      <div className="mx-auto w-full px-5 pb-32 pt-20 md:px-8 lg:px-8 xl:w-3/4 xl:px-0">
        <motion.h3
          className="w-full pb-12 text-3xl lg:w-[420px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 200 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {title}
        </motion.h3>
        <div className="flex flex-col items-start gap-20 p-0 lg:flex-row lg:gap-1 xl:pl-28">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="flex flex-1 flex-col md:flex-row md:justify-between lg:flex-col lg:justify-normal"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 * (i + 1), duration: 1 }}
              variants={{
                hidden: { opacity: 0, y: 200 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className={`md:h-40 lg:h-full ${
                  i === 1 && "lg:rounded-br-[100px]"
                }`}
                loading="lazy"
              />
              <div className="w-full md:w-3/5 lg:w-10/12 xl:w-[370px]">
                <h4 className="pt-10 font-GothamRoundedMedium text-xl font-medium md:pt-0 lg:pt-10">
                  {item.name}
                </h4>
                <p className="pt-5">{item.pText}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card1;
