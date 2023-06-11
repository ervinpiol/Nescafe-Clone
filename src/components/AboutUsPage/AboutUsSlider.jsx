import React from "react";
import Slider from "./Slider";
import { motion } from "framer-motion";

const AboutUsSlider = () => {
  return (
    <div className="mx-auto w-full xl:w-3/4">
      <div className="flex w-full flex-col items-start justify-between px-5 py-12 md:px-8 lg:flex-row lg:p-28 xl:pr-16">
        <motion.h2
          className="text-3xl md:text-4xl xl:text-[40px]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The NESCAFÉ Story
        </motion.h2>
        <motion.div
          className="flex w-full flex-col gap-5 pt-8 lg:w-1/2 lg:pt-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>
            In 1929, Nestlé was challenged to help preserve the surplus coffee
            beans in Brazil that resulted from the Wall Street Crash. And Nestlé
            accepted the challenge.
          </p>
          <p>
            Our coffee specialist, Max Morgenthaler, was on a mission to create
            a delicious cup of coffee simply by adding water. Max and his team
            worked hard to find a new way to make instant coffee that would
            retain the coffee’s natural flavour. In 1938, they found the answer,
            and NESCAFÉ was born. Named by using the first three letters in
            Nestlé and suffixing it with ‘café’, NESCAFÉ became the new name in
            coffee.
          </p>
        </motion.div>
      </div>
      <Slider />
      <div className="flex w-full flex-col items-start justify-between px-5 py-12 md:px-8 lg:flex-row lg:p-28 lg:pr-16">
        <motion.h2
          className="text-3xl md:text-4xl lg:w-[400px] xl:text-[40px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          The World’s Favorite Coffee
        </motion.h2>
        <motion.div
          className="flex w-full flex-col gap-5 pt-8 md:gap-8 lg:w-1/2 lg:gap-5 lg:pt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p>
            When we first launched NESCAFÉ in Switzerland on 1 April 1938, it
            was predicted to be a huge success. But then WWII started in 1939.
            During the war, NESCAFÉ was a staple in the food rations of the US
            forces, and they loved it. Quick, easy and delicious coffee.
          </p>
          <p>
            After the war, NESCAFÉ was exported to France, UK and the US, and
            the American troops became our brand ambassadors, spreading their
            love of NESCAFÉ.
          </p>
          <p>During the rest of the 1940s, the popularity of NESCAFÉ grew.</p>
          <p>
            Today, NESCAFÉ is enjoyed in over 180 countries and has become the
            world’s favourite coffee.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsSlider;
