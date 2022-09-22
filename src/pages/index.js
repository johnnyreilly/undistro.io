import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HubspotForm from "../components/HubspotForm";
import Translate, { translate } from "@docusaurus/Translate";
import { FaArrowRight } from "react-icons/fa";
import { ArrowRight } from "phosphor-react";
import { SlideShow } from "../components/Slideshow/Slideshow";

export default function Home() {
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
      <main className="bg-dark">
        {/* Hero */}
        <div className="bg-[url(/img/hero.png)] bg-top bg-cover bg-no-repeat h-screen">
          <div className="flex flex-col w-full h-full items-center justify-center space-y-6 py-24 section whitespace-pre-line">
            <h1 className="text-white text-5xl lg:text-6xl font-bold text-center xl:w-2/3 -mt-36">
              <Translate id="heading">
                {"Know your Kubernetes \nclusters inside out"}
              </Translate>
            </h1>
            <h2 className="text-white text-xl font-light md:w-2/3 text-center">
              <Translate id="subtitle">
                {
                  "Undistro is an initiative to create products that will help you manage and know \nyour Kubernetes clusters inside out."
                }
              </Translate>
            </h2>
          </div>
        </div>
        {/* About Section */}
        <div className="section text-white">
          <div className="bg-[#101A23] rounded-3xl px-40 py-8 -translate-y-[50%] flex items-center space-x-16">
            <img
              src="/img/computer.svg"
              className="h-60 2xl:h-max"
              alt="undistro"
            />
            <div className="space-y-4">
              <p className="font-bold text-3xl 2xl:text-4xl font-sf-pro">
                About Undistro
              </p>
              <p className="font-medium 2xl:text-xl font-inter leading-5 2xl:leading-7">
                All Undistro initiatives are premised on a{" "}
                <span className="text-primary">simple</span>,{" "}
                <span className="text-primary">standardized</span>, and{" "}
                <span className="text-primary">centralized</span> way to manage
                your Kubernetes environment.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col py-12 text-4xl space-y-4 font-sf-pro w-1/2">
              <p className="font-bold">
                Zora is the first product created by Undistro
              </p>
              <p className="text-primary font-medium">We are in alpha stage!</p>
              <p className="font-inter text-xl text-white opacity-80">
                Zora periodically scans all of your Kubernetes clusters, looking
                for potential issues or vulnerabilities with deployed resources
                and configurations, helping you ensure compliance with best
                practices and preventing security, allocation, and
                misconfiguration problems.
              </p>
            </div>
            <div className="flex flex-1 ml-32 flex-col items-center justify-center space-y-12">
              <img src="/img/zora.svg" />
              <a
                href="#"
                className="bg-[#0F181F] py-4 px-6 rounded-xl space-x-6 font-semibold font-inter"
              >
                <span className="bg-primary text-black py-2 px-6 rounded-lg">
                  new 0.0.1
                </span>
                <span className="">Alpha Release</span>
                <ArrowRight className="h-6 w-6 inline" />
              </a>
            </div>
          </div>
        </div>
        {/* Main Features */}
        <div className="features">
          <div className="section">
            <h2>Zora's main features</h2>
            <SlideShow />
          </div>
        </div>
      </main>
    </Layout>
  );
}
