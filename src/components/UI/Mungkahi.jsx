import React from "react";
import MungkahiImg from "../../assets/Brand/mungkahi.png";

const Mungkahi = () => {
  return (
    <div className="fixed bottom-44 right-0 z-[500]">
      <img
        src={MungkahiImg}
        alt="MungkahiImg"
        className="h-20 cursor-pointer md:h-32 xl:h-[120px]"
      />
    </div>
  );
};

export default Mungkahi;
