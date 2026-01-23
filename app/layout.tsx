import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://obelva.com"),
  title: "Obelva | Luxury Couple Essentials",
  description:
    "Obelva curates premium romantic gifts, matching accessories, and date-night kits for modern couples.",
  openGraph: {
    title: "Obelva | Luxury Couple Essentials",
    description:
      "Luxury romantic gifts, matching accessories, and date-night kits curated for modern couples.",
    url: "https://obelva.com",
    siteName: "Obelva",
    images: [
      {
        url: "https://picsum.photos/seed/obelva-og/1200/630",
        width: 1200,
        height: 630,
        alt: "Obelva luxury couple gifts"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Obelva | Luxury Couple Essentials",
    description: "Luxury romantic gifts and date-night kits for modern couples.",
    images: ["https://picsum.photos/seed/obelva-og/1200/630"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-noir text-ivory">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
