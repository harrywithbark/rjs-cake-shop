import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-4 pt-[calc(7.5rem+env(safe-area-inset-top))] text-center sm:px-6 sm:pt-32">
      <p className="font-body text-xs uppercase tracking-[0.4em] text-ink/50">
        404
      </p>
      <div className="mx-auto my-6 h-px w-16 bg-gold" />
      <h1 className="text-balance font-display text-3xl italic text-navy sm:text-5xl md:text-6xl">
        This page was not found
      </h1>
      <p className="mt-6 max-w-md font-body text-ink/70">
        The cake is still in the kitchen. Head home, or look through the collection.
      </p>
      <div className="mt-10 flex w-full max-w-xs flex-col items-stretch gap-4 sm:max-w-none sm:flex-row sm:items-center sm:justify-center">
        <Link
          href="/"
          className="inline-flex min-h-12 items-center justify-center bg-navy px-8 py-3.5 font-body text-sm tracking-wide text-cream hover:bg-navy/90"
        >
          Home
        </Link>
        <Link
          href="/shop"
          className="inline-flex min-h-11 items-center justify-center font-body text-sm text-navy underline decoration-gold/40 underline-offset-4"
        >
          View the collection
        </Link>
      </div>
    </main>
  );
}