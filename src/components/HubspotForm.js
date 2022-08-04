import React, { useEffect } from "react";

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
                BLOCKED_EMAIL: "Email must be formatted correctly"
              },
            },
          },
        });
      }
    });
  }, []);

  return (
    <div className="form">
      <div className="text-primary">
        <p>Undistro is coming. Get early access before we launch.</p>
      </div>
      <div className="text-primary" id="hubspotForm" />
    </div>
  );
};

export default HubspotForm;
