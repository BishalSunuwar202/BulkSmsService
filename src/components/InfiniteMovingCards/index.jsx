"use client";

import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={twMerge(
        "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={twMerge(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, index) => (
          // <li
          //   className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
          //   style={{
          //     background:
          //       "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
          //   }}
          //   key={index}
          // >
          //   <blockquote>
          //     <div
          //       aria-hidden="true"
          //       className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
          //     ></div>
          //     <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
          //       <img src={item.url} alt="" />
          //     </span>
          //   </blockquote>
          // </li>
          <img className="h-32 md:h-44  rounded-md" key={index} src={item.url} alt="" />
        ))}
      </ul>
    </div>
  );
};

InfiniteMovingCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  direction: PropTypes.oneOf(["left", "right"]),
  speed: PropTypes.oneOf(["fast", "normal", "slow"]),
  pauseOnHover: PropTypes.bool,
  className: PropTypes.string,
};
