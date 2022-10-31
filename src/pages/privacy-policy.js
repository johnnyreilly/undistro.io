import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Translate, { translate } from "@docusaurus/Translate";

export default function Privacy() {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy</title>
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
            <Translate id="privacy.title" />
            </h1>
          </div>
        </div>
        <div className="section text-white text-lg text-inter text-opacity-70 py-16 flex flex-col space-y-8">
          <p className="text-2xl font-bold uppercase pt-8 text-left">
            <Translate id="privacy.subTitle" />
          </p>
          <p>
          <Translate id="privacy.description" />
          </p>
          <div className="overflow-x-auto relative">
            <table className="w-full text-left my-16 text-primary-dark-400">
              <thead className="text-gray-700 uppercase">
                <tr>
                  <th scope="col" className="py-3 px-2 md:px-6">
                  <Translate id="privacy.table.C1L1" />
                  </th>
                  <th scope="col" className="py-3 px-2 md:px-6">
                  <Translate id="privacy.table.C2L1" />
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-primary-dark border-opacity-10">
                  <td className="py-4 px-2 md:px-6"><Translate id="privacy.table.C1L2" /></td>
                  <td className="py-4 px-2 md:px-6"><Translate id="privacy.table.C2L2" /></td>
                </tr>
                <tr className="border-b border-primary-dark border-opacity-10">
                  <td className="py-4 px-2 md:px-6"><Translate id="privacy.table.C1L3" /></td>
                  <td className="py-4 px-2 md:px-6"><Translate id="privacy.table.C2L3" /></td>
                </tr>
                <tr className="border-b border-primary-dark border-opacity-10">
                  <td className="py-4 px-2 md:px-6"><Translate id="privacy.table.C1L4" /></td>
                  <td className="py-4 px-2 md:px-6"><Translate id="privacy.table.C2L4" /></td>
                </tr>
                <tr className="">
                  <td className="py-4 px-2 md:px-6"><Translate id="privacy.table.C1L5" /></td>
                  <td className="py-4 px-2 md:px-6"><Translate id="privacy.table.C2L5" /></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <b>
              <Translate id="privacy.list.title.1" />
              </b>
            <Translate id="privacy.list.description.1" />
            </p>
           <p>
            <b>
              <Translate id="privacy.list.title.2" />
              </b>
            <Translate id="privacy.list.description.2" />
            </p>
            <p>
            <b>
              <Translate id="privacy.list.title.3" />
              </b>
            <Translate id="privacy.list.description.3" />
            </p>

            <p>
            <b>
              <Translate id="privacy.list.title.4" />
              </b>
            <Translate id="privacy.list.description.4" />
            </p>

            <p>
            <b>
              <Translate id="privacy.list.title.5" />
              </b>
            <Translate id="privacy.list.description.5" />
            </p>

            <p>
            <b>
              <Translate id="privacy.list.title.6" />
              </b>
            <Translate id="privacy.list.description.6" />
            </p>

             <p>
            <b>
              <Translate id="privacy.list.title.7" />
              </b>
            <Translate id="privacy.list.description.7" />
            </p>
            <p>
            <Translate id="privacy.list.description.8" /> 
            </p>
 
        </div>
      </main>
    </Layout>
  );
}