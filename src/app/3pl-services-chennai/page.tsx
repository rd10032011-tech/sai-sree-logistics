import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "What 3PL services do you offer in Chennai?", acceptedAnswer: { "@type": "Answer", text: "We offer integrated 3PL services in Chennai including workforce management, warehousing & inventory management, transportation & fleet management, dedicated account management, and real-time analytics dashboard." } },
    { "@type": "Question", name: "How is your Chennai 3PL different from hiring separate vendors?", acceptedAnswer: { "@type": "Answer", text: "With our Chennai 3PL, you get single-point accountability, one contract, one invoice, and a dedicated account manager — eliminating the overhead of coordinating multiple vendors and reducing logistics costs by up to 15%." } },
    { "@type": "Question", name: "Do you provide real-time visibility for Chennai operations?", acceptedAnswer: { "@type": "Answer", text: "Yes, our web dashboard provides live KPIs including inventory levels, workforce attendance, fleet tracking, and SLA performance reports for all Chennai-based operations." } },
    { "@type": "Question", name: "Which Chennai industries do you serve with 3PL?", acceptedAnswer: { "@type": "Answer", text: "We serve automotive, e-commerce, FMCG, pharmaceuticals, retail, and manufacturing sectors across Chennai's industrial belts including Oragadam, Sriperumbudur, Ambattur, and Guindy." } },
  ],
};

export const metadata: Metadata = {
  title: "3PL Services Chennai | Third Party Logistics Chennai | Sai Sree Logistics",
  description: "Integrated 3PL services in Chennai — manpower, warehousing, and transportation under one roof. Serving Oragadam, Sriperumbudur, Ambattur. Dedicated account management and real-time analytics.",
  keywords: ["3PL services Chennai", "third party logistics Chennai", "integrated logistics Chennai", "supply chain Chennai", "3PL provider Chennai", "logistics outsourcing Chennai"],
  openGraph: { title: "3PL Services Chennai | Third Party Logistics Chennai | Sai Sree Logistics", description: "Integrated 3PL services in Chennai — manpower, warehousing, and transportation under one roof. Serving all Chennai industrial belts." },
};

export default function ThreePLServicesChennai() {
  return (
    <>
      <Script id="3pl-chennai-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen">
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] via-transparent to-background pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/[0.03] via-transparent to-transparent blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">3PL Services Chennai</span>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">End-to-End 3PL Services in <span className="text-gradient-gold">Chennai</span></h1>
            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg">Sai Sree Logistics is Chennai&apos;s single-partner 3PL provider — combining workforce management, warehousing operations, and transportation into one seamlessly managed ecosystem. Serving Oragadam, Sriperumbudur, Ambattur, Guindy, and all Chennai industrial corridors with real-time analytics and dedicated account management.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110">Discuss Your Supply Chain</Link>
              <Link href="/#case-studies" className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.05]">View Case Studies</Link>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">What&apos;s Included in Our <span className="text-gradient-gold">Chennai 3PL</span></h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Workforce Management', desc: 'End-to-end manpower supply, payroll, compliance, and on-site supervision for Chennai operations.' },
                { title: 'Warehousing & Storage', desc: 'Multi-client warehousing, FIFO inventory management, pick-and-pack, and WMS integration in Chennai.' },
                { title: 'Transportation & Fleet', desc: 'FTL, LTL, container trailers, GPS-tracked fleet with digital proof of delivery across Chennai.' },
                { title: 'Dedicated Account Manager', desc: 'Single point of contact for all Chennai 3PL operations, reporting, and issue resolution.' },
                { title: 'Real-time Analytics', desc: 'Web dashboard with live KPIs — inventory levels, workforce attendance, fleet tracking, and SLA reports.' },
                { title: 'Single-point Accountability', desc: 'One contract, one invoice, one partner — eliminating vendor coordination overhead in Chennai.' },
              ].map((item) => (
                <div key={item.title} className="group rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-6 transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="mb-2 text-lg font-bold text-gold">{item.title}</h3><p className="text-sm leading-relaxed text-white/40">{item.desc}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative py-20 border-t border-white/[0.04]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-10 text-center text-2xl font-bold sm:text-3xl">Related <span className="text-gradient-gold">Services</span></h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <Link href="/manpower-supply-chennai" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Manpower Supply Chennai</h3><p className="mt-1 text-xs text-white/40">Skilled &amp; general labour</p></Link>
              <Link href="/warehouse-staffing-chennai" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Warehouse Staffing Chennai</h3><p className="mt-1 text-xs text-white/40">Fulfilment centre staff</p></Link>
              <Link href="/transportation-services" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Transportation</h3><p className="mt-1 text-xs text-white/40">Pan-India fleet services</p></Link>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">One Partner for Your Chennai Supply Chain</h2>
            <p className="mb-8 text-white/50">Simplify your Chennai logistics with India&apos;s most integrated 3PL provider.</p>
            <Link href="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110">Get a Quote<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
          </div>
        </section>
      </div>
    </>
  );
}
