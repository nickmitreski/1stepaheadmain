"use client";

import React, { useCallback, useEffect } from "react";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import { cn } from "@/lib/utils";

type Item = { quote: string; author: string };

const ITEMS: Item[] = [
  {
    quote:
      "This was the first time I actually understood how money works. It made me feel like I could handle the future.",
    author: "Year 12 Student",
  },
  {
    quote:
      "I loved how it wasn’t boring finance stuff. It made sense and helped me see how I think about money.",
    author: "Youth program participant",
  },
  {
    quote:
      "Clear, practical and engaging. I left with tools I can use right away.",
    author: "TAFE participant",
  },
  {
    quote:
      "Our students connected with the psychology of money – it changed the conversation.",
    author: "School wellbeing lead",
  },
];

const OPTIONS: EmblaOptionsType = { align: "start", loop: true, skipSnaps: false };

export default function TestimonialsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    const id = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, 4500);
    return () => clearInterval(id);
  }, [emblaApi]);

  useEffect(() => {
    const stop = autoplay();
    return () => {
      if (stop) stop();
    };
  }, [autoplay]);

  return (
    <section className="py-24 md:py-32 bg-[#69dfa6]">
      <div className="container">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl text-black text-center">
          What People Are Saying
        </h2>
        <div className="mt-10 overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {ITEMS.map((item, idx) => (
              <div key={idx} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                <div className={cn("rounded-2xl border bg-background p-6 h-full")}> 
                  <p className="text-lg text-foreground">“{item.quote}”</p>
                  <p className="mt-4 text-sm text-muted-foreground">— {item.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


