'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const services = [
  {
    title: 'Manpower Supply',
    description:
      'End-to-end workforce solutions spanning skilled, semi-skilled, and general labor for manufacturing, warehousing, and industrial operations. Rigorous screening, training, and compliance management.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    features: ['Skilled & Semi-skilled Labor', 'Temp & Permanent Staffing', 'Payroll & Compliance', 'Training & Development'],
  },
  {
    title: 'Warehousing',
    description:
      'State-of-the-art warehousing facilities with real-time inventory management, pick-and-pack operations, and multi-client storage solutions across strategic locations in India.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    features: ['Multi-client Storage', 'Inventory Management', 'Pick & Pack', 'Cold Storage Options'],
  },
  {
    title: 'Transportation',
    description:
      'Reliable freight and fleet management services with real-time tracking, optimized route planning, and a modern fleet ensuring timely, safe deliveries across India.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    features: ['FTL & LTL Services', 'Real-time Tracking', 'Route Optimization', 'Last-mile Delivery'],
  },
  {
    title: 'Integrated 3PL Solutions',
    description:
      'Comprehensive third-party logistics orchestration combining manpower, warehousing, and transportation into a single, seamlessly managed supply chain ecosystem.',
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
    features: ['End-to-end Supply Chain', 'Warehouse Management', 'Distribution Network', 'Performance Analytics'],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
};

const iconVariants = {
  hover: { rotate: 15, scale: 1.1 },
  tap: { scale: 0.9 },
};

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crimson/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-gold">
            What We Offer
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our{' '}
            <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-white/50">
            Comprehensive logistics and workforce solutions tailored to your business needs.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-card p-8 transition-all duration-500 hover:border-gold/20 hover:shadow-glow"
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gold/5 blur-3xl transition-all duration-500 group-hover:bg-gold/10" />

              <div className="relative z-10">
                <motion.div
                  className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-background"
                  variants={iconVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  {service.icon}
                </motion.div>

                <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/50">
                  {service.description}
                </p>

                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/40">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
