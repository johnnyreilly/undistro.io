import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Translate, { translate } from "@docusaurus/Translate";

export default function Cookies() {
  return (
    <Layout>
      <Head>
        <title>Cookie Policy</title>
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
             <Translate id="cookies.title" />
            </h1>
          </div>
        </div>
        <div className="section text-white text-lg text-inter text-opacity-70 py-16 flex flex-col space-y-8">
        {translate({ id: "locale" }) === "pt" && ( 
          <p className="text-2xl font-bold uppercase pt-8"> 
            <Translate id="cookies.subTitle" />
          </p>
        )}
          <p>
            <Translate id="cookies.description.item.1" />
          </p>
          <p>
          <Translate id="cookies.description.item.2" />
          </p>
          <p>
          <Translate id="cookies.description.item.3" /> 
          </p>
          <p>
          <Translate id="cookies.description.item.4" /> 
          </p>
          <ul className="list-disc ml-12 space-y-4">
            <li>
              <b>
                <Translate id="cookies.list.title.1" /> 
              </b> 
                <Translate id="cookies.list.description.1" /> 
            </li>
            <li>
              <b>
                <Translate id="cookies.list.title.2" /> 
              </b> 
                <Translate id="cookies.list.description.2" /> 
            </li>
            <li>
              <b>
                <Translate id="cookies.list.title.3" /> 
              </b> 
                <Translate id="cookies.list.description.3" /> 
            </li>
            <li>
              <b>
                <Translate id="cookies.list.title.4" /> 
              </b> 
                <Translate id="cookies.list.description.4" /> 
            </li> 
          </ul>
          <p><Translate id="cookies.question" /></p>
          <p>
          <Translate id="cookies.question.description.1" />
          </p>
          <p>
          <Translate id="cookies.question.description.2" />
          </p>
        </div>
      </main>
    </Layout>
  );
}
