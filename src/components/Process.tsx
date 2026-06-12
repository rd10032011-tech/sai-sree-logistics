'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    phase: '01',
    title: 'Requirement Analysis',
    desc: 'We conduct an on-site audit and stakeholder consultation to map your workforce needs, shift patterns, skill requirements, and compliance obligations.',
    details: ['On-site workforce audit', 'Skill & role requirement mapping', 'Shift & volume planning', 'Compliance & SLA definition'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    phase: '02',
    title: 'Recruitment & Sourcing',
    desc: 'We activate multi-channel sourcing — internal database, job platforms, and community networks — to identify pre-vetted candidates matching your specifications.',
    details: ['50,000+ candidate database', 'Multi-channel job posting', 'Pre-screening interviews', 'Skill & aptitude assessment'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    phase: '03',
    title: 'Screening',
    desc: 'Every candidate undergoes rigorous background verification, document authentication, police clearance, and medical fitness checks before shortlisting.',
    details: ['Police background verification', 'Document & credential audit', 'Medical fitness screening', 'Reference & employment checks'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
  {
    phase: '04',
    title: 'Deployment & Onboarding',
    desc: 'Selected candidates are deployed with site induction, safety training, biometric registration, and PF/ESI enrollment — ready from day one.',
    details: ['Site induction & safety training', 'HRMS & biometric enrollment', 'Uniform & PPE issuance', 'PF/ESI registration activation'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
      </svg>
    ),
  },
  {
    phase: '05',
    title: 'Ongoing Management',
    desc: 'Dedicated on-site coordinator manages daily operations — attendance, payroll, compliance — backed by 24-hour replacement guarantee and monthly reviews.',
    details: ['On-site HR coordinator', '24hr replacement guarantee', 'Monthly MIS & compliance reports', 'Quarterly performance reviews'],
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isInView || !lineRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
          },
        }
      );
    });
    return () => ctx.revert();
  }, [isInView]);

  return (
    <section id="process" ref={sectionRef} className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gold/[0.005] to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
            How It Works
          </span>
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Workforce Deployment{' '}
            <span className="text-gradient-gold">Process</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/40 leading-relaxed">
            A proven 5-phase methodology — from requirement analysis to ongoing management — ensuring quality, compliance, and continuity at every step.
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={lineRef}
            className="absolute left-[23px] top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-gold/40 via-gold/20 to-transparent hidden lg:block"
          />

          <div className="grid gap-8 lg:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.phase}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col gap-6 lg:flex-row ${
                  i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="hidden lg:flex lg:w-1/2 lg:items-start lg:justify-center lg:pt-2">
                  <div className={`${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <span className="text-[64px] font-bold leading-none text-gold/10 select-none">
                      {step.phase}
                    </span>
                  </div>
                </div>

                <div className="relative flex shrink-0 items-start justify-center lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-[#0A0E1A] text-gold shadow-lg shadow-gold/10"
                  >
                    {step.icon}
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative flex-1 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-6 sm:p-8 transition-all duration-500 hover:border-gold/[0.12] hover:shadow-glow"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gold/[0.015] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative z-10">
                    <div className="mb-1 flex items-center gap-3">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold/10 text-xs font-bold text-gold lg:hidden">
                        {step.phase}
                      </span>
                      <h3 className="text-lg font-bold text-white sm:text-xl">{step.title}</h3>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-white/50">{step.desc}</p>
                    <ul className="grid grid-cols-2 gap-2">
                      {step.details.map((detail) => (
                        <li
                          key={detail}
                          className="flex items-center gap-2 text-xs sm:text-sm text-white/40"
                        >
                          <span className="h-1 w-1 shrink-0 rounded-full bg-gold/60" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
