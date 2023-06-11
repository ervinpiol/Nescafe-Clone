import React from "react";
import FooterLeaf from "../assets/Brand/small-leaf.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="border-t-2 bg-black px-0 py-20 lg:px-20 xl:px-52">
      <motion.div
        className="mx-auto flex flex-col items-center gap-1.5 text-white lg:items-start lg:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 2 }}
        variants={{
          hidden: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="flex items-center gap-2">
          <img src={FooterLeaf} alt="FooterLeaf" />
          <p className="cursor-pointer hover:underline">
            Copyright Nestlé 2020
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row">
          <ul className="flex flex-col items-center gap-1.5 lg:flex-row lg:gap-10">
            {[
              "Terms & Conditions",
              "Privacy Policy",
              "Cookies",
              "Contact Us",
            ].map((item, i) => (
              <li key={i} className="cursor-pointer hover:underline">
                {item}
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-center gap-1.5 lg:flex-row lg:gap-10">
            <li>
              GLOBAL /{" "}
              <a href="#" className="hover:underline">
                Select Location
              </a>
            </li>
            <Link to="/sitemap">
              <li className="cursor-pointer hover:underline">Sitemap</li>
            </Link>
          </ul>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
