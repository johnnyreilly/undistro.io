import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Translate, { translate } from "@docusaurus/Translate";

export default function Contact() {
  return (
    <Layout>
      <Head>
        <meta
          name="description"
          content={translate({
            id: "description",
            message:
              "Visualize, create, and manage one or more clusters in a way that is both standardized and centralized. Get early access to this product.",
          })}
        />
      </Head>
      <main className="bg-dark"></main>
    </Layout>
  );
}
