import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import ThemedImage from "@theme/ThemedImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import HubspotForm from "../components/HubspotForm";
import styles from "./index.module.css";

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
    <Layout description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className={styles.main}>
        <div className={clsx("container", styles.describe)}>
          <div className="row">
            <div className="col col--9">
              <h2 className={styles.head}>What is UnDistro?</h2>
              <p>
                <strong>UnDistro</strong> is a vanilla, non-opinionated, and
                open source Kubernetes distribution that is being created to
                help you to spin up, manage, and visualize in a standardized and
                centralized way, one or more production-ready clusters.
              </p>
              <p>
                Choosing to use <strong>UnDistro</strong> is not a matter of
                choosing <strong>UnDistro</strong> over EKS/AKS/GKE. Think of{" "}
                <strong>UnDistro</strong> as an additional “layer” to help you
                with day 2 K8s operations, no matter the infrastructure, hosted
                or self-hosted Kubernetes.
              </p>
              <h2 className={styles.head}>Why UnDistro?</h2>
              <strong>UnDistro</strong> solves problems found when you have
              multiple Kubernetes clusters to manage, probably in different
              infrastructures:
              <div className="row" style={{ padding: "0 80px 0 80px" }}>
                <div className={clsx("row", styles.topics)}>
                  <div className="col col--4">
                    <strong>
                      Multiple Kubernetes clusters add an extra challenge when
                      applying policies and ensuring that all environments are
                      conformant.
                    </strong>
                  </div>
                  <div className="col col--4">
                    <strong>
                      It can be difficult to identify information regarding
                      security, governance, and cluster health.
                    </strong>
                  </div>
                  <div className="col col--4">
                    <strong>
                      Different infrastructures or cloud providers have
                      different experiences for the deployment and management of
                      Kubernetes.
                    </strong>
                  </div>
                </div>
              </div>
            </div>
            <div className={clsx("col col--3", styles.hand)}>
              <ThemedImage
                alt="hand"
                sources={{
                  light: useBaseUrl("/img/hand.svg"),
                  dark: useBaseUrl("/img/handLight.svg"),
                }}
              />
            </div>
          </div>
        </div>
      </main>
      <div className={styles.formContainer}>
        <HubspotForm />
      </div>
    </Layout>
  );
}
