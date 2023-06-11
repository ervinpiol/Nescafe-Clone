import React, { useState } from "react";
import Button from "../components/UI/Button";
import GirlImg from "../assets/Register/girl-img.webp";
import NavLocation from "../layouts/NavLocation";
import UsePhone from "../components/UI/UsePhone";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Register = () => {
  const [useMobilePhone, setUseMobilePhone] = useState(false);

  const handleUsePhone = () => {
    setUseMobilePhone(true);
  };

  return (
    <div>
      <NavLocation navLocation="Register" />
      <motion.div
        className="mx-auto flex w-full xl:w-[1460px]"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <picture className="hidden w-[40%] lg:flex">
          <img src={GirlImg} alt="GirlImg" className="h-full" />
        </picture>
        {useMobilePhone ? (
          <UsePhone />
        ) : (
          <div className="w-full flex-1 bg-GrayBG px-5 pb-20 pt-8 lg:pl-8 lg:pr-16 lg:pt-12 xl:pb-0 xl:pl-10 xl:pr-24">
            <h2 className="text-3xl md:text-4xl">Register</h2>
            <p className="pt-4 font-thin">
              Join us and sign up for a{" "}
              <b className="font-extrabold">Nestlé Philippines</b> account in
              order to be amongst the first to hear about the latest news,
              product updates, samples and competitions from{" "}
              <b className="font-extrabold">NESCAFÉ Philippines.</b>
            </p>

            <p className="pt-8 text-[13px] font-semibold">
              REGISTER WITH YOUR MOBILE PHONE
            </p>
            <p className="pt-8 text-[13px]">
              Want to register using your mobile number?{" "}
              <button
                className="cursor-pointer text-LightRed"
                onClick={handleUsePhone}
              >
                Click here
              </button>
            </p>
            <div className="flex flex-col items-start gap-8 pt-8 lg:flex-row lg:items-center lg:gap-10 lg:pt-12">
              <p className="text-[13px] font-semibold">
                REGISTER WITH YOUR SOCIAL ACCOUNT
              </p>
              <FontAwesomeIcon
                icon={faFacebook}
                className="cursor-pointer text-4xl text-FBColor"
              />
            </div>
            <p className="pt-8 text-[13px] font-semibold">
              OR CREATE AN ACCOUNT
            </p>
            <form className="grid grid-cols-1  grid-rows-3 gap-6 py-10 lg:grid-cols-2">
              <div className="flex flex-col gap-4">
                <label htmlFor="">
                  First name <span className="text-LightRed">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name *"
                  className="rounded-lg p-3 placeholder:text-LightGray"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="">
                  Last name <span className="text-LightRed">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name *"
                  className="rounded-lg p-3 placeholder:text-LightGray"
                />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="">
                  Email address <span className="text-LightRed">*</span>
                </label>
                <input
                  type="email"
                  placeholder="Email address *"
                  className="rounded-lg p-3 placeholder:text-LightGray"
                />
              </div>
              <div className="relative flex flex-col gap-4">
                <label>
                  Password <span className="text-LightRed">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Email your password *"
                  className="rounded-lg p-3 placeholder:text-LightGray"
                />
                <FontAwesomeIcon
                  icon={faEye}
                  className="absolute bottom-4 right-4 cursor-pointer text-gray-700"
                />
              </div>
              <div className="relative flex flex-col gap-4">
                <label htmlFor="">
                  Confirm Password <span className="text-LightRed">*</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm password *"
                  className="rounded-lg p-3 placeholder:text-LightGray"
                />
                <FontAwesomeIcon
                  icon={faEye}
                  className="absolute bottom-4 right-4 cursor-pointer text-gray-700"
                />
              </div>
            </form>
            <Button className="red-button-animation w-48 text-[15px]">
              Register
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Register;
