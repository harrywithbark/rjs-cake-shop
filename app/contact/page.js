import Contact from "../components/Contact";

export const metadata = {
  title: "Enquire | Rj's Cake Shop",
  description:
    "Enquire about a custom cake from Rj's Cake Shop in Surrey, BC. Message us on WhatsApp or send a note.",
};

export default function ContactPage() {
  return (
    <main className="bg-cream pt-[calc(3.5rem+env(safe-area-inset-top))] sm:pt-12">
      <Contact />
    </main>
  );
}
