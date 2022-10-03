import React, { useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { Consent } from "../components/Consent";
import { GA_TRACKING_ID } from "../lib/gtag";

export default function Root({ children }) {
  useEffect(() => {
    const externalScript = document.createElement("script");
    externalScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    externalScript.async = true;

    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_TRACKING_ID');
    `;
    document.body.append(inlineScript);

    return () => {
      inlineScript.remove();
    };
  }, []);

  return (
    <CookiesProvider>
      {/* <Analytics /> */}
      {children}
      <Consent />
    </CookiesProvider>
  );
}
