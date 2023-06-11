import React, { useState } from "react";
import NavLocation from "../layouts/NavLocation";
import UsePhone from "../components/UI/UsePhone";
import Button from "../components/UI/Button";
import GirlImg from "../assets/Register/girl-img-sign-in.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const SignIn = () => {
  const [useMobilePhone, setUseMobilePhone] = useState(false);

  const handleUsePhone = () => {
    setUseMobilePhone(true);
  };

  return (
    <div>
      <NavLocation navLocation="Sign in" />
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
          <div className="w-full flex-1 bg-GrayBG px-5 pb-20 pt-8 lg:pl-8 lg:pr-16 lg:pt-12 xl:pl-10 xl:pr-24">
            <h2 className="text-3xl md:text-4xl">Sign in</h2>
            <p className="pt-4 font-thin">
              Already have a{" "}
              <span className="font-bold">Nestlé Philippines</span> account?
            </p>
            <p className=" pt-8">
              Simply sign in to update your preferences and receive offers,
              news, competitions and information about NESCAFÉ Philippines, its
              brands and its products.
            </p>{" "}
            <p className="pt-8 text-[13px] font-semibold">
              SIGN IN USING YOUR MOBILE PHONE
            </p>
            <p className="pt-4 text-[13px]">
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
                SIGN IN USING YOUR SOCIAL ACCOUNT
              </p>
              <FontAwesomeIcon
                icon={faFacebook}
                className="cursor-pointer text-4xl text-FBColor"
              />
            </div>
            <p className="pt-5 text-[13px] font-semibold">
              OR SIGN IN USING YOUR EMAIL
            </p>
            <form className="grid grid-cols-1 gap-6 pb-8 pt-8 lg:grid-cols-2 lg:py-10">
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
                <label htmlFor="">
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
            </form>
            <Button className="red-button-animation w-48 text-[15px]">
              Sign in
            </Button>
            <p className="cursor-pointer pt-6 text-[15px] font-semibold">
              Forgot password?
            </p>
            <p className="pt-6 text-[15px] font-thin">
              View our{" "}
              <span className="cursor-pointer   font-semibold">
                Privacy Policy.
              </span>
            </p>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default SignIn;
