import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Submit Your Idea",
    body: "Call us or complete the quote form with your details. We respond within 24 hours to begin the conversation.",
  },
  {
    number: "02",
    title: "We Design Your Cake",
    body: "We collaborate closely to bring your vision to life and craft a centrepiece worthy of the occasion.",
  },
  {
    number: "03",
    title: "Confirm & Pay",
    body: "Once the design is finalized, we provide an invoice to confirm and secure your order on the calendar.",
  },
  {
    number: "04",
    title: "Pickup or Delivery",
    body: "Your cake is ready exactly as scheduled, with the option of delivery or studio pickup in Surrey.",
  },
];

export default function OrderSteps() {
  return (
    <section id="order" className="bg-cream py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <Reveal className="mb-12 md:mb-20">
          <SectionHeading kicker="The experience" title="How It Works" />
        </Reveal>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-8">
          <div
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-navy/10 md:block"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="relative z-10 flex flex-col items-center bg-cream px-2 text-center">
                <span className="mb-4 block font-display text-3xl italic text-gold sm:mb-6 sm:text-4xl">
                  {step.number}
                </span>
                <h3 className="mb-4 font-display text-xl text-navy">
                  {step.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-ink/60">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
