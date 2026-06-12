'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import ThreeBackground from './ThreeBackground';
import { useLenisScroll } from '@/lib/lenis-context';

const taglines = [
  'India\'s Workforce & 3PL Infrastructure Partner',
  'Powering India\'s Workforce. Delivering End-to-End 3PL Excellence.',
  'Building the Backbone of Indian Industry.',
];

const services = [
  { label: 'Manpower Supply', target: '#services' },
  { label: 'Warehousing', target: '#services' },
  { label: 'Transportation', target: '#services' },
  { label: '3PL Solutions', target: '#services' },
];

export default function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const exploreBtnRef = useRef<HTMLAnchorElement>(null);
  const contactBtnRef = useRef<HTMLAnchorElement>(null);
  const { scrollTo } = useLenisScroll();
  const readyRef = useRef(false);

  useEffect(() => {
    readyRef.current = true;
    const interval = setInterval(() => {
      setTaglineIndex((prev) => (prev + 1) % taglines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char');
        gsap.fromTo(
          chars,
          { y: 100, opacity: 0, rotateX: -30 },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.2,
            stagger: 0.03,
            ease: 'power4.out',
            delay: 0.3,
          }
        );
      }

      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 2.5, ease: 'power2.out', delay: 1.5 }
        );
      }
    });

    return () => ctx.revert();
    }, []);

  const handleExploreServices = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const btn = exploreBtnRef.current;
    if (!btn) return;
    gsap.timeline({ onComplete: () => scrollTo('#services') })
      .to(btn, { scale: 0.93, duration: 0.08, ease: 'power2.in' })
      .to(btn, { scale: 1.07, duration: 0.15, ease: 'power2.out' })
      .to(btn, { scale: 1, duration: 0.1, ease: 'power2.out' });
  }, [scrollTo]);

  const handleContactClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    const btn = contactBtnRef.current;
    if (!btn) return;
    gsap.timeline({ onComplete: () => scrollTo('#contact') })
      .to(btn, { scale: 0.93, duration: 0.08, ease: 'power2.in' })
      .to(btn, { scale: 1.06, duration: 0.15, ease: 'power2.out' })
      .to(btn, { scale: 1, duration: 0.1, ease: 'power2.out' });
  }, [scrollTo]);

  const title = 'Sai Sree Logistics';

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <ThreeBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-[#050816]/20 via-[#050816]/60 to-[#050816] pointer-events-none" />

      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-gold/[0.03] via-crimson/[0.01] to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.04] px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-gold/90">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              Enterprise Logistics &amp; Workforce Solutions
            </span>
          </motion.div>

          <h1
            ref={titleRef}
            className="mb-4 overflow-hidden text-5xl font-bold leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            style={{ perspective: '800px' }}
          >
            {title.split('').map((char, i) => (
              <span
                key={i}
                className="char inline-block"
                style={{ opacity: 0 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>

          <div className="mb-10 h-12 sm:h-14 flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -30, filter: 'blur(4px)' }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto leading-relaxed"
              >
                {taglines[taglineIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <motion.a
              ref={exploreBtnRef}
              href="#services"
              onClick={handleExploreServices}
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-background"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Explore Services</span>
              <svg className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
            </motion.a>
            <motion.a
              ref={contactBtnRef}
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold/50 hover:text-gold hover:bg-gold/[0.04]"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Us
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m0 0l-4-4m4 4l-4 4" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {services.map((service) => (
              <button
                key={service.label}
                onClick={() => scrollTo(service.target)}
                className="group flex items-center gap-2 text-xs sm:text-sm text-white/30 hover:text-gold transition-colors duration-300"
              >
                <span className="h-1 w-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors duration-300" />
                {service.label}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      <div
        ref={progressRef}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-primary scale-x-0"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Scroll</span>
          <svg className="h-4 w-4 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
