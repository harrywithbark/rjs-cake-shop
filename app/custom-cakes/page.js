import Image from "next/image";
import CustomCakeForm from "../components/CustomCakeForm";
import FAQ from "../components/FAQ";
import OrderSteps from "../components/OrderSteps";
import SectionHeading from "../components/SectionHeading";

export const metadata = {
  title: "Custom Cakes | Rj's Cake Shop",
  description:
    "Request a custom buttercream cake, made to order in Surrey, BC.",
};

const recent = [
  { src: "/cakes/heart-30.jpg", alt: "Burgundy heart cake with hand-piped details" },
  { src: "/cakes/graduation-nursing.jpg", alt: "Nursing graduation cake" },
  { src: "/cakes/sweet-16.jpg", alt: "Sweet sixteen Lambeth cakes" },
  { src: "/cakes/red-rosettes.jpg", alt: "Red rosette signature cake" },
];

export default function CustomCakesPage({ searchParams }) {
  const style = typeof searchParams?.style === "string" ? searchParams.style : "";

  return (
    <main className="bg-cream pt-[calc(7.5rem+env(safe-area-inset-top))] sm:pt-32">
      <section className="mx-auto max-w-content px-4 pb-12 sm:px-6 sm:pb-16">
        <SectionHeading kicker="Custom cakes" title="Made to order" as="h1" />
        <p className="mx-auto mt-5 max-w-xl text-center font-body text-base leading-relaxed text-ink/70 sm:mt-6 sm:text-lg">
          Every cake is custom &mdash; designed around your occasion. Tell us
          the date and the style, and we will quote from there.
        </p>
        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href="#enquire"
            className="inline-flex min-h-12 w-full max-w-xs items-center justify-center bg-navy px-8 py-3.5 text-center font-body text-sm tracking-wide text-cream hover:bg-navy/90 sm:w-auto"
          >
            Start an enquiry
          </a>
        </div>
      </section>

      <OrderSteps />

      <section className="bg-cream py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <SectionHeading kicker="Recent work" title="Recent custom work" />
          <div className="mt-10 grid grid-cols-2 gap-2 sm:mt-14 sm:gap-3 md:grid-cols-4 md:gap-4">
            {recent.map((img) => (
              <div key={img.src} className="relative aspect-square overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="enquire" className="scroll-mt-24 bg-cream py-16 md:py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <SectionHeading kicker="Enquire" title="Start with the details" />
          <p className="mx-auto mb-8 mt-5 max-w-xl text-center font-body text-[15px] leading-relaxed text-ink/70 sm:mb-12 sm:mt-6 sm:text-base">
            We reply within a day or two with a quote. Submitting opens WhatsApp
            and your mail app with the enquiry filled in.
          </p>
          <CustomCakeForm initialStyle={style} />
        </div>
      </section>

      <section className="bg-cream pb-20 md:pb-28">
        <div className="mx-auto max-w-content px-4 sm:px-6">
          <FAQ />
        </div>
      </section>
    </main>
  );
}
