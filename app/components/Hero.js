import Image from "next/image";
import Link from "next/link";
import heroSpread from "../../public/cakes/hero-spread.jpg";

const meta = [
  { label: "FoodSafe certified" },
  { label: "Custom orders" },
  { label: "@rjs.cakeshop", href: "https://www.instagram.com/rjs.cakeshop/" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-cream pb-8 pt-[calc(5.5rem+env(safe-area-inset-top))] sm:pb-10 lg:pb-12 lg:pt-32"
    >
      <div className="mx-auto grid max-w-content items-center gap-x-16 gap-y-8 px-4 sm:gap-y-12 sm:px-6 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <span
              className="hero-rule h-px w-8 bg-gold"
              style={{ "--hero-delay": "0ms" }}
              aria-hidden="true"
            />
          </div>

          <h1 className="mt-5 font-display text-[clamp(2.15rem,8.4vw,5rem)] leading-[1.05] tracking-[-0.02em] text-navy sm:mt-7 sm:leading-[0.98]">
            <span className="hero-line">
              <span style={{ "--hero-delay": "220ms" }}>Custom cakes,</span>
            </span>
            <span className="hero-line">
              <span className="italic" style={{ "--hero-delay": "340ms" }}>
                made to order.
              </span>
            </span>
          </h1>

          <p
            className="hero-anim mt-5 max-w-[46ch] font-body text-base leading-[1.65] text-ink/70 sm:mt-7 sm:text-[17px] sm:leading-[1.7] md:text-lg"
            style={{ "--hero-delay": "560ms" }}
          >
            Every cake is custom &mdash; designed around your occasion, then
            made to order.
          </p>

          <div className="mt-8 flex flex-col items-stretch gap-4 sm:mt-10 sm:flex-row sm:items-center sm:gap-8">
            <Link
              href="/custom-cakes"
              className="hero-anim inline-flex min-h-12 items-center justify-center bg-navy px-8 py-3.5 text-center font-body text-sm tracking-wide text-cream transition-colors hover:bg-navy/90"
              style={{ "--hero-delay": "720ms" }}
            >
              Enquire
            </Link>
            <Link
              href="/shop"
              className="hero-anim inline-flex min-h-11 items-center font-body text-sm text-navy underline decoration-gold/40 underline-offset-[6px] transition-colors hover:decoration-gold"
              style={{ "--hero-delay": "800ms" }}
            >
              View the collection
            </Link>
          </div>
        </div>

        <div
          className="hero-frame relative aspect-[4/3] w-full overflow-hidden bg-linen sm:aspect-[5/6] lg:aspect-square"
          style={{ "--hero-delay": "300ms" }}
        >
          <div
            className="hero-frame-img relative h-full w-full"
            style={{ "--hero-delay": "300ms" }}
          >
            <Image
              src={heroSpread}
              alt="Custom cakes, cupcakes, and cake pops arranged for a celebration."
              fill
              priority
              quality={82}
              placeholder="blur"
              sizes="(max-width: 1023px) 92vw, 46vw"
              className="object-cover object-[50%_62%]"
            />
          </div>
        </div>

        <div
          className="hero-anim border-t border-navy/10 pt-4 sm:pt-5 lg:col-span-2"
          style={{ "--hero-delay": "900ms" }}
        >
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-[10px] uppercase tracking-[0.16em] text-ink/55 sm:gap-x-5 sm:text-[11px] sm:tracking-[0.18em]">
            {meta.map((item, index) => (
              <li key={item.label} className="flex items-center gap-x-4 sm:gap-x-5">
                {index > 0 && (
                  <span aria-hidden="true" className="text-ink/30">
                    &middot;
                  </span>
                )}
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center transition-colors hover:text-navy"
                  >
                    {item.label}
                  </a>
                ) : (
                  item.label
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
