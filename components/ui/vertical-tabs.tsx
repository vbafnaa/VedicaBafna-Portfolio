"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useLayoutEffect,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import type { VolunteerExperience } from "@/data/volunteering";

const AUTO_PLAY_DURATION = 5000;

type VerticalTabsProps = {
  items: VolunteerExperience[];
  heading: string;
  kicker?: string;
  className?: string;
};

export function VerticalTabs({
  items,
  heading,
  kicker = "(VOLUNTEERING)",
  className,
}: VerticalTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imageAlignY, setImageAlignY] = useState(0);

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const imageAlignRef = useRef<HTMLDivElement>(null);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const alignFrameRef = useRef<number | null>(null);

  const queueSyncImageToActiveTab = useCallback(() => {
    if (typeof window === "undefined") return;
    if (alignFrameRef.current != null) return;
    alignFrameRef.current = window.requestAnimationFrame(() => {
      alignFrameRef.current = null;

      if (!window.matchMedia("(min-width: 1024px)").matches) {
        setImageAlignY(0);
        return;
      }

      const tab = tabRefs.current[activeIndex];
      const imgEl = imageAlignRef.current;
      if (!tab || !imgEl) return;

      const tabRect = tab.getBoundingClientRect();
      const imgRect = imgEl.getBoundingClientRect();
      const containerRect = imgEl.offsetParent?.getBoundingClientRect();
      if (!containerRect) return;

      const targetY =
        tabRect.top +
        tabRect.height / 2 -
        containerRect.top -
        imgRect.height / 2;

      setImageAlignY(targetY);

    });
  }, [activeIndex]);

  useLayoutEffect(() => {
    queueSyncImageToActiveTab();
  }, [queueSyncImageToActiveTab]);

  useEffect(() => {
    const onScrollOrResize = () => queueSyncImageToActiveTab();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    const list = tabsListRef.current;
    const ro =
      typeof ResizeObserver !== "undefined" && list
        ? new ResizeObserver(() => queueSyncImageToActiveTab())
        : null;
    if (ro && list) ro.observe(list);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      ro?.disconnect();
      if (alignFrameRef.current != null) {
        cancelAnimationFrame(alignFrameRef.current);
        alignFrameRef.current = null;
      }
    };
  }, [queueSyncImageToActiveTab]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return;
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused || items.length === 0) return;

    const interval = setInterval(() => {
      handleNext();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext, items.length]);

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      zIndex: 0,
      y: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const active = items[activeIndex];

  if (items.length === 0) return null;

  return (
    <section
      className={cn(
        "w-full bg-slate-50 py-10 md:py-16 lg:py-24 dark:bg-slate-900/80",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:gap-10 xl:gap-14">
          {/* Mobile / small screens: title above image; hidden on lg (duplicate in left column) */}
          <div className="order-1 w-full shrink-0 lg:hidden">
            <div className="space-y-1">
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100">
                {heading}
              </h2>
              <span className="ml-0.5 block text-[10px] font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {kicker}
              </span>
            </div>
          </div>

          <div className="order-3 flex min-h-0 w-full min-w-0 flex-col justify-start lg:order-1 lg:col-start-1 lg:row-start-1 lg:pt-2">
            <div className="mb-8 hidden space-y-1 md:mb-12 lg:block">
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl dark:text-slate-100">
                {heading}
              </h2>
              <span className="ml-0.5 block text-[10px] font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                {kicker}
              </span>
            </div>

            <div ref={tabsListRef} className="flex flex-col space-y-0">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                return (
                  <button
                    key={item.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    type="button"
                    onClick={() => handleTabClick(index)}
                    className={cn(
                      "group relative flex items-start gap-3 border-t border-slate-200 py-5 text-left transition-all duration-500 first:border-0 md:gap-4 md:py-7 dark:border-slate-700/80",
                      isActive
                        ? "text-slate-900 dark:text-slate-100"
                        : "text-slate-500 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-200",
                    )}
                  >
                    <div className="absolute bottom-0 left-[-12px] top-0 w-0.5 bg-slate-200 md:left-[-18px] dark:bg-slate-700">
                      {isActive && (
                        <motion.div
                          key={`progress-${index}-${isPaused}`}
                          className="absolute left-0 top-0 h-full w-full origin-top bg-indigo-600 dark:bg-indigo-400"
                          initial={{ height: "0%" }}
                          animate={
                            isPaused ? { height: "0%" } : { height: "100%" }
                          }
                          transition={{
                            duration: AUTO_PLAY_DURATION / 1000,
                            ease: "linear",
                          }}
                        />
                      )}
                    </div>

                    <span className="mt-1 shrink-0 tabular-nums text-[9px] font-medium opacity-50 md:text-[10px]">
                      /{item.id}
                    </span>

                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <span
                        className={cn(
                          "text-lg font-medium leading-snug tracking-tight transition-colors duration-500 md:text-xl lg:text-2xl",
                          isActive ? "text-slate-900 dark:text-slate-100" : "",
                        )}
                      >
                        {item.title}
                      </span>
                      <span
                        className={cn(
                          "text-xs font-medium md:text-sm",
                          isActive
                            ? "text-indigo-700 dark:text-indigo-300"
                            : "text-slate-400 dark:text-slate-500",
                        )}
                      >
                        {item.date}
                      </span>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.23, 1, 0.32, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <ul className="mt-2 max-w-prose list-disc space-y-2 pb-1 pl-4 text-sm font-normal leading-relaxed text-slate-600 md:text-base dark:text-slate-400">
                              {item.bullets.map((b, bulletIndex) => (
                                <li key={`${item.id}-${bulletIndex}`}>{b}</li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="order-2 flex w-full min-w-0 flex-col lg:sticky lg:top-24 lg:order-2 lg:col-start-2 lg:row-start-1 lg:z-10 lg:self-start">
            <motion.div
              ref={imageAlignRef}
              animate={{ y: imageAlignY }}
              transition={{ type: "tween", duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full will-change-transform"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-200/30 md:aspect-[4/3] md:rounded-3xl lg:aspect-[16/11] dark:border-slate-700/60 dark:bg-slate-800/40">
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="popLayout"
                >
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      y: { type: "spring", stiffness: 260, damping: 32 },
                      opacity: { duration: 0.4 },
                    }}
                    className="absolute inset-0 h-full w-full cursor-pointer"
                    onClick={handleNext}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element -- remote Unsplash URLs; swap for next/image with domains if configured */}
                    <img
                      src={active.image}
                      alt={active.imageAlt}
                      className="m-0 block h-full w-full object-cover p-0 transition-transform duration-700 hover:scale-105"
                    />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-70" />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute bottom-4 right-4 z-20 flex gap-2 md:bottom-6 md:right-6 md:gap-3">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50/90 text-slate-800 backdrop-blur-md transition-all hover:bg-slate-100 active:scale-95 dark:border-slate-600/80 dark:bg-slate-900/85 dark:text-slate-100 dark:hover:bg-slate-800 md:h-12 md:w-12"
                    aria-label="Previous volunteer story"
                  >
                    <IconChevronLeft className="h-5 w-5" stroke={1.75} />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-slate-50/90 text-slate-800 backdrop-blur-md transition-all hover:bg-slate-100 active:scale-95 dark:border-slate-600/80 dark:bg-slate-900/85 dark:text-slate-100 dark:hover:bg-slate-800 md:h-12 md:w-12"
                    aria-label="Next volunteer story"
                  >
                    <IconChevronRight className="h-5 w-5" stroke={1.75} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
