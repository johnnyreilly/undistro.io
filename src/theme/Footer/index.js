import Translate, { translate } from "@docusaurus/Translate";
import React from "react";
import { HubspotForm } from "../../components/HubspotForm";
import Link from "@docusaurus/Link";

function Footer() {
  return (
    <footer className="bg-[#0A1015]">
      <div className="section py-16 text-white w-full space-y-12 z-10 ">
        <div id="newsletter" className="newsletter">
          <div>
            <p className="font-sf-pro font-medium text-3xl">
              <Translate id="newsletter.title" />
            </p>
            <p className="font-inter">
              <Translate id="newsletter.description" />
            </p>
          </div>
          <div className="w-full">
            <HubspotForm />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0">
          <div className="flex-1">
            <img src="/img/logo-white.svg" alt="undistro" className="h-4" />
          </div>
          <div className="flex flex-1 space-x-4 justify-center">
            <Link to="/contact" className="cursor-pointer">
              <Translate id="footer.contact" />
            </Link>
            <div className="border border-[#203446] flex-none my-1" />
            <Link
              to="https://zora.undistro.io/"
              target="_blank"
              className="cursor-pointer"
            >
              <Translate id="footer.documentation" />
            </Link>
          </div>
          <div className="flex flex-1 items-center space-x-4 justify-end">
            <p className="opacity-60">Social</p>
            <Link
              to="https://github.com/undistro/zora"
              target="_blank"
              className="bg-[#101A23] hover:scale-105 cursor-pointer transition duration-150 ease-in-out p-[6px] rounded-lg"
            >
              <img src="/img/social-github.svg" alt="Github" className="h-8" />
            </Link>
            <Link
              to="https://join.slack.com/t/undistrocommunity/shared_invite/zt-1h5i4earm-IjOpQeKNby09YzoOcvXqQQ"
              target="_blank"
              className="bg-[#101A23] hover:scale-105 cursor-pointer transition duration-150 ease-in-out p-[6px] rounded-lg"
            >
              <img src="/img/social-slack.svg" alt="Slack" className="h-8" />
            </Link>
            <Link
              to="https://twitter.com/undistro"
              target="_blank"
              className="bg-[#101A23] hover:scale-105 cursor-pointer transition duration-150 ease-in-out p-[6px] rounded-lg"
            >
              <img
                src="/img/social-twitter.svg"
                alt="Twitter"
                className="h-8"
              />
            </Link>
            <Link
              to="https://www.instagram.com/undistro.io/"
              target="_blank"
              className="bg-[#101A23] hover:scale-105 cursor-pointer transition duration-150 ease-in-out p-[6px] rounded-lg"
            >
              <img
                src="/img/social-instagram.svg"
                alt="Twitter"
                className="h-8"
              />
            </Link>
          </div>
        </div>
        <div className="space-y-2">
          <p className="opacity-80">Copyright © 2022 UnDistro.</p>
          <p>
            <span className="opacity-60">
              <Translate id="footer.copyright" />
            </span>{" "}
            <Link
              to="https://getup.io"
              target="_blank"
              className="text-[#01C4C3]"
            >
              Getup.io
            </Link>
          </p>
          {translate({ id: "locale" }) === "pt" && (
            <div className="flex divide-x opacity-80 text-opacity-80">
              <Link className="pr-2" to="/politica-de-privacidade">
                Política de Privacidade
              </Link>
              <Link className="px-2" to="/politica-de-cookies">
                Política de Cookies
              </Link>
              <Link className="pl-2" to="/termos-de-uso">
                Termos de uso
              </Link>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}
export default React.memo(Footer);
