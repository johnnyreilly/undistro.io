import Translate from "@docusaurus/Translate";
import React from "react";

const cards = [
  {
    title: <Translate id="timeline.items.0.title" />,
    description: <Translate id="timeline.items.0.description" />,
  },
  {
    title: <Translate id="timeline.items.1.title" />,
    description: <Translate id="timeline.items.1.description" />,
  },
  {
    title: <Translate id="timeline.items.2.title" />,
    description: <Translate id="timeline.items.2.description" />,
  },
  {
    title: <Translate id="timeline.items.3.title" />,
    description: <Translate id="timeline.items.3.description" />,
  },
  {
    title: <Translate id="timeline.items.4.title" />,
    description: <Translate id="timeline.items.4.description" />,
  },
  {
    title: <Translate id="timeline.items.5.title" />,
    description: <Translate id="timeline.items.5.description" />,
  },
  {
    title: <Translate id="timeline.items.6.title" />,
    description: <Translate id="timeline.items.6.description" />,
  },
  {
    title: <Translate id="timeline.items.7.title" />,
    description: <Translate id="timeline.items.7.description" />,
  },
  {
    title: <Translate id="timeline.items.8.title" />,
    description: <Translate id="timeline.items.8.description" />,
  },
  {
    title: <Translate id="timeline.items.9.title" />,
    description: <Translate id="timeline.items.9.description" />,
  },
];

const TimelineCard = ({ title, description }) => {
  return (
    <div className="timeline-card">
      <div className="group bg-[#0F181F] hover:bg-[#121D27] duration-200 px-10 py-8 text-white rounded-2xl">
        <span className="font-sf-pro text-2xl font-bold group-hover:text-primary duration-200">
          {title}
        </span>
        <p className="font-inter opacity-70">{description}</p>
      </div>
    </div>
  );
};

const HeadCard = ({ title, description }) => {
  return (
    <div className="head-card relative overflow-visible first:mb-12 lg:first:mb-0">
      <div className="border border-primary duration-200 px-10 py-8 text-white rounded-2xl lg:w-1/2 mx-auto">
        <span className="font-sf-pro text-2xl font-bold text-primary duration-200">
          {title}
        </span>
        <p className="font-inter opacity-70 whitespace-pre-line">{description}</p>
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
