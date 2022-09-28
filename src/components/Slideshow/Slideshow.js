<<<<<<< HEAD
import React, { Fragment } from "react";
=======
import React from "react";
>>>>>>> f7dbf316 (New UnDistro Website (#48))
import { useState } from "react";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import Translate from "@docusaurus/Translate";
<<<<<<< HEAD
import { ArrowRight } from "phosphor-react";
=======
>>>>>>> f7dbf316 (New UnDistro Website (#48))

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const slides = [
  {
    title: <Translate id="zora.features.items.0.title" />,
    description: <Translate id="zora.features.items.0.description" />,
    src: "/img/cluster.webp",
  },
  {
    title: <Translate id="zora.features.items.1.title" />,
    description: <Translate id="zora.features.items.1.description" />,
    src: "/img/cluster.webp",
  },
  {
    title: <Translate id="zora.features.items.2.title" />,
    description: <Translate id="zora.features.items.2.description" />,
    src: "/img/cluster.webp",
  },
  {
    title: <Translate id="zora.features.items.3.title" />,
    description: <Translate id="zora.features.items.3.description" />,
    src: "/img/cluster.webp",
  },
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

function Pagination({ currentPage, setPage }) {
  return (
    <AnimateSharedLayout>
      <div className="dots">
        {slides.map((page, index) => (
          <Dot
            key={page.title}
<<<<<<< HEAD
            onClick={() => setPage([index, currentPage - index])}
=======
            onClick={() => setPage(index)}
>>>>>>> f7dbf316 (New UnDistro Website (#48))
            isSelected={index === currentPage}
          />
        ))}
      </div>
    </AnimateSharedLayout>
  );
}

function Dot({ isSelected, onClick }) {
  return (
    <div className="dot-container" onClick={onClick}>
      <div className="dot">
        {isSelected && (
          <motion.div className="dot highlight" layoutId="highlight" />
        )}
      </div>
    </div>
  );
}

export const SlideShow = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, slides.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
<<<<<<< HEAD
    <Fragment>
      <div className="relative mx-auto aspect-video w-full overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            className="max-w-full absolute rounded-2xl"
            key={page}
            src={slides[imageIndex].src}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
      </div>
      <div className="section py-36 sm:py-28 md:py-20 lg:py-0">
        <div className="slideshow__label ">
          <div className="prev" onClick={() => paginate(-1)}>
            <ArrowRight />
          </div>
          <div className="flex flex-col z-10 items-center text-center space-y-2">
            <p className="text-primary text-2xl md:text-3xl font-sf-pro font-bold">
              {slides[imageIndex].title}
            </p>
            <p className="text-white opacity-80 text-sm md:text-base font-inter max-w-2xl">
              {slides[imageIndex].description}
            </p>
            <Pagination currentPage={imageIndex} setPage={setPage} />
          </div>
          <div className="next" onClick={() => paginate(1)}>
            <ArrowRight />
          </div>
        </div>
      </div>
    </Fragment>
=======
    <div className="relative mx-auto aspect-video w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="max-w-full absolute rounded-2xl"
          key={page}
          src={slides[imageIndex].src}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-10 py-6">
        <div className="prev" onClick={() => paginate(-1)}>
          {"‣"}
        </div>
        <div className="flex flex-col z-10 items-center text-center space-y-2">
          <p className="text-primary text-3xl font-sf-pro font-bold">
            {slides[imageIndex].title}
          </p>
          <p className="text-white opacity-80 text-base font-inter max-w-2xl">
            {slides[imageIndex].description}
          </p>
          <Pagination currentPage={imageIndex} setPage={setPage} />
        </div>
        <div className="next" onClick={() => paginate(1)}>
          {"‣"}
        </div>
      </div>
    </div>
>>>>>>> f7dbf316 (New UnDistro Website (#48))
  );
};
