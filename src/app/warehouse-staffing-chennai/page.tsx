import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "What warehouse roles do you staff in Chennai?", acceptedAnswer: { "@type": "Answer", text: "We staff pickers, packers, loaders, unloaders, inventory clerks, warehouse supervisors, forklift operators, and receiving/dispatch clerks for fulfilment centres and industrial warehouses across Chennai." } },
    { "@type": "Question", name: "How quickly can you deploy warehouse staff in Chennai?", acceptedAnswer: { "@type": "Answer", text: "We can deploy trained warehouse staff within 24-48 hours across Chennai's industrial belts including Oragadam, Sriperumbudur, Ambattur, and Irungattukottai." } },
    { "@type": "Question", name: "Do you provide forklift-certified operators in Chennai?", acceptedAnswer: { "@type": "Answer", text: "Yes, we supply certified forklift operators with valid licenses and experience in pallet movement, racking, and material handling for Chennai warehouses." } },
    { "@type": "Question", name: "Can you scale warehouse staff during peak seasons?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. We specialize in seasonal workforce scaling — from 50 to 500+ staff within days for e-commerce and retail peak seasons across Chennai fulfillment centers." } },
  ],
};

export const metadata: Metadata = {
  title: "Warehouse Staffing Chennai | Warehouse Labour | Sai Sree Logistics",
  description: "Professional warehouse staffing in Chennai — pickers, packers, loaders, inventory clerks, and supervisors. FIFO-trained, ERP-ready workforce deployed within 48 hours across Oragadam, Sriperumbudur, Ambattur.",
  keywords: ["warehouse staffing Chennai", "warehouse labour Chennai", "pick and pack staff Chennai", "warehouse manpower Chennai", "fulfillment centre staffing", "Chennai warehouse staff"],
  openGraph: { title: "Warehouse Staffing Chennai | Warehouse Labour | Sai Sree Logistics", description: "Professional warehouse staffing in Chennai. FIFO-trained, ERP-ready workforce for pick, pack, inventory, and supervision roles." },
};

export default function WarehouseStaffingChennai() {
  return (
    <>
      <Script id="warehouse-chennai-faq" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="min-h-screen">
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] via-transparent to-background pointer-events-none" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/[0.03] via-transparent to-transparent blur-3xl pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">Warehouse Staffing Chennai</span>
            <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Warehouse Staffing &amp; Labour Solutions in <span className="text-gradient-gold">Chennai</span></h1>
            <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg">Sai Sree Logistics supplies trained warehouse professionals across Chennai — from pickers and packers to inventory supervisors — serving fulfilment centres, distribution hubs, and industrial warehouses in Oragadam, Sriperumbudur, Ambattur, Guindy, and all major industrial corridors. FIFO-trained, ERP-ready, backed by our 5-phase deployment process.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/#contact" className="rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110">Hire Warehouse Staff</Link>
              <Link href="/#process" className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.05]">View Deployment Process</Link>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">Warehouse Roles We Staff in <span className="text-gradient-gold">Chennai</span></h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Pickers & Packers', desc: 'Trained in FIFO picking, batch picking, and secure packing for e-commerce and retail fulfilment across Chennai warehouses.' },
                { title: 'Loaders & Unloaders', desc: 'Physical handling staff for inbound and outbound truck loading/unloading at Chennai distribution hubs.' },
                { title: 'Inventory Clerks', desc: 'ERP-trained staff for cycle counting, stock reconciliation, and inventory auditing in Chennai fulfilment centres.' },
                { title: 'Warehouse Supervisors', desc: 'Experienced supervisors for shift management, productivity tracking, and safety compliance in Chennai.' },
                { title: 'Forklift Operators', desc: 'Certified operators with valid licenses for pallet movement, racking, and material handling across Chennai.' },
                { title: 'Receiving & Dispatch Clerks', desc: 'Staff trained in GRN creation, dispatch documentation, and quality check processes for Chennai warehouses.' },
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
              <Link href="/industrial-manpower-services" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">Industrial Manpower</h3><p className="mt-1 text-xs text-white/40">Factory &amp; production staff</p></Link>
              <Link href="/3pl-services-chennai" className="group rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"><h3 className="text-sm font-bold text-white group-hover:text-gold transition-colors">3PL Services Chennai</h3><p className="mt-1 text-xs text-white/40">Integrated logistics</p></Link>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-2xl font-bold sm:text-3xl">Scale Your Chennai Warehouse Operations</h2>
            <p className="mb-8 text-white/50">Get trained, reliable warehouse staff deployed across Chennai within 48 hours.</p>
            <Link href="/#contact" className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110">Request Staff<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></Link>
          </div>
        </section>
      </div>
    </>
  );
}
