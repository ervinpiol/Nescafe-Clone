import React from "react";
import { CoffeeOriginItems, OCTopText } from "../../data/OCItems";
import { Parallax } from "react-parallax";
import { motion } from "framer-motion";

const CoffeeOrigin = () => {
  return (
    <div className="mx-auto w-full xl:w-3/4">
      <motion.div
        className="flex flex-col gap-8 px-5 pb-20 pt-24 md:px-16 lg:px-20 "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p>{OCTopText.first}</p>
        <p>{OCTopText.second}</p>
      </motion.div>

      <div className="relative flex flex-col xl:px-20">
        {CoffeeOriginItems.map((item, i) => (
          <div key={i} className="flex w-full items-center">
            <motion.div
              className="relative flex w-full flex-col items-start justify-between px-5 py-12 md:px-8 lg:flex-row lg:px-24 xl:pl-0 xl:pr-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, y: 200 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Parallax
                bgImage={item.image}
                strength={500}
                speed={10}
                className="absolute right-0 hidden h-96 w-[170px] lg:block"
                bgImageStyle={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                loading="lazy"
              >
                <div className="absolute right-0" />
              </Parallax>
              <h2 className="w-full text-3xl md:text-4xl lg:w-[400px] xl:w-[500px] xl:text-[40px]">
                {item.bigText}
              </h2>

              <div className="flex w-full flex-col gap-5 pt-8 lg:w-1/2 lg:pt-0 xl:pl-20">
                <div>
                  <p>{item.smallText}</p>
                  {i === 1 && <p className="pt-6">{item.smallText2}</p>}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoffeeOrigin;
