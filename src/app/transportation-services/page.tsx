import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Transportation Services India | Logistics & Fleet | Sai Sree Logistics",
  description:
    "Pan-India transportation services — FTL, LTL, container trailers, and last-mile delivery. GPS-tracked fleet with digital proof of delivery. 99.5% on-time SLA.",
  keywords: [
    "transportation services India",
    "logistics company India",
    "FTL services",
    "LTL services",
    "fleet management India",
    "goods transport services",
    "supply chain transportation",
  ],
  openGraph: {
    title: "Transportation Services India | Logistics & Fleet | Sai Sree Logistics",
    description: "Pan-India transportation — FTL, LTL, container trailers, GPS-tracked fleet. 99.5% on-time SLA with digital proof of delivery.",
  },
};

export default function TransportationServices() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.015] via-transparent to-background pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/[0.03] via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
            Transportation Services
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Pan-India Transportation &amp; Fleet{' '}
            <span className="text-gradient-gold">Services</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg">
            Sai Sree Logistics operates a pan-India fleet of GPS-tracked vehicles — from
            1-ton vans to 32-ton container trailers — backed by real-time tracking, optimized
            route planning, and digital proof of delivery with 99.5% on-time SLA.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110"
            >
              Get a Transport Quote
            </Link>
            <Link
              href="/#services"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.05]"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
            Our Transportation{' '}
            <span className="text-gradient-gold">Solutions</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Full Truck Load (FTL)', desc: 'Dedicated trucks for bulk shipments across all major routes in India with real-time tracking.' },
              { title: 'Less than Truck Load (LTL)', desc: 'Cost-effective shared truckload for smaller consignments with optimized consolidation.' },
              { title: 'Container Trailers', desc: '20ft and 40ft container trailers for EXIM, ICD, and port-to-door movement.' },
              { title: 'Last-Mile Delivery', desc: 'Time-definite last-mile delivery with e-commerce integration and SMS/email notifications.' },
              { title: 'GPS Fleet Tracking', desc: 'Live vehicle tracking, geofencing, ETA alerts, and route optimization via central control room.' },
              { title: 'Digital Proof of Delivery', desc: 'ePOD with photo capture, digital signature, and real-time confirmation to all stakeholders.' },
            ].map((item) => (
              <div key={item.title} className="group rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-6 transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow">
                <h3 className="mb-2 text-lg font-bold text-gold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/40">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
            Move Goods Across India with Confidence
          </h2>
          <p className="mb-8 text-white/50">
            GPS-tracked fleet, digital POD, and 99.5% on-time delivery SLA.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110"
          >
            Book a Shipment
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
