'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 15,
    suffix: '+',
    label: 'Years of Excellence',
    prefix: '',
    sublabel: 'Serving Indian industry since 2010',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    value: 500,
    suffix: '+',
    label: 'Active Clients',
    prefix: '',
    sublabel: 'Across manufacturing & logistics sectors',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    value: 5000,
    suffix: '+',
    label: 'Workforce Deployed',
    prefix: '',
    sublabel: 'Skilled, verified, and compliant personnel',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    value: 20,
    suffix: '+',
    label: 'Cities Covered',
    prefix: '',
    sublabel: 'Pan-India operational footprint',
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
      </svg>
    ),
  },
];

function AnimatedCounter({
  value,
  suffix,
  label,
  prefix,
  sublabel,
  icon,
  index,
}: {
  value: number;
  suffix: string;
  label: string;
  prefix: string;
  sublabel: string;
  icon: React.ReactNode;
  index: number;
}) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: '-80px' });
  const countedRef = useRef(false);

  useEffect(() => {
    if (!isInView || countedRef.current) return;

    countedRef.current = true;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      if (ringRef.current) {
        tl.fromTo(
          ringRef.current,
          { strokeDashoffset: 283 },
          { strokeDashoffset: 283 - (283 * Math.min(value, 100)) / 100, duration: 2 } as gsap.TweenVars,
          '-=1.8'
        );
      }

      tl.to(
        counterRef.current,
        {
          textContent: value,
          duration: 2.2,
          ease: 'power3.out',
          snap: { textContent: 1 },
          delay: 0.3,
          scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%',
          },
        },
        0
      );
    });

    return () => ctx.revert();
  }, [isInView, value]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-6 sm:p-8 transition-all duration-700 hover:border-gold/[0.15]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-gold/[0.02] to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gold/[0.03] blur-3xl transition-all duration-700 group-hover:bg-gold/[0.06]" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative mb-5">
          <svg className="h-20 w-20 sm:h-24 sm:w-24 -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="rgba(245,163,0,0.06)"
              strokeWidth="3"
            />
            <circle
              ref={ringRef}
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#goldGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="283"
              strokeDashoffset="283"
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#F5A300" />
                <stop offset="100%" stopColor="#B31B1B" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-background">
              {icon}
            </div>
          </div>
        </div>

        <div className="mb-1 text-3xl font-bold tracking-tight sm:text-4xl">
          <span className="bg-gradient-to-r from-gold via-gold to-crimson bg-clip-text text-transparent">
            {prefix}
            <span ref={counterRef}>0</span>
            {suffix}
          </span>
        </div>

        <p className="text-sm font-semibold text-white/80">{label}</p>
        <p className="mt-1 text-[11px] text-white/30 tracking-wide">{sublabel}</p>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });

  return (
    <section ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.01] to-transparent pointer-events-none" />

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

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <AnimatedCounter key={stat.label} {...stat} index={i} />
          ))}
        </div>

        {isInView && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-16 h-[1px] w-full origin-left bg-gradient-to-r from-transparent via-gold/20 to-transparent"
          />
        )}
      </div>
    </section>
  );
}
