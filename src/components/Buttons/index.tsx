import React from "react";
import { ArrowRight } from "phosphor-react";

const ZoraButton = () => {
  return (
    <a
      href="#"
      className="bg-[#0F181F] hover:bg-[#0D151C] hover:scale-105 hover:no-underline duration-200 transition-all ease-in-out py-4 px-4 lg:px-6 rounded-xl lg:space-x-6 font-semibold font-inter text-xs md:text-base inline-block"
    >
      <span className="bg-primary text-black py-2 px-4 lg:px-6 rounded-lg">
        new 0.0.1
      </span>
      <span className="ml-2">Alpha Release</span>
      <ArrowRight className="h-4 w-6 lg:h-6 lg:w-6 inline" />
    </a>
  );
};

export { ZoraButton };
