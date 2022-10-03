import React, { useEffect, useState } from "react";
import * as gtag from "../lib/gtag";
import { useCookies } from "react-cookie";
import Translate from "@docusaurus/Translate";

const GDPR_COOKIE = "undistro-gdpr-consent";

function Consent() {
  const [consent, setConsent] = useState(true);
  const [cookies, setCookie] = useCookies([GDPR_COOKIE]);

  useEffect(() => {
    setConsent(cookies[GDPR_COOKIE]);
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie(GDPR_COOKIE, "true", { maxAge: 60 * 60 * 24 * 365 });
    gtag.consent();
  };

  const closeP = () => {
    setConsent(true);
  };

  const denyCookie = () => {
    setConsent(true);
    setCookie(GDPR_COOKIE, "false", { maxAge: 60 * 60 * 24 * 365 });
  };

  if (consent === true) {
    return null;
  }

  return (
    <div
      className={`fixed bg-[#293D52] bg-opacity-40 shadow-top text-opacity-90 text-white backdrop-blur-xl z-50 py-12 bottom-0 w-full ${
        consent ? "hidden" : ""
      }`}
    >
      <div className="section flex flex-col lg:flex-row justify-between items-center font-medium space-y-8 lg:space-y-0">
        <p>
          <Translate id="cookie.description" />
        </p>
        <button
          onClick={() => {
            acceptCookie();
          }}
          className="bg-[#13AAFF] text-black rounded-md text-sm px-8 py-2 w-full lg:w-auto"
        >
          <Translate id="cookie.button" />
        </button>
      </div>
    </div>
  );
}

export { Consent };
