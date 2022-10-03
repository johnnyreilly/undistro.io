import Translate from "@docusaurus/Translate";
import {
  CheckCircle,
  Files,
  PencilSimpleLine,
  PenNib,
  ProjectorScreenChart,
  SlidersHorizontal,
  UserCircleGear,
  Wrench,
} from "phosphor-react";
import React from "react";
import { Zora } from "../Icons";

const cards = [
  {
    icon: <CheckCircle className="timeline-icon" weight="fill" />,
    title: <Translate id="timeline.items.0.title" />,
    description: (
      <p>
        <Translate id="timeline.items.0.description.1" />{" "}
        <a
          className="underline"
          href="https://zora.undistro.io/"
          target={"_blank"}
        >
          <Translate id="timeline.items.0.description.2" />
        </a>
      </p>
    ),
  },
  {
    icon: <Files className="timeline-icon" />,
    title: <Translate id="timeline.items.1.title" />,
    description: <Translate id="timeline.items.1.description" />,
  },
  {
    icon: <PencilSimpleLine className="timeline-icon" />,
    title: <Translate id="timeline.items.2.title" />,
    description: <Translate id="timeline.items.2.description" />,
  },
  {
    icon: <Zora />,
    title: <Translate id="timeline.items.3.title" />,
    description: (
      <p>
        <Translate id="timeline.items.3.description.1" />
        <a
          className="underline"
          href="https://github.com/derailed/popeye"
          target={"_blank"}
        >
          <Translate id="timeline.items.3.description.2" />
        </a>
        <Translate id="timeline.items.3.description.3" />
      </p>
    ),
  },
  {
    icon: <Wrench className="timeline-icon" />,
    title: <Translate id="timeline.items.4.title" />,
    description: <Translate id="timeline.items.4.description" />,
  },
  {
    icon: <PenNib className="timeline-icon" />,
    title: <Translate id="timeline.items.5.title" />,
    description: <Translate id="timeline.items.5.description" />,
  },
  {
    icon: <SlidersHorizontal className="timeline-icon" />,
    title: <Translate id="timeline.items.6.title" />,
    description: <Translate id="timeline.items.6.description" />,
  },
  {
    icon: <UserCircleGear className="timeline-icon" />,
    title: <Translate id="timeline.items.7.title" />,
    description: <Translate id="timeline.items.7.description" />,
  },
  {
    icon: <ProjectorScreenChart className="timeline-icon" />,
    title: <Translate id="timeline.items.8.title" />,
    description: <Translate id="timeline.items.8.description" />,
  },
  {
    title: <Translate id="timeline.items.9.title" />,
    description: <Translate id="timeline.items.9.description" />,
  },
];

const TimelineCard = ({ title, icon, description }) => {
  return (
    <div className="timeline-card transition">
      <div className="group bg-[#0F181F] hover:bg-[#121D27] duration-200 px-10 py-8 text-white rounded-2xl space-y-4">
        <div className="font-sf-pro text-2xl font-bold text-white duration-200 flex flex-col space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row items-start">
          {icon}
          <span className="inline my-auto group-hover:text-primary duration-200">
            {title}
          </span>
        </div>
        <p className="font-inter opacity-70">{description}</p>
      </div>
    </div>
  );
};

const HeadCard = ({ title, icon, description }) => {
  return (
    <div className="head-card relative overflow-visible first:mb-12 lg:first:mb-0">
      <div className="border border-primary duration-200 px-10 py-8 text-white rounded-2xl lg:w-1/2 mx-auto space-y-4">
        <div className="font-sf-pro text-2xl font-bold text-primary duration-200 space-x-2 flex flex-col space-y-2 lg:space-y-0 lg:space-x-2 lg:flex-row items-start">
          {icon}
          <span className="inline-block my-auto">{title}</span>
        </div>
        <p className="font-inter opacity-70 whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

export const Timeline = () => {
  return (
    <section id="timeline">
      <HeadCard {...cards[0]} />
      <div className="wrapper relative">
        {cards.slice(1, -1).map((card, i) => (
          <TimelineCard key={`timeline-card-${i}`} {...card} />
        ))}
      </div>
      <HeadCard {...cards[cards.length - 1]} />
    </section>
  );
};
