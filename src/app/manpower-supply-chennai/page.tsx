import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "How quickly can you deploy manpower in Chennai?", acceptedAnswer: { "@type": "Answer", text: "We can deploy skilled, semi-skilled, and general labour within 24-48 hours across Chennai's industrial belts including Oragadam, Sriperumbudur, Ambattur, and Guindy." } },
    { "@type": "Question", name: "Do you handle PF/ESI compliance for contract labour?", acceptedAnswer: { "@type": "Answer", text: "Yes, all our workforce deployments include full PF/ESI registration, statutory compliance, payroll management, and regular audit support." } },
    { "@type": "Question", name: "What types of workers do you supply in Chennai?", acceptedAnswer: { "@type": "Answer", text: "We supply welders, fitters, electricians, machine operators, packers, helpers, loaders, and general labour for manufacturing, warehousing, and industrial facilities." } },
    { "@type": "Question", name: "What is your replacement policy?", acceptedAnswer: { "@type": "Answer", text: "We offer a guaranteed 24-hour replacement policy. If any deployed worker is absent or leaves, we provide a suitable replacement within 24 hours at no extra cost." } },
  ],
};

export const metadata: Metadata = {
  title: "Manpower Supply Chennai | Labour Contractors | Sai Sree Logistics",
  description: "Leading manpower supply and labour contractor in Chennai. Skilled, semi-skilled & general labour deployment. PF/ESI compliant with 24hr replacement guarantee. Serving Oragadam, Sriperumbudur, Ambattur.",
  keywords: ["manpower supply Chennai", "labour contractors Chennai", "staffing services Chennai", "temporary staffing Chennai", "industrial manpower Chennai", "contract labour services"],
  openGraph: { title: "Manpower Supply Chennai | Labour Contractors | Sai Sree Logistics", description: "Leading manpower supply and labour contractor in Chennai. PF/ESI compliant workforce with 24hr replacement guarantee." },
};

export default function ManpowerSupplyChennai() {
  return (
    <>
      <Script id="manpower-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen">
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.03] via-transparent to-background pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/[0.03] via-transparent to-transparent blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">Manpower Supply Chennai</span>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Trusted Manpower Supply &amp; Labour Contractors in <span className="text-gradient-gold">Chennai</span></h1>
            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg">Sai Sree Logistics is Chennai&apos;s premier manpower supply company, deploying skilled, semi-skilled, and general labour to manufacturing plants, warehouses, and industrial facilities across Oragadam, Sriperumbudur, Ambattur, Guindy, and all major industrial belts. Fully PF/ESI compliant with a 24-hour replacement guarantee.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110">Get Workforce Quote</Link>
              <Link href="/#process" className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.05]">Our Deployment Process</Link>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">Why Choose Our <span className="text-gradient-gold">Chennai Manpower</span>?</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Skilled & Semi-Skilled', desc: 'Welders, fitters, electricians, machine operators, packers, and general helpers for all industrial sectors.' },
                { title: 'PF/ESI Compliant', desc: 'Full statutory compliance — PF, ESI, insurance, and payroll management handled end-to-end.' },
                { title: '24hr Replacement', desc: 'Guaranteed replacement within 24 hours if a deployed worker is absent or leaves.' },
                { title: 'Background Verified', desc: 'Police verification, previous employment checks, and skill assessments for every worker.' },
                { title: 'Pan-Chennai Coverage', desc: 'Serving Oragadam, Sriperumbudur, Ambattur, Guindy, Irungattukottai, and all industrial belts.' },
                { title: 'Dedicated Coordinator', desc: 'On-site HR coordinator for attendance, grievances, and day-to-day workforce management.' },
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
              <Link href="/warehouse-staffing-chennai" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Warehouse Staffing Chennai</h3><p className="mt-1 text-xs text-white/40">Chennai fulfilment centre staff</p></Link>
              <Link href="/industrial-manpower-services" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Industrial Manpower Services</h3><p className="mt-1 text-xs text-white/40">Pan-India factory workers</p></Link>
              <Link href="/contract-labour-services" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Contract Labour</h3><p className="mt-1 text-xs text-white/40">End-to-end compliant workforce</p></Link>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Ready to Deploy Workforce in Chennai?</h2>
            <p className="mb-8 text-white/50">Contact us today for a free consultation and workforce assessment. We serve all major industrial corridors in and around Chennai.</p>
            <Link href="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110">Contact Us<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
          </div>
        </section>
      </div>
    </>
  );
}
