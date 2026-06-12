import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/lib/lenis-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://saisreelogistics.com/#organization",
      name: "Sai Sree Logistics",
      url: "https://saisreelogistics.com",
      logo: "https://saisreelogistics.com/images/logo.jpeg",
      description:
        "India's Workforce & 3PL Infrastructure Partner. Specializing in Manpower Supply, Warehousing, Transportation, and Integrated 3PL Solutions.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kannigaipair",
        addressRegion: "Thiruvallur",
        addressCountry: "IN",
        postalCode: "601102",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9791120354",
        contactType: "sales",
        availableLanguage: ["English", "Tamil"],
      },
      sameAs: [
        "https://www.linkedin.com/company/sai-sree-logistics",
      ],
      foundingDate: "2008",
      founder: {
        "@type": "Person",
        name: "B Prabakaran",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://saisreelogistics.com/#localbusiness",
      parentOrganization: { "@id": "https://saisreelogistics.com/#organization" },
      name: "Sai Sree Logistics",
      image: "https://saisreelogistics.com/images/logo.jpeg",
      telephone: "+91-9791120354",
      email: "prabakaran@saisreelogistics.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kannigaipair",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
        postalCode: "601102",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 13.12,
        longitude: 80.01,
      },
      areaServed: "India",
      priceRange: "$$",
      openingHours: "Mo-Su 00:00-24:00",
    },
    {
      "@type": "Service",
      "@id": "https://saisreelogistics.com/#service-manpower",
      name: "Manpower Supply Services",
      provider: { "@id": "https://saisreelogistics.com/#organization" },
      description:
        "End-to-end workforce solutions deploying skilled, semi-skilled, and general labor across manufacturing, warehousing, and industrial operations.",
      serviceType: "Workforce Solutions",
    },
    {
      "@type": "Service",
      "@id": "https://saisreelogistics.com/#service-warehousing",
      name: "Warehousing Services",
      provider: { "@id": "https://saisreelogistics.com/#organization" },
      description:
        "Strategic warehousing with FIFO-driven inventory management, real-time ERP integration, pick-and-pack operations.",
      serviceType: "Logistics",
    },
    {
      "@type": "Service",
      "@id": "https://saisreelogistics.com/#service-transportation",
      name: "Transportation Services",
      provider: { "@id": "https://saisreelogistics.com/#organization" },
      description:
        "Pan-India fleet management with real-time GPS tracking, optimized route planning, and digital proof of delivery.",
      serviceType: "Logistics",
    },
    {
      "@type": "FAQPage",
      "@id": "https://saisreelogistics.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What industries do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We serve automotive, manufacturing, e-commerce, FMCG, logistics, infrastructure, pharmaceuticals, and retail sectors across India.",
          },
        },
        {
          "@type": "Question",
          name: "How quickly can you deploy manpower?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We can deploy skilled manpower within 24-48 hours for most requirements, with a guaranteed 24-hour replacement policy.",
          },
        },
        {
          "@type": "Question",
          name: "Do you handle PF/ESI compliance?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, all our workforce deployments include full PF/ESI registration, statutory compliance, and payroll management.",
          },
        },
      ],
    },
  ],
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
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
