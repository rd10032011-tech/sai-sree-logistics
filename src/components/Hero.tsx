'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useLenisScroll } from '@/lib/lenis-context';

const metrics = [
  { value: '5,000+', label: 'Workers Deployed' },
  { value: '500+', label: 'Enterprise Clients' },
  { value: '20+', label: 'Cities' },
  { value: '15+', label: 'Years of Excellence' },
];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const serviceBarRef = useRef<HTMLDivElement>(null);
  const { scrollTo } = useLenisScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.4, ease: 'power3.out', delay: 0.4 }
        );
      }
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power2.out', delay: 0.9 }
        );
      }
      if (metricsRef.current) {
        const items = metricsRef.current.querySelectorAll('.metric-item');
        gsap.fromTo(
          items,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power2.out', delay: 1.3 }
        );
      }
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.6 }
        );
      }
      if (serviceBarRef.current) {
        gsap.fromTo(
          serviceBarRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out', delay: 1.9 }
        );
      }
    });
    return () => ctx.revert();
  }, []);

  const handleScroll = useCallback((target: string) => {
    scrollTo(target);
  }, [scrollTo]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-24 sm:pt-28"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 30% at 50% 0%, rgba(245,163,0,0.05) 0%, transparent 100%),
            radial-gradient(ellipse 50% 50% at 25% 30%, rgba(245,163,0,0.02) 0%, transparent 100%),
            radial-gradient(ellipse 50% 50% at 75% 30%, rgba(179,27,27,0.015) 0%, transparent 100%),
            linear-gradient(180deg, transparent 50%, #050816 100%)
          `,
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'repeating-linear-gradient(90deg, transparent 0%, transparent 8%, rgba(245,163,0,0.015) 8.5%, transparent 9%, transparent 100%)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold/60 to-transparent pointer-events-none" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="mb-5">
            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/30">
              India&apos;s Workforce &amp; 3PL Infrastructure Partner
            </span>
          </div>

          <h1
            ref={titleRef}
            className="mb-4 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            Powering India&apos;s <br />
            <span className="text-gradient-gold">Workforce</span>
          </h1>

          <div className="mx-auto mb-5 h-px w-24 bg-gold/60" />

          <p
            ref={subtitleRef}
            className="mx-auto mb-10 max-w-3xl text-base leading-relaxed text-white/40 sm:text-lg"
          >
            End-to-end manpower supply, warehousing, transportation, and integrated 3PL operations at scale.
          </p>

          <div
            ref={metricsRef}
            className="mb-10 flex flex-wrap items-center justify-center gap-x-0 gap-y-4"
          >
            {metrics.map((m, i) => (
              <div key={m.label} className="metric-item flex items-center">
                <div className="px-5 sm:px-8 text-center">
                  <span className="block text-2xl font-bold text-gold sm:text-3xl lg:text-4xl">{m.value}</span>
                  <span className="text-xs text-white/30 sm:text-sm">{m.label}</span>
                </div>
                {i < metrics.length - 1 && (
                  <span className="hidden h-8 w-px bg-white/10 sm:block" />
                )}
              </div>
            ))}
          </div>

          <div ref={ctaRef}>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.a
                href="#services"
                onClick={(e) => { e.preventDefault(); handleScroll('#services'); }}
                className="inline-flex items-center gap-2.5 bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:brightness-110 hover:shadow-gold"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Services
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleScroll('#contact'); }}
                className="inline-flex items-center gap-2.5 border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/50 hover:text-gold hover:bg-gold/[0.04]"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Us
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div
          ref={serviceBarRef}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10"
        >
          {[
            { label: 'Manpower Supply', target: '#services' },
            { label: 'Warehousing', target: '#services' },
            { label: 'Transportation', target: '#services' },
            { label: '3PL Solutions', target: '#services' },
          ].map((s) => (
            <button
              key={s.label}
              onClick={() => handleScroll(s.target)}
              className="group flex items-center gap-3 text-xs text-white/20 transition-colors duration-300 hover:text-gold sm:text-sm"
            >
              <span className="h-px w-5 bg-gold/40 transition-colors duration-300 group-hover:bg-gold" />
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/10">Scroll</span>
      </div>
    </section>
  );
}
