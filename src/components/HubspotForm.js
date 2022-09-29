import React, { useEffect } from "react";
import Translate from "@docusaurus/Translate";

const HubspotForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "1910685",
          formId: "c012eec3-b5b8-4a16-8b3e-303f3945a960",
          target: "#hubspotForm",
          locale: "en",
          translations: {
            en: {
              submissionErrors: {
                MISSING_REQUIRED_FIELDS: "Please complete this required field",
                BLOCKED_EMAIL: "Email must be formatted correctly",
              },
            },
          },
        });
      }
    });
  }, []);

  return (
    <div className="form">
      <div className="text-primary" id="hubspotForm" />
    </div>
  );
};

export const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.id = "hs-script-loader";
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener(
      "load",
      () => {
        // @ts-ignore
        if (window.hbspt) {
          // @ts-ignore
          window.hbspt.forms.create({
            region: "na1",
            portalId: "1910685",
            formId: "c664c8af-83fd-4e9a-b9f7-03ef52d174fe",
            target: "#contact-form",
          });
        }
      },
      { once: true }
    );
  }, []);

  return (
    <div className="contact-form lg:w-1/2 lg:!-mt-48 z-20">
      <p className="font-sf-pro font-bold mb-12 text-3xl">Send us an e-mail</p>
      <div id="contact-form" />
    </div>
  );
};

export { HubspotForm };
