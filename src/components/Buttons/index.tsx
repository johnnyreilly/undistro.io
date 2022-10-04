import React from "react";
import Translate from "@docusaurus/Translate";
import { ArrowRight } from "phosphor-react";

const ZoraButton = () => {
  return (
    <div className="relative bg-red-100 mx-auto inline-block">
      <a
        target="_blank"
        href="https://zora.undistro.io"
        className="absolute block w-max -translate-x-[50%] cursor-pointer bg-[#0F181F] hover:bg-[#0D151C] hover:scale-105 hover:no-underline border-primary hover:border duration-200 transition-all ease-in-out py-4 px-4 lg:px-6 rounded-xl lg:space-x-6 font-semibold font-inter text-xs md:text-base hover:text-white"
      >
        <span className="bg-primary text-black py-2 px-4 lg:px-6 rounded-lg">
          <Translate id="zora.version" />
        </span>
        <span className="ml-2">Alpha Release</span>
        <ArrowRight className="h-4 w-6 lg:h-6 lg:w-6 inline" />
      </a>
    </div>
  );
};

export { ZoraButton };
