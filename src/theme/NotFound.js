import React from "react";
import Translate, { translate } from "@docusaurus/Translate";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: "theme.NotFound.title",
          message: "Page Not Found",
        })}
      />
      <div className="bg-dark">
        <div className="mx-auto py-16 md:py-32 max-w-container 2xl:max-w-7xl text-center lg:text-left flex flex-col items-center xl:max-w-7xl max-h-screen justify-center space-y-8 h-screen relative">
          <img className="md:h-2/3" alt="404 - Not Found" src="/img/404.png" />
          <h1 className="text-primary font-light text-lg">
            This page could not be found.
          </h1>
          <div className="flex space-x-4">
            <a href="https://getup.io" target="_blank">
              <img src="/img/getup.svg" alt="Getup" className="max-h-4" />
            </a>
            <a href="/">
              <img
                src="/img/logo-white.svg"
                alt="UnDistro"
                className="max-h-4"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
