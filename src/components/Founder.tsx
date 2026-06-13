'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLenisScroll } from '@/lib/lenis-context';

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: '2025', label: 'Founded in Chennai', desc: 'Established with a vision to bridge India\'s workforce gap — began operations deploying skilled manpower to industrial clients.', icon: '🏢' },
  { year: '2025', label: 'Rapid Client Acquisition', desc: 'Secured 100+ enterprise clients within months, scaling to 500+ across manufacturing, e-commerce, and logistics.', icon: '📈' },
  { year: '2025', label: 'Multi-Service Launch', desc: 'Expanded from manpower supply into warehousing, transportation, and integrated 3PL solutions under one roof.', icon: '⚡' },
  { year: '2026', label: '5,000+ Workforce', desc: 'Crossed 5,000 active deployments across 20+ cities, servicing over 500 enterprise clients across India.', icon: '👥' },
  { year: '2026', label: 'Pan-India Operations', desc: 'Extended footprint to 20+ cities with regional hubs in Chennai, Bangalore, Hyderabad, and Coimbatore.', icon: '🚛' },
  { year: '2026', label: 'Digital Infrastructure', desc: 'Real-time analytics, WMS/HRMS integration, and digital proof-of-delivery powering all operations.', icon: '📊' },
];

const values = [
  { title: 'Integrity', desc: 'Uncompromising ethical standards in every engagement — from compliance to client confidentiality.' },
  { title: 'Reliability', desc: '24-hour replacement guarantee, 99.5% on-time SLA, and round-the-clock operations support.' },
  { title: 'Innovation', desc: 'Digital-first approach with real-time analytics, WMS/HRMS integration, and GPS-enabled fleet tracking.' },
  { title: 'Partnership', desc: 'We measure our success by our clients\' growth — long-term relationships built on trust and delivery.' },
];

export default function Founder() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollTo } = useLenisScroll();

  useEffect(() => {
    const el = statsRef.current;
    if (!isInView || !el) return;
    const ctx = gsap.context(() => {
      const statNums = el.querySelectorAll('.stat-num');
      if (!statNums.length) return;
      gsap.fromTo(
        statNums,
        { textContent: 0 },
        {
          textContent: (i: number) => [15, 500, 5000, 20][i] || i,
          duration: 2.5,
          ease: 'power3.out',
          snap: { textContent: 1 },
          stagger: 0.15,
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    });
    return () => ctx.revert();
  }, [isInView]);

  return (
    <section id="founder" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/[0.015] via-transparent to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full bg-gradient-radial from-crimson/[0.01] via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-2xl border border-white/10">
              <Image
                src="/images/founder.png"
                alt="Founder & CEO, Sai Sree Logistics"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-40" />
              <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-primary opacity-30 blur-xl" />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl border border-gold/20 bg-[#0A0E1A] px-6 py-4 shadow-glow">
              <p className="text-2xl font-bold text-gold">Est.</p>
              <p className="text-xs text-white/40">2025</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-gold">
              Our Legacy
            </span>
            <h2 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl">
              Message from the{' '}
              <span className="text-gradient-gold">Founder</span>
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                At Sai Sree Logistics, we believe that business success is built on the
                strength of its people and the efficiency of its supply chain. Since our founding,
                we have rapidly grown into India&apos;s trusted partner in workforce management and
                third-party logistics.
              </p>
              <p>
                Our journey began with a simple vision — to bridge the gap between India&apos;s
                vast workforce potential and the operational needs of growing enterprises.
                Today, we serve over 500 clients across 20+ cities, deploying thousands of
                skilled professionals daily.
              </p>
              <p>
                We don&apos;t just fill positions or move goods — we build infrastructure
                that empowers businesses to scale with confidence.
              </p>
            </div>
            <div className="mt-8 border-l-2 border-gold pl-6">
              <p className="text-lg font-medium italic text-white/80">
                &ldquo;Your growth is our mission. Your trust is our legacy.&rdquo;
              </p>
              <p className="mt-2 text-sm font-semibold text-gold">— B Prabakaran, Founder &amp; CEO</p>
            </div>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-8"
          >
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">Our Vision</span>
            <p className="text-lg leading-relaxed text-white/70">
              To be India&apos;s most trusted workforce and logistics infrastructure partner — empowering
              every enterprise we serve with reliable talent, seamless operations, and scalable growth.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-8"
          >
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">Our Mission</span>
            <p className="text-lg leading-relaxed text-white/70">
              To bridge India&apos;s workforce potential with enterprise demand through technology-driven
              recruitment, compliant deployment, and continuous management — delivering operational
              excellence at scale.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
              Our Journey
            </span>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Company <span className="text-gradient-gold">Milestones</span>
            </h3>
          </div>

          <div className="relative">
            <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gold/40 via-gold/20 to-gold/5 hidden sm:block" />

            <div className="grid gap-6 sm:gap-8">
              {milestones.map((m, i) => (
                <motion.div
                  key={`${m.year}-${m.label}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex items-start gap-5 sm:gap-8"
                >
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/20 bg-[#0A0E1A] text-lg">
                    {m.icon}
                  </div>
                  <div className="flex-1 pt-1.5">
                    <div className="flex items-center gap-3">
                      <h4 className="text-sm font-bold text-white sm:text-base">{m.label}</h4>
                      <span className="rounded-full bg-gold/10 px-2.5 py-0.5 text-[10px] font-semibold text-gold">{m.year}</span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-white/40">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
              Road Ahead
            </span>
            <h3 className="text-2xl font-bold sm:text-3xl">
              Future <span className="text-gradient-gold">Roadmap</span>
            </h3>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { year: '2025', title: 'Tech-Enabled HRMS', desc: 'Full digitisation of workforce onboarding, attendance, payroll, and compliance via proprietary HRMS platform.' },
              { year: '2026', title: 'Pan-India Expansion', desc: 'Extend operations to 50+ cities with regional hubs in Delhi NCR, Mumbai, Bangalore, and Hyderabad.' },
              { year: '2027', title: 'Automation & AI', desc: 'AI-driven workforce planning, predictive attrition modelling, and automated compliance monitoring across all deployments.' },
              { year: '2028', title: '1,00,000 Workforce', desc: 'Scale to 1,00,000 active deployments serving 5,000+ enterprise clients across India and select international markets.' },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-6 transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"
              >
                <span className="mb-1 inline-block rounded-full bg-gold/10 px-3 py-0.5 text-[11px] font-bold text-gold">{item.year}</span>
                <h4 className="mb-2 mt-2 text-base font-bold text-white">{item.title}</h4>
                <p className="text-sm leading-relaxed text-white/40">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20"
        >
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
              Our Philosophy
            </span>
            <h3 className="text-2xl font-bold sm:text-3xl">
              What We Stand{' '}
              <span className="text-gradient-gold">For</span>
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-6 text-center transition-all duration-500 hover:border-gold/[0.15] hover:shadow-glow"
              >
                <h4 className="mb-2 text-lg font-bold text-gold">{v.title}</h4>
                <p className="text-sm leading-relaxed text-white/40">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-white/50">
            Want to know more about our journey and leadership?
          </p>
          <motion.button
            onClick={() => scrollTo('#contact')}
            className="inline-flex items-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Connect with Us
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
