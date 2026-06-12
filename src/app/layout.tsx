import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/lenis-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sai Sree Logistics | India's Workforce & 3PL Infrastructure Partner",
  description:
    "Premier logistics and workforce solutions provider in India. Specializing in Manpower Supply, Warehousing, Transportation, and Integrated 3PL Solutions across all major industries.",
  keywords: [
    "logistics",
    "manpower supply",
    "warehousing",
    "transportation",
    "3PL solutions",
    "India logistics",
    "workforce solutions",
    "Sai Sree Logistics",
  ],
  openGraph: {
    title: "Sai Sree Logistics | India's Workforce & 3PL Infrastructure Partner",
    description:
      "Premier logistics and workforce solutions provider in India. Manpower Supply, Warehousing, Transportation & Integrated 3PL Solutions.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="bg-background text-white antialiased">
        <SmoothScrollProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
