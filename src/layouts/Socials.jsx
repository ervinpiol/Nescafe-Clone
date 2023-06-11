import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Socials = () => {
  return (
    <div className="bg-DarkGray px-5 pb-20 pt-12 xl:px-0">
      <div className="flex flex-col items-center text-white">
        <motion.h3
          className="text-[26px] lg:text-[32px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Stay connected
        </motion.h3>
        <motion.p
          className="pb-14 pt-1.5 text-center lg:w-2/5 xl:w-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Follow us on our social media accounts to get even more tasty content.
        </motion.p>
        <motion.div
          className="flex gap-12 text-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {[faFacebook, faInstagram, faTwitter, faYoutube].map((icon, i) => (
            <FontAwesomeIcon key={i} icon={icon} className="cursor-pointer" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Socials;
