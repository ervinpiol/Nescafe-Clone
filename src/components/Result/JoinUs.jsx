import React from "react";
import NescafeLogo from "../../assets/Result/nescafe-logo.webp";
import Button from "../../components/UI/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const JoinUs = () => {
  return (
    <div className="mx-auto w-full px-5 xl:w-[1460px] xl:px-0">
      <div className="flex flex-col items-center justify-between gap-10 rounded-br-[80px] rounded-tl-[50px] bg-GrayBG2 px-5 py-16 lg:flex-row lg:px-20 xl:items-start xl:rounded-br-[150px] xl:rounded-tl-[100px] xl:pb-10 xl:pl-36 xl:pr-28 xl:pt-20">
        <motion.picture
          className="rounded-full bg-LightRed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <img src={NescafeLogo} alt="" className="w-44" loading="lazy" />
        </motion.picture>

        <div className="w-full lg:w-1/2 ">
          <motion.p
            className="pb-8 leading-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            Want to be amongst the first to hear about the latest news, product
            updates, samples and competitions about this product and others from
            NESCAFÉ Philippines? Join us and sign up for a Nestlé Philippines
            account!
          </motion.p>
          <motion.div
            className="flex flex-col gap-6 md:flex-row md:justify-center lg:justify-normal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={{
              hidden: { opacity: 0, x: 100 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Link to="/register">
              <Button className="red-button-animation w-full border-none md:w-40">
                Sign Up
              </Button>
            </Link>
            <Link to="/login">
              <Button className="black-button-animation w-full md:w-40">
                Sign In
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
