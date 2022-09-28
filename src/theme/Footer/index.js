import Translate from "@docusaurus/Translate";
import React from "react";
import { HubspotForm } from "../../components/HubspotForm";
function Footer() {
  return (
    <footer className="section py-16 text-white w-full space-y-12 z-10 bg-[#0A1015]">
      <div className="newsletter">
        <div>
          <p className="font-sf-pro font-medium text-3xl">
            <Translate id="newsletter.title" />
          </p>
          <p className="font-inter">
            <Translate id="newsletter.description" />
          </p>
        </div>
        <div>
          <HubspotForm />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <img src="/img/logo-white.svg" alt="undistro" className="h-4" />
        </div>
        <div className="flex space-x-4">
          <a className="cursor-pointer">
            <Translate id="footer.contact" />
          </a>
          <div className="border border-[#203446] flex-none my-1" />
          <a href="https://zora.undistro.io/" target="_blank" className="cursor-pointer">
            <Translate id="footer.documentation" />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <p className="opacity-60">Social</p>
          <a className="bg-[#101A23] hover:scale-105 cursor-pointer transition duration-150 ease-in-out p-[6px] rounded-lg">
            <img src="/img/social-github.svg" alt="Github" className="h-8" />
          </a>
          <a className="bg-[#101A23] hover:scale-105 cursor-pointer transition duration-150 ease-in-out p-[6px] rounded-lg">
            <img src="/img/social-slack.svg" alt="Slack" className="h-8" />
          </a>
          <a className="bg-[#101A23] hover:scale-105 cursor-pointer transition duration-150 ease-in-out p-[6px] rounded-lg">
            <img src="/img/social-twitter.svg" alt="Twitter" className="h-8" />
          </a>
        </div>
      </div>
      <div className="space-y-2">
        <p className="opacity-80">Copyright © 2022 UnDistro.</p>
        <p>
          <span className="opacity-60">
            Undistro is an initiative to create Kubernetes products, backed by
          </span>
          <a className="text-[#01C4C3]"> Getup.io</a>
        </p>
      </div>
    </footer>
  );
}
export default React.memo(Footer);
