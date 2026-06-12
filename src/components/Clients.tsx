'use client';

import { motion } from 'framer-motion';

const clients = [
  { name: 'Tata Group', category: 'Manufacturing' },
  { name: 'Ashok Leyland', category: 'Automotive' },
  { name: 'TVS Motors', category: 'Automotive' },
  { name: 'Flipkart', category: 'E-Commerce' },
  { name: 'Amazon India', category: 'E-Commerce' },
  { name: 'DHL Supply Chain', category: 'Logistics' },
  { name: 'Mahindra & Mahindra', category: 'Manufacturing' },
  { name: 'L&T', category: 'Infrastructure' },
  { name: 'Saint Gobain', category: 'Manufacturing' },
  { name: 'Britannia', category: 'FMCG' },
  { name: 'ITC Limited', category: 'FMCG' },
  { name: 'Reliance Retail', category: 'Retail' },
];

export default function Clients() {
  return (
    <section id="clients" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.008] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
            Trusted Partners
          </span>
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Brands That Trust{' '}
            <span className="text-gradient-gold">Sai Sree</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/40 leading-relaxed">
            Partnering with India&apos;s leading enterprises across manufacturing, e-commerce, FMCG, and logistics.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative rounded-xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-5 transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"
            >
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gold/[0.02] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <span className="text-sm font-semibold text-white/60 transition-colors duration-300 group-hover:text-gold sm:text-base">
                  {client.name}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.15em] text-white/20 transition-colors duration-300 group-hover:text-white/40">
                  {client.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
