'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import ThreeBackground from './ThreeBackground';
import { useLenisScroll } from '@/lib/lenis-context';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const exploreBtnRef = useRef<HTMLAnchorElement>(null);
  const contactBtnRef = useRef<HTMLAnchorElement>(null);
  const { scrollTo } = useLenisScroll();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll('.char');
        gsap.fromTo(
          chars,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.04,
            ease: 'power4.out',
            delay: 0.5,
          }
        );
      }

      if (counterRef.current) {
        gsap.fromTo(
          counterRef.current,
          { width: '0%' },
          { width: '100%', duration: 2, ease: 'power2.out', delay: 1.8 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleExploreServices = (e: React.MouseEvent) => {
    e.preventDefault();
    const btn = exploreBtnRef.current;
    if (!btn) return;

    gsap.timeline({
      onComplete: () => scrollTo('#services'),
    })
      .to(btn, { scale: 0.93, duration: 0.1, ease: 'power2.in' })
      .to(btn, { scale: 1.08, duration: 0.2, ease: 'power2.out' })
      .to(btn, { scale: 1, duration: 0.15, ease: 'power2.out' });
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const btn = contactBtnRef.current;
    if (!btn) return;

    gsap.timeline({
      onComplete: () => scrollTo('#contact'),
    })
      .to(btn, { scale: 0.93, duration: 0.1, ease: 'power2.in' })
      .to(btn, { scale: 1.06, duration: 0.2, ease: 'power2.out' })
      .to(btn, { scale: 1, duration: 0.15, ease: 'power2.out' });
  };

  const title = 'Sai Sree Logistics';
  const subtitle = "India's Workforce & 3PL Infrastructure Partner";

  const stagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <ThreeBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050816]/50 to-[#050816]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-block rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-gold">
              India&apos;s Premier Logistics Partner
            </span>
          </motion.div>

          <h1
            ref={titleRef}
            className="mb-6 overflow-hidden text-5xl font-bold leading-tight tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
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

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <motion.a
              ref={exploreBtnRef}
              href="#services"
              onClick={handleExploreServices}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Explore Services</span>
              <svg
                className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <div className="absolute inset-0 -translate-x-full bg-white transition-transform duration-300 group-hover:translate-x-0" />
            </motion.a>
            <motion.a
              ref={contactBtnRef}
              href="#contact"
              onClick={handleContactClick}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-gold hover:text-gold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Us
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="mt-16 flex items-center justify-center gap-6">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-2 border-[#050816] bg-gradient-to-br from-gold to-crimson"
              />
            ))}
          </div>
          <p className="text-sm text-white/40">
            Trusted by <span className="font-semibold text-white/80">500+</span> businesses
            across India
          </p>
        </div>
      </div>

      <div
        ref={counterRef}
        className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-primary"
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs uppercase tracking-widest text-white/30">
            Scroll
          </span>
          <svg
            className="h-5 w-5 text-white/30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
