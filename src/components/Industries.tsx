'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Manufacturing',
    description: 'Automotive, electronics, heavy machinery and general manufacturing workforce & logistics.',
    icon: '⚙️',
  },
  {
    title: 'Pharmaceuticals',
    description: 'Cold chain logistics, compliance-driven warehousing and skilled pharma workforce.',
    icon: '💊',
  },
  {
    title: 'E-Commerce',
    description: 'High-volume fulfillment, pick-pack-ship operations and seasonal workforce scaling.',
    icon: '📦',
  },
  {
    title: 'FMCG & Retail',
    description: 'Distribution center management, replenishment workforce and last-mile delivery.',
    icon: '🛒',
  },
  {
    title: 'Automotive',
    description: 'Just-in-time parts logistics, assembly line manpower and vehicle transportation.',
    icon: '🚗',
  },
  {
    title: 'Construction',
    description: 'Project-based labor supply, material logistics and equipment transportation.',
    icon: '🏗️',
  },
  {
    title: 'Hospitality',
    description: 'Housekeeping, front-office staffing and supply chain for hotels & resorts.',
    icon: '🏨',
  },
  {
    title: 'Agriculture',
    description: 'Seasonal workforce, cold storage logistics and farm-to-factory transportation.',
    icon: '🌾',
  },
];

export default function Industries() {
  return (
    <section id="industries" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.01] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Who We Serve
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Industries We{' '}
            <span className="text-gradient-gold">Empower</span>
          </h2>
          <p className="mx-auto max-w-2xl text-white/50">
            Across sectors, we deliver tailored workforce and logistics solutions that drive operational excellence.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group cursor-pointer rounded-xl border border-white/5 bg-gradient-card p-6 transition-all duration-500 hover:border-gold/30 hover:shadow-glow"
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <motion.span
                className="mb-3 block text-2xl"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                {industry.icon}
              </motion.span>
              <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-gold">
                {industry.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/40">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
