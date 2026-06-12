import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "3PL Services India | Third Party Logistics | Sai Sree Logistics",
  description:
    "Integrated 3PL services in India — manpower, warehousing, and transportation under one roof. Dedicated account management, real-time analytics, and end-to-end supply chain solutions.",
  keywords: [
    "3PL services India",
    "third party logistics",
    "integrated logistics solutions",
    "supply chain management India",
    "3PL warehouse services",
    "logistics outsourcing",
  ],
  openGraph: {
    title: "3PL Services India | Third Party Logistics | Sai Sree Logistics",
    description: "Integrated 3PL services — manpower, warehousing, and transportation under one roof. End-to-end supply chain solutions.",
  },
};

export default function ThreePLServices() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] via-transparent to-background pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/[0.03] via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
            Integrated 3PL Solutions
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            End-to-End 3PL Services{' '}
            <span className="text-gradient-gold">India</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg">
            Sai Sree Logistics is your single-partner 3PL provider — combining workforce
            management, warehousing operations, and transportation into one seamlessly
            managed ecosystem with real-time analytics and dedicated account management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110"
            >
              Discuss Your Supply Chain
            </Link>
            <Link
              href="/#case-studies"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.05]"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
            What&apos;s Included in Our{' '}
            <span className="text-gradient-gold">3PL</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Workforce Management', desc: 'End-to-end manpower supply, payroll, compliance, and on-site supervision for all operations.' },
              { title: 'Warehousing & Storage', desc: 'Multi-client warehousing, FIFO inventory management, pick-and-pack, and WMS integration.' },
              { title: 'Transportation & Fleet', desc: 'FTL, LTL, container trailers, GPS-tracked fleet with digital proof of delivery.' },
              { title: 'Dedicated Account Manager', desc: 'Single point of contact for all 3PL operations, reporting, and issue resolution.' },
              { title: 'Real-time Analytics', desc: 'Web dashboard with live KPIs — inventory levels, workforce attendance, fleet tracking, and SLA reports.' },
              { title: 'Single-point Accountability', desc: 'One contract, one invoice, one partner — eliminating vendor coordination overhead.' },
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
            One Partner. One Contract. End-to-End.
          </h2>
          <p className="mb-8 text-white/50">
            Simplify your supply chain with India&apos;s most integrated 3PL provider.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110"
          >
            Get a Quote
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
