import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contract Labour Services India | Labour Contractors | Sai Sree Logistics",
  description:
    "End-to-end contract labour services across India. Compliant workforce deployment for manufacturing, warehousing, and industrial operations. PF/ESI, payroll, and 24hr replacement included.",
  keywords: [
    "contract labour services",
    "labour contractors India",
    "contract labour management",
    "manpower outsourcing",
    "industrial labour supply",
    "labour compliance services",
  ],
  openGraph: {
    title: "Contract Labour Services India | Labour Contractors | Sai Sree Logistics",
    description: "End-to-end contract labour services across India. Fully compliant workforce deployment with PF/ESI management.",
  },
};

export default function ContractLabourServices() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-crimson/[0.02] via-transparent to-background pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/[0.03] via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
            Contract Labour Services
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            India&apos;s Most Reliable{' '}
            <span className="text-gradient-gold">Contract Labour</span> Services
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg">
            From compliance management to daily workforce supervision — Sai Sree Logistics
            provides end-to-end contract labour services that keep your operations running
            smoothly, safely, and fully compliant with Indian labour laws.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110"
            >
              Discuss Your Needs
            </Link>
            <Link
              href="/#process"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.05]"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
            Our Contract Labour{' '}
            <span className="text-gradient-gold">Solutions</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'General Labour Supply', desc: 'Helpers, loaders, unloaders, cleaners, and general workers for warehouses and factories.' },
              { title: 'Skilled Workforce', desc: 'Fitters, welders, electricians, plumbers, machine operators, and technicians.' },
              { title: 'Compliance Management', desc: 'PF, ESI, bonus, gratuity, and all statutory registrations handled in full.' },
              { title: 'Payroll Processing', desc: 'Accurate monthly payroll, attendance reconciliation, and salary disbursement.' },
              { title: 'On-site Supervision', desc: 'Dedicated supervisors for attendance, productivity tracking, and grievance handling.' },
              { title: 'Legal Compliance Audits', desc: 'Regular audits to ensure compliance with the Contract Labour Act, Factories Act, and state-specific rules.' },
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
            Ensure Compliance &amp; Productivity
          </h2>
          <p className="mb-8 text-white/50">
            Partner with India&apos;s most compliant contract labour service provider.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110"
          >
            Get Started
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
