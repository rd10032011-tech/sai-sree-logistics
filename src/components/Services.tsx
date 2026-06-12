'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Manpower Supply',
    badge: 'Core Business',
    emphasis: true,
    description:
      'End-to-end workforce solutions deploying skilled, semi-skilled, and general labor across manufacturing, warehousing, and industrial operations. Rigorous background verification, statutory compliance (PF/ESI), and 24-hour replacement guarantee.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    features: ['Skilled & Semi-skilled Labor', 'PF/ESI Compliant Payroll', '24hr Replacement Guarantee', 'Background Verified Staff'],
    metrics: ['5,000+ Deployed', '99.5% Retention', '24hr Turnaround'],
  },
  {
    title: 'Warehousing',
    badge: '3PL Infrastructure',
    emphasis: false,
    description:
      'Strategic warehousing with FIFO-driven inventory management, real-time ERP integration, pick-and-pack operations, and multi-client storage solutions across major industrial corridors.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    features: ['FIFO Inventory Management', 'ERP-Integrated Operations', 'Pick & Pack Fulfillment', 'Multi-client Storage'],
    metrics: ['5+ Warehouses', 'ERP Integrated', 'Real-time MIS'],
  },
  {
    title: 'Transportation',
    badge: 'Logistics Network',
    emphasis: false,
    description:
      'Pan-India fleet management with real-time GPS tracking, optimized route planning, and digital proof of delivery. From 1-ton vans to 32-ton container trailers — 99.5% on-time SLA.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    features: ['FTL & LTL Services', 'Real-time GPS Tracking', 'Digital Proof of Delivery', 'Emergency Backup Fleet'],
    metrics: ['Pan-India Fleet', 'GPS Tracked', '99.5% On-time'],
  },
  {
    title: 'Integrated 3PL Solutions',
    badge: 'Enterprise Suite',
    emphasis: false,
    description:
      'Orchestrate your entire supply chain through a single partner — combining manpower, warehousing, and transportation into one seamlessly managed ecosystem with real-time analytics and dedicated account management.',
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
    features: ['End-to-end Supply Chain', 'Dedicated Account Management', 'Performance Analytics', 'Single-point Accountability'],
    metrics: ['End-to-end', 'Dedicated Manager', 'Analytics Dashboard'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!isInView) return;
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((el, i) => {
        if (!el) return;
        gsap.fromTo(
          el.querySelectorAll('.feature-item'),
          { opacity: 0, x: -15 },
          {
            opacity: 1,
            x: 0,
            duration: 0.5,
            stagger: 0.08,
            delay: 0.6 + i * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
            },
          }
        );
      });
    });
    return () => ctx.revert();
  }, [isInView]);

  return (
    <section id="services" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crimson/[0.012] to-transparent pointer-events-none" />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/[0.015] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
            Our Capabilities
          </span>
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Workforce-First{' '}
            <span className="text-gradient-gold">3PL Services</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/40 leading-relaxed">
            From deploying skilled manpower to orchestrating enterprise supply chains — one partner, end-to-end.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 md:grid-cols-2"
        >
          {services.map((service, i) => {
            const isEmphasis = i === 0;
            return (
              <motion.div
                key={service.title}
                custom={i}
                variants={cardVariants}
                ref={(el) => { cardsRef.current[i] = el; }}
                className={`group relative overflow-hidden rounded-2xl border transition-all duration-700 ${
                  isEmphasis
                    ? 'md:col-span-2 border-gold/[0.2] bg-gradient-to-br from-gold/[0.05] via-crimson/[0.02] to-[#0A0E1A] hover:border-gold/[0.35]'
                    : 'border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] hover:border-white/[0.12]'
                }`}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              >
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${
                  isEmphasis
                    ? 'bg-gradient-to-br from-gold/[0.03] via-transparent to-transparent'
                    : 'bg-gradient-to-br from-white/[0.02] via-transparent to-transparent'
                }`} />

                <div className={`absolute -right-24 -top-24 h-56 w-56 rounded-full blur-3xl transition-all duration-700 ${
                  isEmphasis
                    ? 'bg-gold/[0.06] group-hover:bg-gold/[0.1]'
                    : 'bg-gold/[0.02] group-hover:bg-gold/[0.04]'
                }`} />

                <div className="relative z-10 p-6 sm:p-8 lg:p-10">
                  <div className={`grid gap-6 ${
                    isEmphasis ? 'lg:grid-cols-[1fr_1.2fr] lg:gap-12' : ''
                  }`}>
                    <div>
                      <div className="mb-4 flex items-center gap-4">
                        <motion.div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-500 ${
                            isEmphasis
                              ? 'bg-gold text-background shadow-lg shadow-gold/20'
                              : 'bg-gold/10 text-gold group-hover:bg-gold group-hover:text-background'
                          }`}
                          whileHover={{ rotate: 8, scale: 1.08 }}
                          whileTap={{ scale: 0.92 }}
                        >
                          {service.icon}
                        </motion.div>
                        <div>
                          <span className={`text-[10px] font-semibold uppercase tracking-[0.15em] ${
                            isEmphasis ? 'text-gold/60' : 'text-white/20'
                          }`}>
                            {service.badge}
                          </span>
                          <h3 className={`text-lg font-bold leading-tight ${
                            isEmphasis ? 'text-gold' : 'text-white'
                          }`}>
                            {service.title}
                          </h3>
                        </div>
                      </div>

                      <p className={`text-sm leading-relaxed mb-5 ${
                        isEmphasis ? 'text-white/55' : 'text-white/40'
                      }`}>
                        {service.description}
                      </p>

                      <div className={`grid grid-cols-3 gap-2 mb-5 ${
                        isEmphasis ? 'sm:gap-3' : ''
                      }`}>
                        {service.metrics.map((metric) => (
                          <div
                            key={metric}
                            className={`rounded-lg border text-center py-2 px-1 transition-all duration-500 ${
                              isEmphasis
                                ? 'border-gold/10 bg-gold/[0.03] group-hover:border-gold/20'
                                : 'border-white/[0.04] bg-white/[0.02] group-hover:border-white/[0.08]'
                            }`}
                          >
                            <span className="text-[11px] font-semibold text-white/70">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={isEmphasis ? 'lg:border-l lg:border-white/[0.04] lg:pl-10' : ''}>
                      <p className={`text-xs font-semibold uppercase tracking-[0.15em] mb-3 ${
                        isEmphasis ? 'text-gold/50' : 'text-white/20'
                      }`}>
                        Key Features
                      </p>
                      <ul className="space-y-2.5">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="feature-item flex items-start gap-2.5 text-sm"
                          >
                            <span className={`mt-1.5 h-1.5 w-1.5 rounded-full shrink-0 ${
                              isEmphasis ? 'bg-gold' : 'bg-gold/40'
                            }`} />
                            <span className={isEmphasis ? 'text-white/65' : 'text-white/35'}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <motion.button
                        onClick={() => {
                          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all duration-300 ${
                          isEmphasis
                            ? 'text-gold hover:text-gold/80'
                            : 'text-white/30 hover:text-gold'
                        }`}
                        whileHover={{ gap: '10px' }}
                      >
                        {isEmphasis ? 'Discuss Your Workforce Needs' : 'Learn More'}
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.button>
                    </div>
                  </div>
                </div>

                {isEmphasis && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
