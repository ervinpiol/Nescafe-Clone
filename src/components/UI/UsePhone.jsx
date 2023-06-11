import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { motion } from "framer-motion";

const UsePhone = () => {
  return (
    <motion.div
      className="flex flex-1 flex-col bg-GrayBG px-5 pb-12 pt-12 lg:pb-0 lg:pl-16 lg:pr-24"
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col gap-8">
        <p className="text-[13px] font-bold">
          Register/Log In With Your Mobile Phone
        </p>{" "}
        <p className="text-[13px] font-bold">
          A code will be sent to your mobile phone number.
        </p>
      </div>

      <div className="pt-10">
        <label className="text-sm opacity-70">
          Enter your mobile number:<span className="text-LightRed">*</span>
        </label>
        <div className="flex flex-col gap-2 pb-4 pt-3.5 md:flex-row lg:gap-1">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="country/region code"
              className="w-full rounded-lg p-3 placeholder:opacity-70"
            />
            <FontAwesomeIcon
              icon={faChevronDown}
              className="absolute right-4 top-4 opacity-70"
            />
          </div>

          <input
            type="text"
            placeholder="subscriber number"
            className="w-full rounded-lg p-3 placeholder:opacity-70"
          />
        </div>
      </div>
      <Button className="red-button-animation w-52 text-[15px]">
        Get The Code
      </Button>
    </motion.div>
  );
};

export default UsePhone;
