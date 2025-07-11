"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  useScroll,
  useTransform,
  motion,
  useInView,
} from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-transparent font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto pt-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-2xl font-bold md:text-5xl mb-4 text-black dark:text-white max-w-4xl">
          Experiences
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-lg">
          I&apos;ve been working for the past 3 years. Here&apos;s a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => {
          const itemRef = useRef(null);
          const isInView = useInView(itemRef, {
            margin: "-20% 0px -50% 0px",
            once: false,
          });

          return (
            <div
              key={index}
              className="flex justify-start pt-10 md:pt-10 md:gap-10"
              ref={itemRef}
            >
              {/* Left side (sticky circle and title on desktop) */}
              <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                <motion.div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-blue-200 flex items-center justify-center md:duration-500 duration-150"
                animate={{backgroundColor:isInView?"oklch(0.623 0.214 259.815)":"black"}}
                                  transition={{ duration: 0.5 }}
>
                
                  <motion.div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2 md:duration-500 duration-150"
                  animate={{backgroundColor:isInView?"oklch(0.882 0.059 254.128)":"black"}}
                                  transition={{ duration: 1 }} />
                

                </motion.div>
                <motion.h3
                  className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold transition-colors duration-300"
                  animate={{ color: isInView ? "#ffffff" : "#111111" ,
                    // backgroundColor: isInView? "#000000" : "",
                    fontSize:"50px",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {item.title}
                </motion.h3>
              </div>

              {/* Right side (mobile title + content) */}
              <div className="relative pl-20 pr-4 md:pl-4 w-full">
                <motion.h3
                  className="md:hidden block text-2xl mb-4 text-left font-bold transition-colors duration-300"
                  animate={{ color: isInView ? "#ffffff" : "#737373" }}
                  transition={{ duration: 0.5 }}
                >
                  {item.title}
                </motion.h3>
                {item.content}
              </div>
            </div>
          );
        })}

        {/* Animated vertical line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
