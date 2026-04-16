"use client";

import { ZoomParallax } from "@/components/ui/zoom-parallax";
import type { ZoomParallaxImage } from "@/components/ui/zoom-parallax";

const thankYouImages: ZoomParallaxImage[] = [
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Modern architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "City at sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1557683316-973673baf926?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Abstract gradient",
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=800&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Minimal shapes",
  },
  {
    src: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Ocean",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1280&h=720&fit=crop&crop=entropy&auto=format&q=80",
    alt: "Forest light",
  },
];

export function ThankYou() {
  return (
    <section
      id="thank-you"
      className="scroll-mt-24 w-full bg-slate-50 dark:bg-slate-900"
      aria-labelledby="thank-you-heading"
    >
      <div className="mx-auto max-w-7xl px-4 pb-10 pt-16 text-center sm:px-6 md:px-8 lg:px-10">
        <h2
          id="thank-you-heading"
          className="text-balance text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl dark:text-slate-100"
        >
          Thank you
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-slate-600 md:text-lg dark:text-slate-400">
          Thanks for scrolling through my portfolio—your time here is genuinely
          appreciated.
        </p>
      </div>
      <ZoomParallax images={thankYouImages} />
    </section>
  );
}
