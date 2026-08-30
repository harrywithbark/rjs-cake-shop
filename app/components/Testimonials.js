import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Alena Nicol",
    text: "Amazing cake. I ordered the day before and they were so accommodating, and the flavour and design were exactly what I asked for.",
  },
  {
    id: 2,
    name: "Jessica Bonja",
    text: "Every customized cake is beautifully made and very tasty, delivered fresh and on time.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-cream py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal>
          <SectionHeading kicker="From our customers" title="Kind words" />
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 sm:gap-10 md:grid-cols-2 md:gap-16">
          {testimonials.map((review, i) => (
            <Reveal key={review.id} delay={i * 80}>
              <blockquote>
                <p className="font-display text-xl italic leading-snug text-navy sm:text-2xl">
                  {review.text}
                </p>
                <footer className="mt-6 font-body text-xs uppercase tracking-[0.22em] text-ink/50">
                  {review.name} &middot; Google
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
