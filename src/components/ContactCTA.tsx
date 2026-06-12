'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

export default function ContactCTA() {
  const [sending, setSending] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (sending) return;

    const btn = btnRef.current;
    if (!btn) return;

    setSending(true);

    gsap.timeline()
      .to(btn, { scale: 0.95, duration: 0.08, ease: 'power2.in' })
      .to(btn, { scale: 1, duration: 0.12, ease: 'power2.out' })
      .call(() => {
        gsap.to(btn.querySelector('.btn-text'), {
          opacity: 0,
          duration: 0.15,
          onComplete: () => {
            if (btn.querySelector('.btn-spinner')) {
              gsap.set(btn.querySelector('.btn-spinner'), { display: 'inline-flex', opacity: 0 });
              gsap.to(btn.querySelector('.btn-spinner'), { opacity: 1, duration: 0.15 });
            }
          },
        });
      })
      .to(btn, {
        scale: 1.02,
        duration: 0.3,
        ease: 'power1.inOut',
      });

    setTimeout(() => {
      if (btn) {
        gsap.timeline()
          .to(btn, {
            scale: 1.02,
            duration: 0.1,
            onStart: () => {
              if (btn.querySelector('.btn-spinner')) {
                gsap.set(btn.querySelector('.btn-spinner'), { display: 'none' });
              }
            },
          })
          .to(btn.querySelector('.btn-text'), {
            opacity: 1,
            innerText: 'Message Sent!',
            duration: 0.15,
            onComplete: () => {
              gsap.to(btn, { scale: 1, duration: 0.15, ease: 'power2.out' });
            },
          })
          .to(btn, { x: -6, duration: 0.08, ease: 'power2.inOut' })
          .to(btn, { x: 6, duration: 0.08, ease: 'power2.inOut' })
          .to(btn, { x: -4, duration: 0.08, ease: 'power2.inOut' })
          .to(btn, { x: 4, duration: 0.08, ease: 'power2.inOut' })
          .to(btn, { x: 0, duration: 0.08, ease: 'power2.out' });
      }
      setSending(false);
    }, 1500);
  };

  const contactItems = [
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
      label: 'Phone',
      value: '+91 97911 20354',
      href: 'tel:+919791120354',
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label: 'Email',
      value: 'prabakaran@saisreelogistics.com',
      href: 'mailto:prabakaran@saisreelogistics.com',
    },
    {
      icon: (
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
      label: 'Address',
      value: 'Kannigaipair, Thiruvallur, Tamil Nadu 601102',
      href: 'https://maps.google.com/?q=Kannigaipair+Thiruvallur+Tamil+Nadu+601102',
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-gradient-radial from-gold/5 via-crimson/[0.02] to-transparent blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-[11px] font-semibold uppercase tracking-[0.25em] text-gold/70">
            Let&apos;s Talk
          </span>
          <h2 className="mb-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Ready to Transform Your{' '}
            <span className="text-gradient-gold">Supply Chain</span>?
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base text-white/40 leading-relaxed">
            Partner with India&apos;s most reliable workforce and logistics provider.
            Get in touch for a free consultation.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-5">
              {contactItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-xl border border-white/[0.04] bg-white/[0.02] p-4 transition-all duration-300 hover:border-gold/[0.12] hover:bg-gold/[0.03] hover:shadow-glow"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10 transition-colors duration-300 group-hover:bg-gold"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-gold transition-colors duration-300 group-hover:text-background">{item.icon}</span>
                  </motion.div>
                  <div>
                    <p className="text-sm text-white/40">{item.label}</p>
                    <p className="font-medium text-white transition-colors duration-300 group-hover:text-gold">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 } as const}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-gradient-card p-6 shadow-glow sm:p-8">
              <h3 className="mb-6 text-xl font-bold">Send us a Message</h3>
              <form
                action="#"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-white/10"
                    whileFocus={{ scale: 1.01, borderColor: '#F5A300' }}
                  />
                  <motion.input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-white/10"
                    whileFocus={{ scale: 1.01, borderColor: '#F5A300' }}
                  />
                </div>
                <motion.input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-white/10"
                  whileFocus={{ scale: 1.01, borderColor: '#F5A300' }}
                />
                <motion.select
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-gold/50 focus:bg-white/10 appearance-none"
                  whileFocus={{ scale: 1.01, borderColor: '#F5A300' }}
                >
                  <option value="" disabled selected className="bg-[#0A0E1A] text-white/30">Select Service</option>
                  <option value="manpower" className="bg-[#0A0E1A]">Manpower Supply</option>
                  <option value="warehousing" className="bg-[#0A0E1A]">Warehousing</option>
                  <option value="transportation" className="bg-[#0A0E1A]">Transportation</option>
                  <option value="3pl" className="bg-[#0A0E1A]">Integrated 3PL Solutions</option>
                  <option value="other" className="bg-[#0A0E1A]">Other</option>
                </motion.select>
                <motion.textarea
                  rows={4}
                  placeholder="Tell us about your requirements"
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-gold/50 focus:bg-white/10"
                  whileFocus={{ scale: 1.01, borderColor: '#F5A300' }}
                />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <motion.button
                    ref={btnRef}
                    type="submit"
                    disabled={sending}
                    className="relative flex-1 overflow-hidden rounded-xl bg-gold px-6 py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:shadow-gold hover:brightness-110"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="btn-text">{sending ? 'Sending...' : 'Send Message'}</span>
                    {sending && (
                      <span
                        className="btn-spinner absolute inset-0 flex items-center justify-center"
                        style={{ display: 'none' }}
                      >
                        <svg className="h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                      </span>
                    )}
                  </motion.button>
                  <motion.a
                    href="tel:+919791120354"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-gold/20 bg-gold/[0.04] px-6 py-3.5 text-sm font-semibold text-gold transition-all duration-300 hover:bg-gold/[0.08] hover:shadow-gold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    Call Now
                  </motion.a>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
