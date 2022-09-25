import React from "react";

const cards = [
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  ,
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    title: "Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
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
        <p className="font-inter opacity-70">{description}</p>
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
