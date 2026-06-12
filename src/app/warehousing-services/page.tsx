import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "What types of warehousing do you offer?", acceptedAnswer: { "@type": "Answer", text: "We offer multi-client warehousing, dedicated contract warehousing, cold storage, and bonded warehousing with FIFO inventory management and WMS integration." } },
    { "@type": "Question", name: "Do you provide pick-and-pack services?", acceptedAnswer: { "@type": "Answer", text: "Yes, our pick-and-pack fulfillment handles order processing, picking, packing, labeling, and dispatch for both e-commerce and B2B orders with 99.8% accuracy." } },
    { "@type": "Question", name: "Can you integrate with our ERP/WMS?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Our warehouse management systems integrate with major ERP platforms providing real-time inventory visibility and automated reporting." } },
    { "@type": "Question", name: "Do you offer value-added warehousing services?", acceptedAnswer: { "@type": "Answer", text: "Yes, we offer kitting, repackaging, quality inspection, labeling, reverse logistics, and customized packaging solutions." } },
  ],
};

export const metadata: Metadata = {
  title: "Warehousing Services India | Storage & Fulfillment | Sai Sree Logistics",
  description: "Professional warehousing services across India — multi-client storage, FIFO inventory management, pick-and-pack fulfillment, ERP integration, and real-time MIS reporting.",
  keywords: ["warehousing services India", "storage and warehousing", "fulfillment center India", "inventory management", "pick and pack services", "warehouse storage solutions"],
  openGraph: { title: "Warehousing Services India | Storage & Fulfillment | Sai Sree Logistics", description: "Professional warehousing services — multi-client storage, FIFO inventory management, pick-and-pack fulfillment across India." },
};

export default function WarehousingServices() {
  return (
    <>
      <Script id="warehousing-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen">
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.015] via-transparent to-background pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/[0.03] via-transparent to-transparent blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">Warehousing Services</span>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Strategic Warehousing &amp; Fulfillment <span className="text-gradient-gold">Services</span></h1>
            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg">Sai Sree Logistics operates modern warehousing facilities with FIFO-driven inventory management, ERP/WMS integration, and scalable pick-and-pack fulfillment — serving e-commerce, retail, FMCG, and manufacturing clients. Combined with expert manpower supply and pan-India transportation for integrated logistics.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110">Explore Warehousing</Link>
              <Link href="/3pl-services" className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.05]">View 3PL Solutions</Link>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">Our Warehousing <span className="text-gradient-gold">Capabilities</span></h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Multi-client Storage', desc: 'Secure, bonded warehousing for multiple clients with segregated zones and access control.' },
                { title: 'FIFO Inventory Management', desc: 'First-in-first-out inventory rotation with batch tracking and expiry management.' },
                { title: 'Pick & Pack Fulfillment', desc: 'Efficient order processing — picking, packing, labeling, and dispatch for e-commerce and B2B orders.' },
                { title: 'ERP/WMS Integration', desc: 'Real-time inventory visibility via integrated warehouse management and ERP systems.' },
                { title: 'Value-added Services', desc: 'Kitting, repackaging, quality inspection, labeling, and reverse logistics management.' },
                { title: 'Real-time MIS Reporting', desc: 'Daily stock reports, dispatch summaries, and productivity dashboards shared via web portal.' },
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
              <Link href="/warehouse-staffing" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Warehouse Staffing</h3><p className="mt-1 text-xs text-white/40">Pickers, packers &amp; supervisors</p></Link>
              <Link href="/transportation-services" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Transportation</h3><p className="mt-1 text-xs text-white/40">FTL, LTL &amp; last-mile</p></Link>
              <Link href="/3pl-services" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Integrated 3PL</h3><p className="mt-1 text-xs text-white/40">End-to-end supply chain</p></Link>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Optimize Your Inventory &amp; Fulfillment</h2>
            <p className="mb-8 text-white/50">Modern warehousing solutions backed by experienced workforce management.</p>
            <Link href="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110">Get a Warehouse Quote<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
          </div>
        </section>
      </div>
    </>
  );
}
