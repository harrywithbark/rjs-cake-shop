import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy py-12 text-cream/70 pb-[calc(3rem+env(safe-area-inset-bottom))] md:py-14">
      <div className="mx-auto flex max-w-content flex-col items-center gap-8 px-4 text-center sm:px-6 md:flex-row md:items-start md:justify-between md:text-left">
        <div>
          <p className="font-display text-2xl italic text-cream">
            Rj&rsquo;s Cake Shop
          </p>
          <p className="mt-2 font-body text-xs uppercase tracking-[0.25em] text-gold">
            Surrey, BC
          </p>
          <p className="mt-4 font-body text-sm leading-relaxed text-cream/55">
            Made to order from home.
            <br />
            Pickup and delivery by arrangement.
          </p>
        </div>

        <nav className="flex flex-col items-center gap-1 font-body text-sm md:items-start">
          <Link href="/" className="inline-flex min-h-11 items-center hover:text-cream">
            Home
          </Link>
          <Link href="/shop" className="inline-flex min-h-11 items-center hover:text-cream">
            Cakes
          </Link>
          <Link href="/custom-cakes" className="inline-flex min-h-11 items-center hover:text-cream">
            Custom
          </Link>
          <Link href="/contact" className="inline-flex min-h-11 items-center hover:text-cream">
            Enquire
          </Link>
        </nav>

        <div className="flex flex-col items-center gap-1 font-body text-sm md:items-end">
          <a
            href="https://wa.me/17789184162"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center hover:text-cream"
          >
            WhatsApp
          </a>
          <a href="tel:+17789184162" className="inline-flex min-h-11 items-center hover:text-cream">
            (778) 918-4162
          </a>
          <a
            href="https://www.instagram.com/rjs.cakeshop/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center hover:text-cream"
          >
            @rjs.cakeshop
          </a>
          <Link
            href="/custom-cakes"
            className="mt-3 inline-flex min-h-11 items-center border border-cream/25 px-5 py-2 text-cream transition-colors hover:border-cream/60"
          >
            Enquire
          </Link>
        </div>
      </div>
      <p className="mt-10 px-4 text-center font-body text-xs text-cream/35 md:mt-12">
        &copy; {year} Rj&rsquo;s Cake Shop. All rights reserved.
      </p>
    </footer>
  );
}
