'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    phase: '01',
    title: 'Requirement',
    desc: 'We conduct an on-site audit and stakeholder consultation to map your workforce needs, shift patterns, skill requirements, and compliance obligations.',
    details: ['On-site workforce audit', 'Skill & role requirement mapping', 'Shift & volume planning', 'Compliance & SLA definition'],
  },
  {
    phase: '02',
    title: 'Recruitment',
    desc: 'We activate multi-channel sourcing — internal database, job platforms, and community networks — to identify pre-vetted candidates matching your specifications.',
    details: ['50,000+ candidate database', 'Multi-channel job posting', 'Pre-screening interviews', 'Skill & aptitude assessment'],
  },
  {
    phase: '03',
    title: 'Verification',
    desc: 'Every candidate undergoes rigorous background verification, document authentication, police clearance, and medical fitness checks before shortlisting.',
    details: ['Police background verification', 'Document & credential audit', 'Medical fitness screening', 'Reference & employment checks'],
  },
  {
    phase: '04',
    title: 'Deployment',
    desc: 'Selected candidates are deployed with site induction, safety training, biometric registration, and PF/ESI enrollment — ready from day one.',
    details: ['Site induction & safety training', 'HRMS & biometric enrollment', 'Uniform & PPE issuance', 'PF/ESI registration activation'],
  },
  {
    phase: '05',
    title: 'Management',
    desc: 'Dedicated on-site coordinator manages daily operations — attendance, payroll, compliance — backed by 24-hour replacement guarantee and monthly reviews.',
    details: ['On-site HR coordinator', '24hr replacement guarantee', 'Monthly MIS & compliance reports', 'Quarterly performance reviews'],
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
          duration: 1.8,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: lineRef.current,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1.5,
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
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
            Operational Excellence
          </span>
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            The Workforce Engine Behind{' '}
            <span className="text-gradient-gold">India&apos;s Operations</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/40 leading-relaxed">
            A proven 5-phase methodology — from requirement to management — that deploys thousands of skilled professionals across the country with quality, compliance, and continuity.
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
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-[#0A0E1A] text-gold shadow-lg shadow-gold/10">
                    <span className="text-lg font-bold">{step.phase}</span>
                  </div>
                </div>

                <div className="group relative flex-1 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#0A0E1A] to-[#050816] p-6 sm:p-8 transition-all duration-500 hover:border-gold/[0.12] hover:shadow-glow">
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
