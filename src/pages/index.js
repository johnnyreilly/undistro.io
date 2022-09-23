import React from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Translate, { translate } from "@docusaurus/Translate";
import { ArrowRight } from "phosphor-react";
import { SlideShow } from "../components/Slideshow/Slideshow";
import { Chrono } from "react-chrono";
import { Timeline } from "../components/Timeline/Timeline";
import { HubspotForm } from "../components/HubspotForm";

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
        <div className="features py-8">
          <div className="section space-y-8">
            <h2 className="text-4xl font-sf-pro font-bold text-white text-center">
              Zora's main features
            </h2>
            <SlideShow />
          </div>
        </div>
        {/* Timeline */}
        <div className="section py-32 space-y-8">
          <h2 className="text-4xl font-sf-pro font-bold text-white text-center">
            Zora's main features
          </h2>
          <Timeline />
        </div>
        {/* Zora */}
        <div className="gradient">
          <div className="section py-32 space-y-8 text-center text-white">
            <h2 className="text-4xl font-sf-pro font-bold ">
              Ready to know your kubernetes inside out?
            </h2>
            <p className="font-inter opacity-80 max-w-3xl mx-auto">
              Join us and give our alpha version a go. Zora is creating the best
              tool to ensure that your Kubernetes clusters are following the
              best practices, and we’d love to have you in this journey!
            </p>
            <a
              href="#"
              className="inline-block bg-[#0F181F] py-4 px-6 rounded-xl space-x-6 font-semibold font-inter"
            >
              <span className="bg-primary text-black py-2 px-6 rounded-lg">
                new 0.0.1
              </span>
              <span className="">Alpha Release</span>
              <ArrowRight className="h-6 w-6 inline" />
            </a>
          </div>
        </div>
        {/* Community */}
        <div className="section py-32 space-y-8 text-center text-white">
          <h2 className="text-4xl font-sf-pro font-bold ">
            Join our community
          </h2>
          <div className="flex bg-[#0D151C] w-fit max-w-full mx-auto rounded-2xl overflow-clip">
            <div className="flex flex-col justify-center space-y-2 lg:space-y-6 bg-[#0D151C] hover:bg-[#0F181F] cursor-pointer duration-200 w-96 p-6 h-40 md:h-56">
              <img className="h-10 lg:h-16" src="/img/github.svg" />
              <p className="font-inter lg:text-xl">Visit Us</p>
            </div>
            <div className="border border-[#203446] flex-none my-6 lg:my-12" />
            <div className="flex flex-col justify-center space-y-2 lg:space-y-6 bg-[#0D151C] hover:bg-[#0F181F] cursor-pointer duration-200 w-96 p-6 h-40 md:h-56">
              <img className="h-10 lg:h-16" src="/img/slack.svg" />
              <p className="font-inter lg:text-xl">Join our group</p>
            </div>
          </div>
        </div>
        {/* Newsletter */}
        <div className="newsletter">
          <div>
            <p className="font-sf-pro font-medium text-3xl">Subscribe newsletter</p>
            <p className="font-inter">
              Stay up to date with the latest developments and releases by
              signing up to our newsletter.
            </p>
          </div>
          <div>
            <HubspotForm />
          </div>
        </div>
      </main>
    </Layout>
  );
}
