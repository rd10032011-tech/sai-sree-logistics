'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 15, suffix: '+', label: 'Years of Excellence', prefix: '' },
  { value: 500, suffix: '+', label: 'Happy Clients', prefix: '' },
  { value: 5000, suffix: '+', label: 'Workforce Deployed', prefix: '' },
  { value: 20, suffix: '+', label: 'Cities Covered', prefix: '' },
];

function AnimatedCounter({ value, suffix, label, prefix }: { value: number; suffix: string; label: string; prefix: string }) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView || !counterRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        counterRef.current,
        { textContent: 0 },
        {
          textContent: value,
          duration: 2.5,
          ease: 'power3.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: counterRef.current,
            start: 'top 85%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, [isInView, value]);

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-gradient-card p-8 text-center transition-all duration-500 hover:border-gold/20 hover:shadow-glow"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
          <span className="text-gradient-gold">
            {prefix}
            <span ref={counterRef}>0</span>
            {suffix}
          </span>
        </div>
        <p className="text-sm font-medium text-white/60">{label}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            By the{' '}
            <span className="text-gradient-gold">Numbers</span>
          </h2>
          <p className="mx-auto max-w-2xl text-white/50">
            Our track record speaks for itself. Decades of excellence in logistics and workforce management.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
