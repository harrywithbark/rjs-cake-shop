import { Suspense } from "react";
import ShopLookbook from "./ShopLookbook";

export const metadata = {
  title: "Cakes | Rj's Cake Shop",
  description:
    "A lookbook of signature, wedding, and celebration cakes made to order at Rj's Cake Shop in Surrey, BC.",
};

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-cream pt-32">
          <p className="px-4 text-center font-body text-ink/50">Loading cakes…</p>
        </main>
      }
    >
      <ShopLookbook />
    </Suspense>
  );
}
