import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "What industrial roles do you fill across India?", acceptedAnswer: { "@type": "Answer", text: "We fill CNC & machine operators, assembly line workers, QC inspectors, maintenance technicians, material handlers, safety marshals, and production helpers across manufacturing plants nationwide." } },
    { "@type": "Question", name: "Which industries do your industrial manpower services cover?", acceptedAnswer: { "@type": "Answer", text: "We serve automotive, FMCG, pharmaceuticals, heavy engineering, electronics, and general manufacturing sectors across India with tailored workforce solutions." } },
    { "@type": "Question", name: "Do your industrial workers have relevant experience?", acceptedAnswer: { "@type": "Answer", text: "Yes, all our industrial workers undergo skill assessments, background verification, and role-specific training before deployment to any location." } },
    { "@type": "Question", name: "Can you handle large-scale industrial hiring for new plants?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We have deployed 2,500+ workers across 4 plants within 87 days for a leading automotive OEM, with full compliance and 24-hour replacement guarantee." } },
  ],
};

export const metadata: Metadata = {
  title: "Industrial Manpower Services | Factory Labour Pan-India | Sai Sree Logistics",
  description: "Pan-India industrial manpower services — skilled operators, technicians, helpers, and production staff for factories. 5000+ workers deployed across automotive, FMCG, pharma, and heavy engineering sectors.",
  keywords: ["industrial manpower services", "factory labour pan-India", "manufacturing staff", "production workers", "industrial staffing India", "factory manpower services"],
  openGraph: { title: "Industrial Manpower Services | Factory Labour Pan-India | Sai Sree Logistics", description: "Pan-India industrial manpower services — skilled operators, technicians, helpers. 5000+ workers deployed across manufacturing sectors." },
};

export default function IndustrialManpowerServices() {
  return (
    <>
      <Script id="industrial-services-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen">
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-crimson/[0.015] via-transparent to-background pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/[0.03] via-transparent to-transparent blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">Industrial Manpower Services</span>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Pan-India Industrial Manpower <span className="text-gradient-gold">Services</span></h1>
            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg">Sai Sree Logistics provides comprehensive industrial manpower services across India — supplying skilled machine operators, assembly line workers, QC inspectors, and maintenance technicians to factories and manufacturing plants nationwide. Fully vetted through our 5-phase deployment process ensuring quality and compliance at every location.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110">Hire Industrial Staff</Link>
              <Link href="/#industries" className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.05]">Industries We Serve</Link>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">Industrial Roles We Fill <span className="text-gradient-gold">Pan-India</span></h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'CNC & Machine Operators', desc: 'Skilled operators for CNC, VMC, grinding, drilling, and other production machinery across India.' },
                { title: 'Assembly Line Workers', desc: 'Trained staff for automotive, electronics, and consumer goods assembly lines nationwide.' },
                { title: 'QC Inspectors', desc: 'Experienced quality control inspectors for in-process and final inspection at any location.' },
                { title: 'Maintenance Technicians', desc: 'Electrical, mechanical, and hydraulic technicians for plant maintenance across India.' },
                { title: 'Material Handlers', desc: 'Storekeepers, kitters, and material movement staff for production support pan-India.' },
                { title: 'Safety Marshals', desc: 'Trained safety personnel for hazardous environment monitoring and compliance nationwide.' },
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
              <Link href="/manpower-supply-chennai" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Manpower Supply Chennai</h3><p className="mt-1 text-xs text-white/40">Chennai labour supply</p></Link>
              <Link href="/contract-labour-services" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Contract Labour</h3><p className="mt-1 text-xs text-white/40">Compliant workforce</p></Link>
              <Link href="/3pl-services" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Integrated 3PL</h3><p className="mt-1 text-xs text-white/40">End-to-end supply chain</p></Link>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Power Your Production Line — Anywhere in India</h2>
            <p className="mb-8 text-white/50">Reliable industrial workforce deployed across India within 24-48 hours.</p>
            <Link href="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110">Get Started<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
          </div>
        </section>
      </div>
    </>
  );
}
