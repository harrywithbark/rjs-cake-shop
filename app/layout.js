import { Fraunces, Jost } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingActionButton from "./components/FloatingActionButton";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
    themeColor: "#F5EBD9",
  };
}

export const metadata = {
  metadataBase: new URL("https://rjscakeshop.vercel.app"),
  title: "Rj's Cake Shop | Custom Cakes in Surrey, BC",
  description:
    "Rj's Cake Shop is a Surrey, BC home bakery specializing in handcrafted buttercream and floral custom cakes for birthdays, weddings, and celebrations. FoodSafe certified.",
  keywords: [
    "Rj's Cake Shop",
    "Surrey bakery",
    "custom cakes Surrey BC",
    "custom cake artist",
    "wedding cakes Surrey",
    "birthday cakes Surrey",
  ],
  openGraph: {
    title: "Rj's Cake Shop | Custom Cakes in Surrey, BC",
    description:
      "Handcrafted buttercream and floral custom cakes, made to order in Surrey, BC.",
    url: "https://rjscakeshop.vercel.app",
    siteName: "Rj's Cake Shop",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jost.variable}`}>
      <body className="font-body bg-cream text-ink antialiased">
        <Header />
        {children}
        <Footer />
        <FloatingActionButton />
      </body>
    </html>
  );
}
