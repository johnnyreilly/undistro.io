import React from "react";

const TimelineCard = () => {
  return (
    <div className="timeline-card">
      <div className="group bg-[#0F181F] hover:bg-[#121D27] duration-200 px-10 py-8 text-white rounded-2xl">
        <span className="font-sf-pro text-2xl font-bold group-hover:text-primary duration-200">Title</span>
        <p className="font-inter opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
          reiciendis deserunt doloribus consequatur, laudantium odio dolorum
          laboriosam.
        </p>
      </div>
    </div>
  );
};

export const Timeline = () => {
  return (
    <section id="timeline">
      <div className="wrapper relative">
        <TimelineCard />
        <TimelineCard />
        <TimelineCard />
        <TimelineCard />
        <TimelineCard />
        <TimelineCard />
      </div>
    </section>
  );
};
