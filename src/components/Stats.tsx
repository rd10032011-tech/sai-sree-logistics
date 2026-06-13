'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 1,
    suffix: '+',
    label: 'Year of Excellence',
    sublabel: 'Serving Indian industry since 2025',
  },
  {
    value: 500,
    suffix: '+',
    label: 'Active Clients',
    sublabel: 'Across manufacturing & logistics sectors',
  },
  {
    value: 5000,
    suffix: '+',
    label: 'Workforce Deployed',
    sublabel: 'Skilled, verified, and compliant personnel',
  },
  {
    value: 20,
    suffix: '+',
    label: 'Cities Covered',
    sublabel: 'Pan-India operational footprint',
  },
];

function AnimatedCounter({
  value,
  suffix,
  label,
  sublabel,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
  index: number;
}) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-80px' });
  const countedRef = useRef(false);

  useEffect(() => {
    if (!isInView || countedRef.current) return;
    countedRef.current = true;

    gsap.to(counterRef.current, {
      textContent: value,
      duration: 2.2,
      ease: 'power3.out',
      snap: { textContent: 1 },
      delay: 0.3 + index * 0.1,
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
      },
    });
  }, [isInView, value, index]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="relative border-t border-white/[0.06] pt-8"
    >
      <div className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="text-gradient-gold">
          <span ref={counterRef}>0</span>
          {suffix}
        </span>
      </div>
      <p className="mt-2 text-base font-semibold text-white/80">{label}</p>
      <p className="mt-1 text-sm text-white/30">{sublabel}</p>
    </motion.div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.008] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
            Enterprise Metrics
          </span>
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            By the{' '}
            <span className="text-gradient-gold">Numbers</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/40 leading-relaxed">
            A decade and a half of measurable impact across India&apos;s industrial and logistics landscape.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedCounter key={stat.label} {...stat} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 h-px w-full origin-left bg-gradient-to-r from-transparent via-gold/20 to-transparent"
        />
      </div>
    </section>
  );
}
