import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HubspotForm from "../components/HubspotForm";
import styles from "./index.module.css";
import { Footer } from "../components/Footer";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container text--right">
        <h2 className={styles.headline}>
          CENTRALIZED AND STANDARDIZED
          <br />
          KUBERNETES OPERATIONS
        </h2>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout description="UnDistro is a vanilla, non-opinionated, and open source Kubernetes distribution">
      <main className="bg-dark">
        <div className="bg-[url(/img/background.jpg)] bg-top bg-contain bg-no-repeat">
          <div className="flex flex-col w-screen items-center justify-center space-y-24 py-24">
            <img
              className="h-10"
              src={useBaseUrl("/img/logo-light.svg")}
              alt="UnDistro"
            />
            <h1 className="text-primary text-4xl lg:text-5xl uppercase font-black text-center">
              Know your Kubernetes
              <br />
              clusters inside out
            </h1>
            <h2 className="text-primary text-2xl lg:text-3xl font-light md:w-1/2 lg:w-1/3 text-center">
              Manage, spin up and visualize in a standardized and centralized
              way, one or more clusters.
            </h2>
            <HubspotForm />
          </div>
        </div>
      </main>
    </Layout>
  );
}
