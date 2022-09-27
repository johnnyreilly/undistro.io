import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Translate, { translate } from "@docusaurus/Translate";
import { ContactForm } from "../components/HubspotForm";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact | UnDistro</title>
        <meta
          name="description"
          content={translate({
            id: "description",
            message:
              "Visualize, create, and manage one or more clusters in a way that is both standardized and centralized. Get early access to this product.",
          })}
        />
      </Head>
      <main className="bg-dark min-h-screen">
        <div className="contact">
          <div className="section">
            <h1 className="text-white text-4xl lg:text-5xl font-bold font-sf-pro">
              <Translate id="contact.title" />
            </h1>
          </div>
        </div>
        <div className="section text-white text-lg text-inter text-opacity-70 py-16 flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:space-x-16 ">
          <div className="space-y-4 lg:w-1/2">
            <p className="text-primary text-opacity-100">
              <Translate id="contact.line1" />
            </p>
            <p>
              <Translate id="contact.line2" />
            </p>
            <p>
              <Translate id="contact.line3" />
            </p>
            <p>
              <Translate id="contact.line4" />
            </p>
          </div>
          <ContactForm />
        </div>
      </main>
    </Layout>
  );
}
