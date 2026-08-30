import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById } from "../../data/products";

export default function ProductDetailPage({ params }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound();
  }

  const enquireHref = `/custom-cakes?style=${encodeURIComponent(product.name)}`;

  return (
    <main className="min-h-screen bg-cream px-4 pb-20 pt-[calc(7.5rem+env(safe-area-inset-top))] sm:px-6 sm:pb-24 sm:pt-32">
      <div className="mx-auto max-w-content">
        <nav className="mb-8 flex flex-wrap items-center gap-y-1 font-body text-sm text-ink/50 sm:mb-10">
          <Link href="/" className="inline-flex min-h-11 items-center hover:text-navy">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="inline-flex min-h-11 items-center hover:text-navy">
            Cakes
          </Link>
          <span className="mx-2">/</span>
          <span className="text-navy">{product.name}</span>
        </nav>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-linen lg:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 92vw"
            />
          </div>

          <div className="flex w-full flex-col justify-center lg:w-1/2">
            <p className="font-body text-xs uppercase tracking-[0.25em] text-gold">
              {product.collection}
            </p>
            <h1 className="mt-4 text-balance font-display text-3xl italic text-navy sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-6 max-w-md font-body leading-relaxed text-ink/70">
              {product.description}
            </p>
            <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-ink/55">
              Use this as inspiration. Every cake is made to order — we will
              quote flavour, size, and finish after we hear from you.
            </p>
            <Link
              href={enquireHref}
              className="mt-8 inline-flex min-h-12 w-full items-center justify-center bg-navy px-8 py-3.5 text-center font-body text-sm tracking-wide text-cream transition-colors hover:bg-navy/90 sm:mt-10 sm:w-fit"
            >
              Request this style
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
