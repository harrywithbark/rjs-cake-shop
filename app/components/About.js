import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="bg-cream py-16 md:py-24 lg:py-28">
      <div className="mx-auto grid max-w-content items-center gap-8 px-4 sm:gap-14 sm:px-6 md:grid-cols-2">
        <Reveal className="order-2 md:order-1">
          <SectionHeading
            kicker="Our story"
            title="Surrey's custom cake artist"
            align="left"
          />
          <p className="mt-6 font-body text-[15px] leading-relaxed text-ink/75 sm:mt-8 sm:text-base">
            Rj&rsquo;s Cake Shop is a home-grown Surrey bakery built around a
            single idea: buttercream deserves to be treated like an art
            form. Every cake is piped by hand in small batches, drawing on
            classic piping techniques &mdash; ruffled borders, hand-formed
            sugar florals, and soft palettes &mdash; so each order feels
            one-of-a-kind.
          </p>
          <p className="mt-4 font-body text-[15px] leading-relaxed text-ink/75 sm:text-base">
            We are a FoodSafe certified home kitchen in Surrey.
            We work with you on flavour, size, and design so the cake
            matches the occasion, not the other way around.
          </p>
          <p className="mt-6 font-body text-[10px] uppercase tracking-[0.16em] text-ink/55 sm:mt-8 sm:text-xs sm:tracking-[0.22em]">
            FoodSafe certified &middot; Made to order &middot; Surrey, BC
          </p>
        </Reveal>

        <Reveal delay={150} className="order-1 md:order-2">
          <div className="relative aspect-[5/6] overflow-hidden sm:aspect-[4/5]">
            <Image
              src="/cakes/vintage-assortment.jpg"
              alt="Buttercream cakes from Rj's Cake Shop"
              fill
              sizes="(min-width: 768px) 46vw, 92vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
