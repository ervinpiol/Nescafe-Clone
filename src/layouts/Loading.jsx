import React from "react";
import DotLoader from "react-spinners/DotLoader";

const Loading = () => {
  return (
    <div className="fixed left-0 top-0 z-[999999] flex h-full w-full flex-col items-center justify-center gap-10 bg-LightRed">
      <h1 className="font-Bellefair text-2xl font-bold text-white">
        LOADING PLEASE WAIT
      </h1>
      <DotLoader color={"#fff"} size={50} />
    </div>
  );
};

export default Loading;
