import React from "react";
import { BiLoaderAlt } from "react-icons/bi";

const SpinnerMini = () => {
  return (
    <BiLoaderAlt
      className="animate-spin w-6 h-6 text-gray-400"
      style={{
        animationDuration: "1.5s",
        animationIterationCount: "infinite",
        animationTimingFunction: "linear",
      }}
    />
  );
};

export default SpinnerMini;
