import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Translate, { translate } from "@docusaurus/Translate";
import { SlideShow } from "../components/Slideshow/Slideshow";
import { Timeline } from "../components/Timeline/Timeline";
import { HubspotForm } from "../components/HubspotForm";
import { ZoraButton } from "../components/Buttons";

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
        <div className="hero">
          <div className="flex flex-col w-full h-full items-center justify-center space-y-6 py-24 section md:whitespace-pre-line">
            <h1 className="text-white text-4xl lg:text-6xl font-bold font-montserrat text-center xl:w-2/3">
              <Translate id="heading">
                {"Know your Kubernetes \nclusters inside out"}
              </Translate>
            </h1>
            <h2 className="text-white text-2xl font-light md:w-2/3 text-center">
              <Translate id="description">
                UnDistro is a Getup.io backed initiative to create products that
                help you manage your Kubernetes environment in a simple and
                centralized way.
              </Translate>
            </h2>
          </div>
        </div>
        {/* About Section */}
        <div id="zora" className="section text-white">
          <div className="flex flex-col lg:flex-row py-16">
            <div className="flex flex-col text-3xl lg:text-4xl space-y-4 font-sf-pro lg:w-1/2">
              <p className="font-bold">
                <Translate id="zora.title" />
              </p>
              <p className="text-primary text-lg font-medium">
                <Translate id="zora.alpha" />
              </p>
              <p className="font-inter text-lg lg:text-xl text-white opacity-80">
                <Translate id="zora.description" />
              </p>
            </div>
            <div className="flex flex-1 xl:ml-32 my-16 flex-col items-center justify-center space-y-12">
              <img src="/img/zora.svg" />
              <ZoraButton />
            </div>
          </div>
        </div>
        {/* Main Features */}
        <div className="features py-8">
          <div className="section space-y-8">
            <h2 className="title text-white text-center">
              <Translate id="zora.features.title" />
            </h2>
            <SlideShow />
          </div>
        </div>
        {/* Timeline */}
        <div id="milestones" className="py-24 space-y-16 section md:max-w-full">
          <h2 className="title text-white text-center">
            <Translate id="timeline.title" />
          </h2>
          <div>
            <Timeline />
          </div>
        </div>
        {/* Zora */}
        <div className="gradient">
          <div className="section py-32 space-y-8 text-center text-white">
            <h2 className="title ">
              <Translate id="alpha.title" />
            </h2>
            <p className="font-inter opacity-80 max-w-3xl mx-auto">
              <Translate id="alpha.description" />
            </p>
            <ZoraButton />
          </div>
        </div>
        {/* Community */}
        <div
          id="community"
          className="section py-32 space-y-8 text-center text-white"
        >
          <h2 className="title ">
            <Translate id="community.title" />
          </h2>
          <div className="flex bg-[#0D151C] w-fit max-w-full mx-auto rounded-2xl overflow-clip">
            <div className="flex flex-col justify-center space-y-2 lg:space-y-6 bg-[#0D151C] hover:bg-[#0F181F] cursor-pointer duration-200 w-96 p-6 h-40 md:h-56">
              <img className="h-10 lg:h-16" src="/img/github.svg" />
              <p className="font-inter lg:text-xl">
                <Translate id="community.github" />
              </p>
            </div>
            <div className="border border-[#203446] flex-none my-6 lg:my-12" />
            <div className="flex flex-col justify-center space-y-2 lg:space-y-6 bg-[#0D151C] hover:bg-[#0F181F] cursor-pointer duration-200 w-96 p-6 h-40 md:h-56">
              <img className="h-10 lg:h-16" src="/img/slack.svg" />
              <p className="font-inter lg:text-xl">
                <Translate id="community.slack" />
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
