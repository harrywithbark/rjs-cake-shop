"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Cakes" },
  { href: "/custom-cakes", label: "Custom" },
  { href: "/contact", label: "Enquire" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const solid = !isHome || scrolled || open;

  return (
    <header
      className={`fixed top-0 z-50 w-full pt-[env(safe-area-inset-top)] transition-colors duration-300 ${
        solid ? "bg-cream/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-content grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 sm:px-6 md:grid-cols-[1fr_auto_1fr] md:py-4">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2 justify-self-start"
        >
          <span className="font-display text-[1.65rem] italic leading-none text-navy md:text-2xl">
            Rj&rsquo;s
          </span>
          <span className="font-body text-[10px] uppercase tracking-[0.22em] text-ink/70 sm:text-[11px] sm:tracking-[0.25em]">
            Cake Shop
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-body text-sm transition-colors hover:text-navy ${
                  active ? "text-navy" : "text-ink/80"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/custom-cakes"
          className="hidden justify-self-end bg-navy px-5 py-2 font-body text-sm tracking-wide text-cream transition-colors hover:bg-navy/90 md:inline-block"
        >
          Enquire
        </Link>

        <div className="flex items-center gap-2 justify-self-end md:hidden">
          <Link
            href="/custom-cakes"
            className="inline-flex min-h-11 items-center bg-navy px-3.5 font-body text-xs tracking-wide text-cream"
          >
            Enquire
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-[1.5px] w-5 bg-navy transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-navy transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-navy transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-cream md:hidden">
          <nav className="flex flex-col px-4 py-3 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex min-h-12 items-center font-body text-base text-ink/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
