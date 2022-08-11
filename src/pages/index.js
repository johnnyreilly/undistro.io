import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HubspotForm from "../components/HubspotForm";
import Translate from '@docusaurus/Translate';
import {FaArrowRight} from "react-icons/fa";

export default function Home() {

  return (
    <Layout description="UnDistro is a vanilla, non-opinionated, and open source Kubernetes distribution">
      <main className="bg-dark">
        <div className="bg-[url(/img/background.jpg)] bg-top bg-cover bg-no-repeat min-h-screen">
          <div className="flex flex-col w-full h-fit items-center justify-center space-y-24 py-24 mx-auto max-w-container 2xl:max-w-7xl">
            <img
              className="h-10"
              src={useBaseUrl("/img/logo-light.svg")}
              alt="UnDistro"
            />
            <h1 className="text-primary text-4xl lg:text-5xl uppercase font-black text-center xl:w-2/3">
              <Translate id="heading">Know your Kubernetes clusters inside out</Translate>
            </h1>
            <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-light md:w-2/3 text-center">
              <Translate id="subtitle">
              Manage, spin up and visualize in a standardized and centralized
              way, one or more clusters.
              </Translate>
            </h2>
            <HubspotForm />
            </div>
        </div>
      </main>
    </Layout>
  );
}
