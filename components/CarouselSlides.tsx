"use client";

import * as React from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { ExpandableCard } from "@/components/ui/expandable-card";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";

const SCROLL_GAP_PX = 24; // gap-6

type ProjectEntry = {
  title: string;
  tagline: string;
  src: string;
  button: string;
  button2?: string;
  link: string;
  link2?: string;
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
  blurb: string;
};

type ProjectLinksProps = {
  link: string;
  link2?: string;
  button: string;
  button2?: string;
  icon?: React.ReactNode;
  icon2?: React.ReactNode;
};

function projectLinks({
  link,
  link2,
  button,
  button2,
  icon,
  icon2,
}: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
        onClick={(e) => e.stopPropagation()}
      >
        {button}
        {icon}
      </a>
      {link2 != null && button2 != null && (
        <a
          href={link2}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-800"
          onClick={(e) => e.stopPropagation()}
        >
          {button2}
          {icon2}
        </a>
      )}
    </div>
  );
}

const slideData: ProjectEntry[] = [
  {
    title: "VERITAS-NLI",
    tagline: "Research · Natural language inference",
    button: "Go To Publication",
    button2: "Go To Artifact",
    src: "/assets/VERITASImage.png",
    icon: <HiOutlineAcademicCap className="inline h-4 w-4" />,
    icon2: <FaGithub className="inline h-4 w-4" />,
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0952197625002842?via%3Dihub",
    link2: "https://github.com/vbafnaa/VERITAS-NLI",
    blurb:
      "VERITAS-NLI explores verifiable natural language inference with a focus on rigorous evaluation and reproducible artifacts tied to the published work.",
  },
  {
    title: "Railway Buddy - Smart India Hackathon",
    tagline: "Hackathon · Mobility",
    button: "Go To Github",
    src: "/assets/RailwayBuddy.png",
    icon: <FaGithub className="inline h-4 w-4" />,
    link: "https://github.com/vbafnaa/SIH1348_LichtDenCode",
    blurb:
      "Smart India Hackathon project improving railway-related information and assistance for travelers and operators.",
  },
  {
    title: "Stock Watch - Bajaj HackRx",
    tagline: "FinTech · APIs",
    button: "Go To Github",
    src: "/assets/StockWatch2.png",
    icon: <FaGithub className="inline h-4 w-4" />,
    link: "https://github.com/vbafnaa/StockWatch-FastAPI",
    blurb:
      "Stock monitoring and insights built with FastAPI for the Bajaj HackRx track—focused on reliable data handling and a clear API surface.",
  },
  {
    title: "Authentica",
    tagline: "Security · LOC 5.0",
    button: "Go To Github",
    src: "/assets/Authentica.jpeg",
    icon: <FaGithub className="inline h-4 w-4" />,
    link: "https://github.com/vbafnaa/LichtDenCode_LOC5.0",
    blurb:
      "Authentication-focused build for LichtDenCode LOC 5.0—exploring secure flows and practical deployment patterns.",
  },
  {
    title: "Clinical Sage - Techgium",
    tagline: "HealthTech · Techgium",
    button: "Go To Github",
    src: "/assets/ClinicalSage.jpeg",
    icon: <FaGithub className="inline h-4 w-4" />,
    link: "https://github.com/vbafnaa/ClinicalSage-Techgium",
    blurb:
      "Clinical decision support concepts developed for the Techgium program, emphasizing responsible use of data in healthcare scenarios.",
  },
  {
    title: "Curate Sage - Techgium",
    tagline: "Curation · Techgium",
    button: "Go To Github",
    src: "/assets/CurateSage.png",
    icon: <FaGithub className="inline h-4 w-4" />,
    link: "https://github.com/vbafnaa/CurateSage---Techgium",
    blurb:
      "Curation and knowledge workflows for Techgium—structuring information so teams can move from raw inputs to actionable summaries.",
  },
  {
    title: "Sonify - NASA Space Apps",
    tagline: "Space · Creative computing",
    button: "Go To Github",
    src: "/assets/milkywaygif.gif",
    icon: <FaGithub className="inline h-4 w-4" />,
    link: "https://github.com/vbafnaa/NasaSpaceApps2023",
    blurb:
      "NASA Space Apps challenge project turning astronomical and mission data into an engaging, sonified experience for broader audiences.",
  },
];

export function CarouselSlides() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollByCards = React.useCallback((direction: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = (first?.offsetWidth ?? 320) + SCROLL_GAP_PX;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  }, []);

  return (
    <section id="projects">
      <div className="relative flex flex-col w-full h-full py-20 px-4 sm:px-6">
        <h1 className="m-10 text-3xl text-center font-bold md:text-5xl mb-4 text-black dark:text-white max-w-4xl mx-auto">
          Projects and Research
        </h1>

        <div className="mx-auto flex w-full max-w-7xl items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 transition hover:bg-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:bg-neutral-800 dark:hover:bg-neutral-700 md:flex"
            aria-label="Scroll projects left"
            onClick={() => scrollByCards(-1)}
          >
            <IconArrowNarrowRight
              className="rotate-180 text-neutral-600 dark:text-neutral-200"
              aria-hidden
            />
          </button>

          <div
            ref={scrollRef}
            className="min-w-0 flex-1 scroll-px-4 snap-x snap-mandatory overflow-x-auto overflow-y-visible pb-4 pt-2 [-ms-overflow-style:none] [scrollbar-gutter:stable] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-2"
          >
            <div className="flex w-max flex-row gap-6 px-1">
              {slideData.map((project) => (
                <div
                  key={project.title}
                  className="w-[min(100vw-2rem,20rem)] shrink-0 snap-center"
                >
                  <ExpandableCard
                    title={project.title}
                    src={project.src}
                    description={project.tagline}
                    classNameExpanded="[&_h4]:text-black dark:[&_h4]:text-white [&_h4]:font-medium"
                    className="w-full"
                  >
                    <p>{project.blurb}</p>
                    {projectLinks({
                      link: project.link,
                      link2: project.link2,
                      button: project.button,
                      button2: project.button2,
                      icon: project.icon,
                      icon2: project.icon2,
                    })}
                  </ExpandableCard>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full bg-neutral-200 transition hover:bg-neutral-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 dark:bg-neutral-800 dark:hover:bg-neutral-700 md:flex"
            aria-label="Scroll projects right"
            onClick={() => scrollByCards(1)}
          >
            <IconArrowNarrowRight
              className="text-neutral-600 dark:text-neutral-200"
              aria-hidden
            />
          </button>
        </div>
      </div>
    </section>
  );
}
