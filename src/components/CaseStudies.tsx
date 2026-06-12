'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenisScroll } from '@/lib/lenis-context';

gsap.registerPlugin(ScrollTrigger);

const allCaseStudies = [
  {
    id: 'auto-manpower',
    title: 'Automotive Giant — Nationwide Manpower Deployment',
    client: 'Leading Automotive OEM',
    industry: 'Automotive Manufacturing',
    challenge: 'Scale workforce from 200 to 2,500 across 4 plants in 90 days with full statutory compliance.',
    solution: 'End-to-end recruitment, PF/ESI payroll management, on-site HR coordinators, and 24hr replacement pipeline for 15+ job roles.',
    results: ['2,500+ deployed in 87 days', '99.2% attendance rate', 'Zero compliance gap in 3 audits', '45% cost savings vs vendor model'],
    tag: 'Manpower Supply',
  },
  {
    id: 'ecom-peak',
    title: 'E-Commerce Leader — Peak Season Logistics',
    client: 'Top 3 Indian E-Commerce Platform',
    industry: 'E-Commerce / Fulfillment',
    challenge: 'Handle 5x order volume during festive season across 3 fulfillment centers without SLA breaches.',
    solution: 'Integrated 3PL: temporary manpower surge (800+ staff), additional warehousing capacity (150k sq ft), and dedicated last-mile fleet.',
    results: ['99.7% on-time dispatch', '3.2M units fulfilled', 'Zero SLA breach', 'Repeat engagement for 3 seasons'],
    tag: 'Integrated 3PL',
  },
  {
    id: 'fmcg-supply-chain',
    title: 'FMCG Manufacturer — Supply Chain Overhaul',
    client: 'Multinational FMCG Corporation',
    industry: 'FMCG / Consumer Goods',
    challenge: 'Fragmented logistics across 6 vendors causing 15% shrinkage and delayed distribution to 2,000+ retail touchpoints.',
    solution: 'Single-point 3PL consolidation: warehouse management, fleet routing optimization, and WMS-integrated inventory tracking.',
    results: ['Shrinkage reduced to under 2%', 'Distribution coverage expanded 40%', '15% reduction in logistics cost', 'Real-time visibility via dashboard'],
    tag: 'Warehousing & Transportation',
  },
  {
    id: 'pharma-cold-chain',
    title: 'Pharma Company — Cold Chain Logistics',
    client: 'Top 10 Indian Pharmaceutical Company',
    industry: 'Pharmaceuticals',
    challenge: 'Temperature-controlled storage and distribution for 500+ SKUs across 15 states with strict regulatory compliance.',
    solution: 'Cold chain warehousing (2-8°C), temperature-monitored fleet, batch-wise traceability, and WHOGDP-compliant documentation.',
    results: ['Zero temperature excursion', '100% batch traceability', 'Regulatory audit pass rate', '30% faster distribution cycles'],
    tag: 'Integrated 3PL',
  },
  {
    id: 'warehouse-automation',
    title: 'Retail Chain — Warehouse Modernization',
    client: 'Leading Indian Retail Chain',
    industry: 'Retail',
    challenge: 'Legacy warehouse operations causing 12% inventory inaccuracy and 4-hour average truck turnaround time.',
    solution: 'WMS implementation, pick-and-pack process re-engineering, workforce training, and barcode-based inventory tracking.',
    results: ['99.8% inventory accuracy', 'Truck turnaround reduced to 45 min', '3x throughput increase', 'Real-time stock visibility'],
    tag: 'Warehousing & Transportation',
  },
  {
    id: 'construction-mobilization',
    title: 'Infrastructure Project — Mass Workforce Mobilization',
    client: 'Leading Infrastructure Developer',
    industry: 'Construction / Infrastructure',
    challenge: 'Mobilize 1,200+ construction workers to a remote project site within 45 days with accommodation and welfare compliance.',
    solution: 'Bulk recruitment in Tamil Nadu & Andhra Pradesh, camp accommodation setup, statutory welfare compliance, and weekly payroll.',
    results: ['1,200+ mobilized in 40 days', '100% statutory compliance', '95% workforce retention', '0 safety incidents in 6 months'],
    tag: 'Manpower Supply',
  },
];

const tags = ['All', 'Manpower Supply', 'Integrated 3PL', 'Warehousing & Transportation'];

function AnimatedMetricResults({ results }: { results: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView.current) {
          isInView.current = true;
          const items = ref.current?.querySelectorAll('.metric-item');
          if (items) {
            gsap.fromTo(
              items,
              { opacity: 0, y: 10, scale: 0.95 },
              { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: 'power2.out' }
            );
          }
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-2 gap-2">
      {results.map((result) => (
        <div
          key={result}
          className="metric-item rounded-lg border border-gold/[0.08] bg-gold/[0.03] px-3 py-2 text-center"
          style={{ opacity: 0 }}
        >
          <span className="text-[11px] font-semibold text-gold/80">{result}</span>
        </div>
      ))}
    </div>
  );
}

export default function CaseStudies() {
  const [activeTag, setActiveTag] = useState('All');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const { scrollTo } = useLenisScroll();

  const filtered = activeTag === 'All'
    ? allCaseStudies
    : allCaseStudies.filter((s) => s.tag === activeTag);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="case-studies" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-crimson/[0.012] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 text-center"
        >
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
            Proven Results
          </span>
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Case <span className="text-gradient-gold">Studies</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/40 leading-relaxed">
            Real engagements, measurable outcomes — how we solve complex workforce and logistics challenges for India&apos;s leading enterprises.
          </p>
        </motion.div>

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => { setActiveTag(tag); setExpandedId(null); }}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-all duration-300 ${
                activeTag === tag
                  ? 'bg-gold text-background shadow-gold'
                  : 'border border-white/10 bg-white/[0.03] text-white/50 hover:border-gold/30 hover:text-gold'
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {tag}
            </motion.button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((study) => (
              <motion.article
                key={study.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow ${
                  expandedId === study.id ? 'lg:col-span-3' : ''
                }`}
              >
                <button
                  onClick={() => toggleExpand(study.id)}
                  className="relative z-10 flex flex-col h-full text-left p-6 sm:p-8"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/[0.02] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="inline-block rounded-full bg-gold/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-gold">
                        {study.tag}
                      </span>
                    </div>

                    <h3 className="mb-1 text-base font-bold leading-snug text-white sm:text-lg">
                      {study.title}
                    </h3>
                    <p className="mb-3 text-xs text-white/30">
                      {study.client} &middot; {study.industry}
                    </p>

                    <p className="mb-2 text-sm text-white/50">
                      <span className="font-semibold text-white/70">Challenge:</span> {study.challenge}
                    </p>

                    <AnimatePresence>
                      {expandedId === study.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="mb-4 text-sm text-white/40">
                            <span className="font-semibold text-white/60">Solution:</span> {study.solution}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <div className="mt-auto">
                      <AnimatedMetricResults results={study.results} />
                    </div>

                    {expandedId !== study.id && (
                      <span className="mt-3 text-xs font-semibold text-gold/60 group-hover:text-gold transition-colors">
                        Click to expand →
                      </span>
                    )}
                  </div>
                </button>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 rounded-xl border border-gold/20 bg-gold/[0.04] px-6 py-3 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold/[0.08] hover:shadow-gold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Discuss Your Project
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
