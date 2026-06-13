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
    "logistics company India",
    "manpower supply Chennai",
    "warehousing services India",
    "transportation services",
    "3PL solutions India",
    "workforce solutions",
    "contract labour services",
    "industrial manpower",
    "warehouse staffing",
    "Sai Sree Logistics",
    "supply chain management India",
    "labour contractors",
  ],
  openGraph: {
    title: "Sai Sree Logistics | India's Workforce & 3PL Infrastructure Partner",
    description:
      "Premier logistics and workforce solutions provider in India. Manpower Supply, Warehousing, Transportation & Integrated 3PL Solutions.",
    type: "website",
    locale: "en_IN",
    siteName: "Sai Sree Logistics",
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
      foundingDate: "2025",
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Workforce & 3PL Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@id": "https://saisreelogistics.com/#service-manpower" } },
          { "@type": "Offer", itemOffered: { "@id": "https://saisreelogistics.com/#service-warehousing" } },
          { "@type": "Offer", itemOffered: { "@id": "https://saisreelogistics.com/#service-transportation" } },
          { "@type": "Offer", itemOffered: { "@id": "https://saisreelogistics.com/#service-3pl" } },
        ],
      },
    },
    {
      "@type": "Service",
      "@id": "https://saisreelogistics.com/#service-manpower",
      name: "Manpower Supply Services",
      provider: { "@id": "https://saisreelogistics.com/#organization" },
      description:
        "End-to-end workforce solutions deploying skilled, semi-skilled, and general labor across manufacturing, warehousing, and industrial operations. PF/ESI compliant with 24-hour replacement guarantee.",
      serviceType: "Workforce Solutions",
      areaServed: "India",
    },
    {
      "@type": "Service",
      "@id": "https://saisreelogistics.com/#service-warehousing",
      name: "Warehousing Services",
      provider: { "@id": "https://saisreelogistics.com/#organization" },
      description:
        "Strategic warehousing with FIFO-driven inventory management, real-time ERP integration, pick-and-pack operations, and multi-client storage solutions.",
      serviceType: "Logistics",
      areaServed: "India",
    },
    {
      "@type": "Service",
      "@id": "https://saisreelogistics.com/#service-transportation",
      name: "Transportation Services",
      provider: { "@id": "https://saisreelogistics.com/#organization" },
      description:
        "Pan-India fleet management with real-time GPS tracking, optimized route planning, and digital proof of delivery. FTL, LTL, and container trailers.",
      serviceType: "Logistics",
      areaServed: "India",
    },
    {
      "@type": "Service",
      "@id": "https://saisreelogistics.com/#service-3pl",
      name: "Integrated 3PL Solutions",
      provider: { "@id": "https://saisreelogistics.com/#organization" },
      description:
        "End-to-end third-party logistics combining workforce management, warehousing operations, and transportation into one managed ecosystem with real-time analytics.",
      serviceType: "Supply Chain Management",
      areaServed: "India",
    },
    {
      "@type": "FAQPage",
      "@id": "https://saisreelogistics.com/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What services does Sai Sree Logistics offer?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer Manpower Supply, Contract Labour Services, Warehousing, Transportation, and Integrated 3PL Solutions across India.",
          },
        },
        {
          "@type": "Question",
          name: "What industries do you serve?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We serve automotive, manufacturing, e-commerce, FMCG, logistics, infrastructure, pharmaceuticals, hospitality, and retail sectors across India.",
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
            text: "Yes, all our workforce deployments include full PF/ESI registration, statutory compliance, payroll management, and regular audit support.",
          },
        },
        {
          "@type": "Question",
          name: "Which cities do you operate in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We operate across 20+ cities in India including Chennai, Bangalore, Hyderabad, Coimbatore, Salem, Madurai, Tiruchirappalli, and all major industrial belts.",
          },
        },
        {
          "@type": "Question",
          name: "Do you offer integrated 3PL solutions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, our integrated 3PL combines manpower, warehousing, and transportation under one contract with a dedicated account manager and real-time analytics dashboard.",
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
