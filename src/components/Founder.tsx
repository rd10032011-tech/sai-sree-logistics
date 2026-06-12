'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Founder() {
  return (
    <section id="founder" className="relative py-24 sm:py-32">
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
                src="/images/founder.jpeg"
                alt="Founder & CEO, Sai Sree Logistics"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent opacity-40" />
              <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-primary opacity-30 blur-xl" />
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
                strength of its people and the efficiency of its supply chain. For over 15 years,
                we have been India&apos;s trusted partner in workforce management and
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
      </div>
    </section>
  );
}
