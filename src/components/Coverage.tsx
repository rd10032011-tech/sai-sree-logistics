'use client';

import { motion } from 'framer-motion';

const cities = [
  'Chennai', 'Bengaluru', 'Hyderabad', 'Mumbai', 'Pune', 'Delhi NCR',
  'Kolkata', 'Ahmedabad', 'Coimbatore', 'Salem', 'Tirupur', 'Madurai',
  'Trichy', 'Vijayawada', 'Visakhapatnam', 'Kochi', 'Jaipur', 'Lucknow',
  'Indore', 'Bhubaneswar',
];

export default function Coverage() {
  return (
    <section id="coverage" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-crimson/[0.02] to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.2em] text-gold">
            Where We Operate
          </span>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Our{' '}
            <span className="text-gradient-gold">Pan-India</span> Coverage
          </h2>
          <p className="mx-auto max-w-2xl text-white/50">
            Strategic presence across major industrial, commercial and logistics hubs nationwide.
          </p>
        </motion.div>

        <div className="relative mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[500px] rounded-full bg-gradient-radial from-gold/5 via-transparent to-transparent blur-3xl" />
          </div>

          <div className="relative grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {cities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group rounded-xl border border-white/5 bg-gradient-card px-4 py-3.5 text-center transition-all duration-300 hover:border-gold/20 hover:shadow-glow"
              >
                <span className="text-sm font-medium text-white/60 transition-colors group-hover:text-gold">
                  {city}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
