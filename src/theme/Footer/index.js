import React from "react";
function Footer() {
  return (
    <footer className="section py-16 text-white w-full space-y-12">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
        <div>
          <img src="/img/logo-white.svg" alt="undistro" className="h-4" />
        </div>
        <div className="flex space-x-4">
          <a className="cursor-pointer">Contact Us</a>
          <div className="border border-[#203446] flex-none my-1" />
          <a className="cursor-pointer">Documentation</a>
        </div>
        <div className="flex items-center space-x-4">
          <p className="opacity-60">Social</p>
          <a className="bg-[#101A23] p-[6px] rounded-lg">
            <img src="/img/social-github.svg" alt="Github" className="h-8" />
          </a>
          <a className="bg-[#101A23] p-[6px] rounded-lg">
            <img src="/img/social-slack.svg" alt="Slack" className="h-8" />
          </a>
          <a className="bg-[#101A23] p-[6px] rounded-lg">
            <img src="/img/social-twitter.svg" alt="Twitter" className="h-8" />
          </a>
        </div>
      </div>
      <div className="space-y-2">
        <p className="opacity-80">Copyright © 2022 UnDistro.</p>
        <p>
          <span className="opacity-60">Undistro is an initiative to create Kubernetes products, backed by</span>
          <a className="text-[#01C4C3]"> Getup.io</a>
        </p>
      </div>
    </footer>
  );
}
export default React.memo(Footer);
