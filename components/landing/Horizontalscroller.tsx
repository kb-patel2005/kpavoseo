"use client";

import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { useEffect, useRef } from "react";

import { AmbientGlow } from "./ambient-glow";
import {
  Eyebrow,
  SectionContainer,
  SectionHeading,
} from "./shared";

const cities = [
  {
    title: "Ahmedabad",
    count: "75+ Active Drivers",
    imageSrc: "/images/Places/Ahmedabad1.png",
    imageAlt: "Ahmedabad city bridge at sunset",
  },
  {
    title: "Ahmedabad",
    count: "75+ Active Drivers",
    imageSrc: "/images/Places/Ahmedabad2.png",
    imageAlt: "Ahmedabad city bridge at sunset",
  },
  {
    title: "Gandhinagar",
    count: "25+ Active Drivers",
    imageSrc: "/images/Places/Gandhinagar2.jpg",
    imageAlt: "Gandhinagar temple complex",
  },
  {
    title: "Gandhinagar",
    count: "25+ Active Drivers",
    imageSrc: "/images/Places/Gandhinagar1.jpg",
    imageAlt: "Gandhinagar temple complex",
  },
  {
    title: "Surat",
    count: "27+ Active Drivers",
    imageSrc: "/images/Places/Surat.jpg",
    imageAlt: "Surat waterfront lake aerial view",
  },
   {
    title: "Surat",
    count: "27+ Active Drivers",
    imageSrc: "/images/Places/Surat(1).jpg",
    imageAlt: "Surat waterfront lake aerial view",
  },
  {
    title: "Rajkot",
    count: "31+ Active Drivers",
    imageSrc: "/images/Places/Rajkot.jpg",
    imageAlt: "Rajkot heritage building",
  },
  {
    title: "Vadodara",
    count: "24+ Active Drivers",
    imageSrc: "/images/Places/Vadodara.png",
    imageAlt: "Vadodara palace architecture",
  },
  {
    title: "Vadodara",
    count: "24+ Active Drivers",
    imageSrc: "/images/Places/Vadodara(1).png",
    imageAlt: "Vadodara palace architecture",
  },
];

function CityCard({
  city,
}: {
  city: (typeof cities)[number];
}) {
  return (
    <article
      className="
        city-card
        motion-card-hover
        relative
        h-[320px]
        w-[320px]
        shrink-0
        overflow-hidden
        rounded-[16px]
        bg-[#111]
        max-md:shadow-[0_12px_30px_rgba(31,27,24,0.16)] md:min-h-[186px] md:px-6 md:py-6 md:shadow-[0_10px_24px_rgba(31,27,24,0.06)] backdrop-blur-2xl"
    >
      <Image
        alt={city.imageAlt}
        className="motion-card-media object-cover"
        fill
        sizes="350px"
        src={city.imageSrc}
      />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(180deg,rgba(5,8,18,0.01)_0%,rgba(5,8,18,0.08)_44%,rgba(5,8,18,0.72)_100%)]
        "
      />

      <div className="absolute inset-x-5 bottom-4 text-white">
        <h3
          className="
            mt-1
            text-[33px]
            font-extrabold
            leading-none
            tracking-[-0.04em]
          "
        >
          {city.title}
        </h3>

        <p className="mt-1.5 text-[13px] font-medium text-white/86">
          • {city.count}
        </p>
      </div>
    </article>
  );
}

function CityAutoSlideTrack() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const positionRef = useRef(0);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const lastCard =
      track.lastElementChild as HTMLElement | null;

    if (!lastCard) return;

    let animationFrame: number;

    const speed = 0.5;

    const animate = () => {
      positionRef.current -= speed;

      track.style.transform = `translate3d(
        ${positionRef.current}px,
        0,
        0
      )`;

      const lastRect =
        lastCard.getBoundingClientRect();

      const viewportRect =
        viewport.getBoundingClientRect();

      let iwidth = window.innerWidth;

      if (lastRect.right <= iwidth - 30) {
        positionRef.current = 50;

        track.style.transform =
          "translate3d(0, 0, 0)";
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    animationFrame =
      requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={viewportRef}
      className="w-full sm:mt-16 mt-10 bg-transparent"
    >
      <div
        ref={trackRef}
        className="flex w-max gap-5 pt-3.5 pb-10"
      >
        {cities.map((city, index) => (
          <CityCard
            key={`${city.title}-${index}`}
            city={city}
          />
        ))}
      </div>
    </div>
  );
}

export function CitiesSections() {
  return (
    <section
      className="
        relative
        overflow-hidden
        pt-8
        bg-tranparent
      "
    >
      <AmbientGlow
        className="
          left-[-252px]
          top-1/2
          -translate-y-1/2
        "
        style={{
          width: "800px",
          height: "280px",
        }}
        tone="orange"
      />

      <SectionContainer>
        <div className="landing-section-body bg-transparent h-full">

          {/* Eyebrow */}
          <div className="flex justify-center">
            <Eyebrow
              className="px-4 py-2 text-[10px]"
              icon={
                <BadgeCheck
                  className="h-[15px] w-[15px]"
                  strokeWidth={2}
                />
              }
            >
              Cities We Serve
            </Eyebrow>
          </div>

          {/* Heading */}
          <SectionHeading
            accent="India."
            className="mt-4 max-w-[820px]"
            description="Connecting India's top cities with trusted rides and seamless travel experiences."
            title="Operating in the heart of India."
          />

          {/* Auto Slider */}
          <div
            className="
              full-bleed-strip
              city-slider-strip
              -mt-4
              md:-mt-6
            "
          >
            <div
              className="
                auto-slide-showcase
                city-slide-showcase
                w-full
                p-0
              "
            >
              <CityAutoSlideTrack />
            </div>
          </div>

        </div>
      </SectionContainer>
    </section>
  );
}