"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const photos = [
  {
    src: "/cakes/heart-30.jpg",
    alt: "Burgundy heart cake with hand-piped details",
    className: "col-span-2 aspect-[16/10] md:col-span-2 md:row-span-2 md:min-h-[420px]",
    wipe: "up",
    delay: 80,
    parallax: 0.08,
    max: 36,
  },
  {
    src: "/cakes/icon-heart-vintage.jpg",
    alt: "Heart cake among mixed celebration cakes",
    className: "aspect-[4/3]",
    wipe: "left",
    delay: 220,
    parallax: -0.05,
    max: 22,
  },
  {
    src: "/cakes/graduation-nursing.jpg",
    alt: "Nursing graduation celebration cake",
    className: "aspect-square",
    wipe: "right",
    delay: 340,
    parallax: 0.04,
    max: 20,
  },
  {
    src: "/cakes/vintage-fruit-sheet.jpg",
    alt: "Fruit sheet cake",
    className: "aspect-[4/3] md:col-span-2",
    wipe: "up",
    delay: 260,
    parallax: -0.03,
    max: 18,
  },
  {
    src: "/cakes/fathers-day-mocha.jpg",
    alt: "Mocha buttercream cakes with piped shell borders",
    className: "aspect-[3/4]",
    wipe: "right",
    delay: 420,
    parallax: 0.06,
    max: 28,
  },
  {
    src: "/cakes/event-strawberry.jpg",
    alt: "Cream celebration cake topped with strawberries",
    className: "aspect-[4/5]",
    wipe: "left",
    delay: 520,
    parallax: -0.045,
    max: 24,
  },
];

const clampOffset = (value, max) => Math.max(Math.min(value, max), -max);

export default function Gallery() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const layerRefs = useRef([]);
  const frameRefs = useRef([]);
  const [entered, setEntered] = useState(false);
  const [viewDriven, setViewDriven] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const heading = headingRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      setEntered(true);
      return;
    }

    const canUseViewTimeline =
      typeof CSS !== "undefined" && CSS.supports("animation-timeline", "view()");

    let observer;

    if (canUseViewTimeline) {
      setViewDriven(true);
    } else if (heading) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) return;
          const top = entry.boundingClientRect.top;
          if (top > window.innerHeight * 0.92) return;
          setEntered(true);
          observer.disconnect();
        },
        { threshold: 0.4, rootMargin: "0px 0px -12% 0px" }
      );

      const watch = () => observer.observe(heading);
      if (document.readyState === "complete") {
        requestAnimationFrame(watch);
      } else {
        window.addEventListener("load", watch, { once: true });
      }
    }

    let frame = 0;

    const paint = () => {
      frame = 0;
      if (window.innerWidth < 768) {
        layerRefs.current.forEach((layer) => {
          if (layer) layer.style.transform = "";
        });
        return;
      }

      const viewCenter = window.innerHeight / 2;

      frameRefs.current.forEach((node, i) => {
        const layer = layerRefs.current[i];
        const photo = photos[i];
        if (!node || !layer || !photo) return;

        const rect = node.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        layer.style.transform = `translate3d(0, ${clampOffset(
          (center - viewCenter) * photo.parallax,
          photo.max
        )}px, 0)`;
      });
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(paint);
    };

    paint();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className={`gallery-section bg-cream py-16 md:py-24 lg:py-28${
        viewDriven ? " gallery-view" : ""
      }${entered ? " is-in" : ""}`}
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <div ref={headingRef} className="mx-auto max-w-2xl text-center">
          <p className="gallery-kicker mb-4 font-body text-[11px] uppercase tracking-[0.28em] text-ink/50 sm:mb-6 sm:text-xs sm:tracking-[0.4em]">
            Selected work
          </p>
          <div
            className="gallery-rule mx-auto mb-4 h-px w-16 bg-gold sm:mb-6"
            aria-hidden="true"
          />
          <h2 className="gallery-title text-balance font-display text-[1.85rem] italic leading-tight tracking-wide text-navy sm:text-4xl md:text-5xl lg:text-6xl">
            A peek inside the cake box
          </h2>
          <p className="gallery-copy mx-auto mt-5 max-w-xl font-body text-[15px] leading-relaxed text-ink/70 sm:mt-6 sm:text-base">
            A few of the styles we love to make. Follow{" "}
            <a
              href="https://www.instagram.com/rjs.cakeshop/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center text-navy underline decoration-gold/40 underline-offset-4 hover:decoration-gold"
            >
              @rjs.cakeshop
            </a>{" "}
            for the full portfolio.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2 sm:mt-14 sm:gap-3 md:grid-cols-4 md:gap-4">
          {photos.map((photo, i) => (
            <div key={photo.src} className={photo.className}>
              <div
                ref={(node) => {
                  frameRefs.current[i] = node;
                }}
                className={`gallery-frame gallery-wipe-${photo.wipe} relative h-full w-full overflow-hidden`}
                style={{ "--gallery-delay": `${photo.delay}ms` }}
              >
                <div
                  ref={(node) => {
                    layerRefs.current[i] = node;
                  }}
                  className="absolute -top-[10%] left-0 h-[120%] w-full will-change-transform"
                >
                  <div className="gallery-img relative h-full w-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
