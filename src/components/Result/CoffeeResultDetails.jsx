import React from "react";
import RedLeaf from "../../assets/Brand/small-leaf.svg";
import MadeFromImg from "../../assets/Result/Made-from.webp";
import GrownInImg from "../../assets/Result/Grown-in.webp";
import Button from "../UI/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CoffeeResultDetails = ({ coffee, setStep }) => {
  const columns = [
    {
      imgSrc: MadeFromImg,
      heading: "MADE WITH",
      paragraph: coffee.pText1,
    },
    {
      imgSrc: GrownInImg,
      heading: "GOOD TO KNOW",
      paragraph: coffee.pText2,
    },
    {
      imgSrc: MadeFromImg,
      heading: coffee.h5Text,
      paragraph: coffee.pText3,
    },
  ];

  return (
    <div className="relative flex flex-col gap-52 px-5 pb-64 text-white xl:gap-44 xl:px-20 xl:pb-72">
      <div
        className={`absolute -top-32 left-1/2 z-[-1] mx-auto flex h-full w-full -translate-x-1/2 items-center justify-center rounded-br-[100px] xl:w-[1600px] xl:rounded-br-[200px] ${coffee.bgColor}`}
      >
        <img src={coffee.bgStyle} alt="bg-style" className="absolute top-40" />
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-20 lg:px-24 xl:px-0">
        <motion.div
          className="w-full items-center py-4 lg:w-1/2 lg:items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="flex items-center justify-center gap-4 lg:justify-normal">
            <img src={RedLeaf} alt="RedLeaf" className="w-7" />
            <h3 className="font-Caveat text-2xl font-bold md:text-3xl">
              You're a
            </h3>
          </div>
          <h1 className="mx-auto pb-16 pt-8 text-center md:w-3/4 lg:mx-0 lg:w-full lg:pb-20 lg:text-start xl:w-3/4 xl:pb-16">
            {coffee.h2Text}
          </h1>
          <p className="pb-8 text-center text-xl lg:pb-20 lg:text-start ">
            {coffee.pText}
          </p>
          <div className="flex flex-col gap-8 md:flex-row md:justify-center lg:justify-normal">
            <Link
              to={`/all-coffees/${coffee.name
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              <Button className="red-button-animation w-full border-none md:w-44">
                Discover More
              </Button>
            </Link>
            <Link to="/coffee-finder">
              <Button
                className="white-button-animation w-full xl:w-auto"
                onClick={() => setStep(1)}
              >
                Take the test again
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex items-start pt-20 md:justify-center lg:justify-normal lg:pt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <img src={coffee.image} alt={coffee.name} className="w-[490px]" />
          <img
            src={coffee.smallImage}
            alt=""
            className="hidden w-32 pt-14 xl:block"
          />
        </motion.div>
      </div>
      <div className="relative flex flex-col items-center gap-32 xl:gap-52">
        <div className="absolute -top-44 left-1/2 h-[150px] w-[1px] bg-white xl:-top-40 xl:left-14 xl:h-[490px]" />
        <motion.div
          className="flex flex-col items-center gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h3 className="font-Caveat text-2xl font-bold md:text-3xl">
            Our choice for you
          </h3>
          <h3 className="text-3xl md:text-4xl">{coffee.name}</h3>
        </motion.div>
        <div className="px- flex w-full flex-col items-start justify-between gap-10 lg:flex-row xl:px-0">
          {columns.map((column, index) => (
            <motion.div
              key={index}
              className="flex w-full flex-row gap-16 md:justify-around md:pl-10 lg:ml-0 lg:flex-col lg:items-center lg:justify-normal xl:w-1/3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2 * (index + 1), duration: 0.8 }}
              variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={column.imgSrc}
                alt={`Image ${index}`}
                className="h-20"
              />
              <div className="flex flex-col items-start md:w-1/2 lg:w-auto lg:items-center">
                <h5 className="font-GothamRoundedMedium lg:text-lg xl:text-base">
                  {column.heading}
                </h5>
                <p className="pt-3 text-start  lg:text-center">
                  {column.paragraph}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoffeeResultDetails;
