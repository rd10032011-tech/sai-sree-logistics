import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Warehouse Staffing Services | Warehouse Labour | Sai Sree Logistics",
  description:
    "Professional warehouse staffing services across India. Pickers, packers, loaders, inventory clerks, and warehouse supervisors. FIFO-trained, ERP-ready workforce.",
  keywords: [
    "warehouse staffing",
    "warehouse labour supply",
    "warehouse staff India",
    "pick and pack staff",
    "warehouse manpower",
    "inventory staffing",
  ],
  openGraph: {
    title: "Warehouse Staffing Services | Warehouse Labour | Sai Sree Logistics",
    description: "Professional warehouse staffing across India. FIFO-trained, ERP-ready workforce for pick, pack, and inventory operations.",
  },
};

export default function WarehouseStaffing() {
  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] via-transparent to-background pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/[0.03] via-transparent to-transparent blur-3xl pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <span className="mb-4 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
            Warehouse Staffing
          </span>
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Expert Warehouse Staffing &amp; Labour{' '}
            <span className="text-gradient-gold">Solutions</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-base leading-relaxed text-white/50 sm:text-lg">
            Sai Sree Logistics supplies trained warehouse professionals — from pickers
            and packers to inventory supervisors — across fulfillment centres, distribution
            hubs, and industrial warehouses throughout India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110"
            >
              Hire Warehouse Staff
            </Link>
            <Link
              href="/#services"
              className="rounded-xl border border-white/10 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/30 hover:bg-gold/[0.05]"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold sm:text-4xl">
            Warehouse Roles We{' '}
            <span className="text-gradient-gold">Staff</span>
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Pickers & Packers', desc: 'Trained in FIFO picking, batch picking, and secure packing for e-commerce and retail fulfilment.' },
              { title: 'Loaders & Unloaders', desc: 'Physical handling staff for inbound and outbound truck loading/unloading operations.' },
              { title: 'Inventory Clerks', desc: 'ERP-trained staff for cycle counting, stock reconciliation, and inventory auditing.' },
              { title: 'Warehouse Supervisors', desc: 'Experienced supervisors for shift management, productivity tracking, and safety compliance.' },
              { title: 'Forklift Operators', desc: 'Certified operators for material handling, pallet movement, and racking operations.' },
              { title: 'Receiving & Dispatch Clerks', desc: 'Staff trained in GRN creation, dispatch documentation, and quality check processes.' },
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
            Scale Your Warehouse Operations
          </h2>
          <p className="mb-8 text-white/50">
            Get trained, reliable warehouse staff deployed within 48 hours.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110"
          >
            Request Staff
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
