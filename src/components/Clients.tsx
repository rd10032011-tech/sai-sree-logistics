'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const trustBadges = [
  { label: 'ISO 9001:2015 Certified', icon: '✓' },
  { label: 'PF/ESI Compliant', icon: '⚖' },
  { label: '50,000+ Candidate Pool', icon: '👥' },
  { label: '24hr Replacement Guarantee', icon: '⏱' },
  { label: 'PAN India Operations', icon: '🌐' },
  { label: '500+ Enterprise Clients', icon: '🏢' },
];

const testimonials = [
  {
    quote: 'Sai Sree Logistics has been our manpower partner for over 5 years. Their compliance management and workforce reliability are unmatched in the industry.',
    author: 'VP Operations',
    company: 'Leading Automotive OEM',
  },
  {
    quote: 'During peak season, they deployed 800+ staff across 3 facilities within a week — zero SLA breaches. Our go-to partner for workforce scaling.',
    author: 'Supply Chain Director',
    company: 'Top 3 E-Commerce Platform',
  },
  {
    quote: 'Their integrated 3PL model reduced our logistics cost by 15% while improving on-time delivery to 99.5%. A true game-changer for our supply chain.',
    author: 'CEO',
    company: 'FMCG Manufacturing Corporation',
  },
];

export default function Clients() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => { if (timerRef.current !== null) window.clearInterval(timerRef.current); };
  }, []);

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
            Client Trust
          </span>
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Trusted by Industry{' '}
            <span className="text-gradient-gold">Leaders</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/40 leading-relaxed">
            500+ enterprise clients across manufacturing, e-commerce, FMCG, and logistics rely on Sai Sree Logistics for workforce and supply chain excellence.
          </p>
        </motion.div>

        <div className="mb-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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

        <div className="mb-16 grid gap-4 sm:grid-cols-3">
          {[
            { value: '500+', label: 'Enterprise Clients' },
            { value: '5,000+', label: 'Workforce Deployed' },
            { value: '20+', label: 'Cities Covered' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-6 text-center transition-all duration-500 hover:border-gold/[0.12] hover:shadow-glow"
            >
              <span className="text-3xl font-bold text-gold sm:text-4xl">{stat.value}</span>
              <p className="mt-1 text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
            Trust &amp; Compliance{' '}
            <span className="text-gradient-gold">Badges</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {trustBadges.map((badge) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -3, scale: 1.04 }}
                className="inline-flex items-center gap-2 rounded-full border border-gold/10 bg-gold/[0.03] px-4 py-2 text-xs font-semibold text-gold/80 transition-all duration-300 hover:border-gold/20 hover:bg-gold/[0.06]"
              >
                <span>{badge.icon}</span>
                {badge.label}
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
            What Our{' '}
            <span className="text-gradient-gold">Clients Say</span>
          </h3>
          <div className="relative mx-auto max-w-3xl">
            <div className="min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-8 text-center"
                >
                  <svg className="mx-auto mb-4 h-8 w-8 text-gold/30" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="mb-6 text-base leading-relaxed text-white/60 sm:text-lg">
                    {testimonials[activeTestimonial].quote}
                  </p>
                  <div>
                    <p className="font-semibold text-white">{testimonials[activeTestimonial].author}</p>
                    <p className="text-sm text-gold/60">{testimonials[activeTestimonial].company}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === activeTestimonial ? 'w-8 bg-gold' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
