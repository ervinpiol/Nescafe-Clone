import { motion } from "framer-motion";
import React from "react";
import ShowMoreText from "react-show-more-text";

const Card2 = ({ items }) => {
  return (
    <div className="grid grid-rows-2 xxs:gap-y-32 lg:gap-y-24 lg:px-10 xl:px-0">
      {items.map((item, i) => (
        <motion.div
          key={i}
          className={`flex items-start justify-between xxs:flex-col-reverse xxs:gap-0 lg:flex-row lg:gap-16 xl:gap-24 ${
            i === 1 ? "lg:flex-row-reverse" : ""
          }`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 150 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div
            className={`pt-8 xxs:px-5 md:px-16 lg:px-0 xl:px-5 ${
              i === 0 ? "lg:pl-20" : "lg:pr-20"
            }`}
          >
            <h4 className="font-GothamRoundedMedium text-[21px] md:text-2xl lg:text-[21px]">
              {item.title}
            </h4>
            <div className="flex flex-col gap-4 pt-4 xxs:w-full xl:w-[550px]">
              <ShowMoreText
                lines={3}
                more="Show more"
                less="Show less"
                anchorClass="show-more-anchor"
                className="text-lg"
              >
                {Array.isArray(item.details) ? (
                  <p>{item.details.join(" ")}</p>
                ) : (
                  <p>{item.details}</p>
                )}
              </ShowMoreText>
            </div>
          </div>
          <img
            src={item.image}
            alt={item.name}
            className={`xxs:w-full lg:w-1/2 ${
              i === 0 ? "lg:rounded-tr-[110px]" : "lg:rounded-bl-[110px]"
            }`}
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Card2;
